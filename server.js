const express = require("express")
const dotenv = require("dotenv")
const serverConfig = require("./configs/server.config.js")
var app = express()
app.listen(serverConfig.PORT ,()=>{
    console.log(`Server running on http://localhost:${serverConfig.PORT}`)
})