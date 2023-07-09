const express = require("express")
// const dotenv = require("dotenv")
const serverConfig = require("./configs/server.config.js")
const dbConfig = require("./configs/db.config.js")
const mongoose = require("mongoose")
var app = express()
// here connect the monogo db
mongoose.connect(dbConfig.DB_URL)
const db = mongoose.connection;
db.on("error",() => {
    console.log('Error connecting to database')
})
db.once("open",() => {
console.log("DB is connected")
})
app.listen(serverConfig.PORT, () => {
    console.log(`Server running on http://localhost:${serverConfig.PORT}`)
})