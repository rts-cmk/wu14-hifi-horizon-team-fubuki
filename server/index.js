// IMPORTS AND SERVER CONSTS
import express from "express"
import cors from "cors"
import fs from "fs"
import argon2 from "argon2"
import dotenv from "dotenv"
const SERVER = express()
const PORT = process.env.PORT || 3000

dotenv.config()

// SERVER USES
SERVER.use(cors())
SERVER.use(express.json())
SERVER.use(express.static("public"))
SERVER.use(express.urlencoded({ extended: true }))

// CONFIG
if (!process.env.SECRET_KEY) throw new Error("missing secret key")
const argonConfig = {
	secret: Buffer.from(process.env.SECRET_KEY)
}
// VALUES
let accountIds = 1

// FUNCTIONS
function loadData(file = "products") {
	return JSON.parse(fs.readFileSync(`./jsons/${file}.json`, "utf8"))
}

function saveData(data, file = "products") {
	fs.writeFileSync(`./jsons/${file}.json`, JSON.stringify(data, null, 2))
}



// REDIRECTS AND OTHERS
SERVER.use("/api", (request, response, next) => {
	next()
})



// PATHS
SERVER.get("/api", (request, response) => {
	response.status(200).send("Everything works")
})

SERVER.get("/api/categories", (request, response) => {
	const recivedData = loadData("categories")

	response.status(200).json({
		success: true,
		message: "here is the list of categories there exist",
		result: recivedData
	})
})

SERVER.get("/api/products", (request, response) => {
	const recivedData = loadData()

	response.status(200).json({
		success: true,
		message: "here is the list of all products",
		result: recivedData
	})
})

SERVER.get("/api/popular", (request, response) => {
	const popularData = loadData("popular")
	const recivedData = loadData()
	let popularList = []

	recivedData.forEach(product => {
		if (popularData.find(id => id == product.id)) {
			popularList.push(product)
		}
	});

	response.status(200).json({
		success: true,
		message: "here is the list of popular products",
		result: popularList
	})
})

SERVER.get("/api/product/:id", (request, response) => {
	const idParam = request.params.id
	const recivedData = loadData()

	if (!recivedData.find((product) => product.id == Number(idParam))) {
		response.status(404).json({
			success: false,
			message: "could not find the product from data"
		})
	} else {
		response.status(200).json(recivedData.find((product) => product.id == Number(idParam)))
	}
})

SERVER.get("/api/compare/:id", (request, response) => {
	const idParam = request.params.id
	const PRODUCTS = loadData()

	if (!PRODUCTS.find(item => item.id == idParam)) {
		response.status(404).json({ success: false, message: "the account does not exist" })
	} else {
		response.status(202).json({
			success: true,
			message: "list of comparabe ids",
			result: PRODUCTS.find(item => item.id == idParam).compare
		})
	}
})

SERVER.post("/api/account/create", async (request, response) => {
	const SECOND_ADDRESS = request.get("address2")
	const STREET = request.get("street") || ""
	const HOUSE = request.get("house") || 0
	const ADDRESS = request.get("address")
	const COUNTRY = request.get("country")
	const PASS = request.get("password")
	let accounts = loadData("accounts")
	const EMAIL = request.get("email")
	const PHONE = request.get("phone")
	const CITY = request.get("city")
	const NAME = request.get("name")
	const ZIP = request.get("zip")

	if (!NAME || !ADDRESS || !SECOND_ADDRESS || !ZIP || !CITY || !COUNTRY || !PHONE || !EMAIL || !PASS) {
		response.status(400).json({ success: false, message: "your request does not have the required fields" })
	} else {
		if (accounts.find(acc => acc.email == EMAIL)) {
			response.status(403).json({ success: false, message: "the account does already exist" })
		} else {
			accountIds += 1

			const AUTH_KEY = crypto.randomUUID()

			const hashedPassword = await argon2.hash(PASS, argonConfig);

			accounts.push({
				"id": accountIds,
				"email": EMAIL,
				"password": hashedPassword,
				"name": NAME,
				"phone": PHONE,
				"auth": AUTH_KEY,
				"address": {
					"city": CITY,
					"street": STREET,
					"number": HOUSE,
					"zip": ZIP,
					"country": COUNTRY
				},
				"orders": []
			})

			saveData(accounts, "accounts")

			response.status(201).json({
				success: true,
				message: "account created",
				result: {
					loginKey: `${EMAIL}___${AUTH_KEY}`
				}
			})
		}
	}
})

SERVER.get("/api/account", (request, response) => {
	const REQUEST_TYPE = request.get("request-type")
	const ACCOUNTS = loadData("accounts")

	if (!REQUEST_TYPE) {
		response.status(400).json({ success: false, message: "you have not set the request type yet" })
	}

	if (REQUEST_TYPE != "login" && REQUEST_TYPE != "info") {
		response.status(400).json({ success: false, message: "the requested type does not exist" })
	}

	if (REQUEST_TYPE === "info") {
		const REQUEST_KEY = request.get("request-key")
		const EMAIL = REQUEST_KEY.split("___")[0]
		const AUTH = REQUEST_KEY.split("___")[1]

		if (!REQUEST_KEY) {
			response.status(400).json({ success: false, message: "your request does not have the required fields" })
		}

		if (!ACCOUNTS.find(acc => acc.email == EMAIL)) {
			response.status(404).json({ success: false, message: "the account does not exist" })
		} else {
			const ACC = ACCOUNTS.find(acc => acc.email == EMAIL)
			if (ACC.auth === AUTH) {
				response.status(202).json({
					success: true,
					message: "information matched",
					result: ACC
				})
			} else {
				response.status(401).json({ success: false, message: "the account does not exist" })
			}
		}
	}

	if (REQUEST_TYPE === "login") {
		const EMAIL = request.get("email")
		const PASSWORD = request.get("password")
		const FORGET = request.get("forget") || true

		if (!EMAIL || !PASSWORD) {
			response.status(400).json({ success: false, message: "your request does not have the required fields" })
		}

		if (!ACCOUNTS.find(acc => acc.email == EMAIL)) {
			response.status(404).json({ success: false, message: "the account does not exist" })
		} else {
			const ACC = ACCOUNTS.find(acc => acc.email == EMAIL)

			if (argon2.verify(ACC.password, PASSWORD, argonConfig)) {
				response.status(401).json({ success: false, message: "account password does not match the password requested" })
			} else {
				response.status(202).json({
					success: true,
					message: "information matched",
					loginKey: `${EMAIL}___${ACC.auth}`,
					save: !FORGET
				})
			}
		}
	}
})


// RUNNER
SERVER.listen(PORT, "0.0.0.0", () => console.log(`the server is now runnning on port ${PORT}.`))
