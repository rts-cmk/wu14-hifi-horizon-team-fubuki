// IMPORTS AND SERVER CONSTS
import express from "express"
import cors from "cors"
import fs from "fs"

const SERVER = express()
const PORT = process.env.PORT || 3000



// SERVER USES
SERVER.use(cors())
SERVER.use(express.json())
SERVER.use(express.static("public"))
SERVER.use(express.urlencoded({ extended: true }))



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


// RUNNER
SERVER.listen(PORT, "0.0.0.0", () => console.log(`the server is now runnning on port ${PORT}.`))