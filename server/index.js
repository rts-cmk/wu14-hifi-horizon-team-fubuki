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

// REDIRECTS AND OTHERS
SERVER.use("/api", (request, response, next) => {
	next()
})

// PATHS
SERVER.get("/api", (request, response) => {
	response.status(200).send("Everything works")
})

// RUNNER
SERVER.listen(PORT, () => console.log(`the server is now runnning on port ${PORT}.`))