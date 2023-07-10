// .................................................
// here  import module
const express = require("express")
// const dotenv = require("dotenv")
const serverConfig = require("./configs/server.config.js")
const mongoose = require("mongoose")
const dbConfig = require("./configs/db.config.js")
const userModel = require("./models/user.model.js")
const bcrypt = require ("bcrypt")
var app = express()
// .................................................
// here connect the monogo db
mongoose.connect(dbConfig.DB_URL)
const db = mongoose.connection;
db.on("error", () => {
    console.log('Error connecting to database')
})
db.once("open", () => {
    console.log("DB is connected");
    init();
})
// .................................................
 async function init() {
  //#check if the admin user is already present
  let admin = await userModel.findOne({
    userId : "admin"
})

if(admin){
    console.log("Admin user already present");
    return;
}
  // ...............................
     admin = await userModel.create({
        name: "Naman Kumar",
        userId: "admin",
        email: "polunaman01@gmail.com",
        userType: "ADMIN",
        password: bcrypt.hashSync("polunaman@123",8)

    })
    console.log(admin)
}

app.listen(serverConfig.PORT, () => {
    console.log(`Server running on http://localhost:${serverConfig.PORT}`)
})