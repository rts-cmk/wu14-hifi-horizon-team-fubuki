import serverless from "serverless-http"
import server from "../index.js"

exports.handler = serverless(server);