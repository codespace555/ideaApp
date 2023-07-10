// here hold the schema for user
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    userId:{
        type :String,
        required :true,
        unique : true
    },
    email:{
        type : String,
        required : true,
        unique:true,
        lowercase:true
    },
    password:{
        type : String,
        required:true,
        minlength : 8
    },
    userType:{
        type:String,
        required:true,
        default:"CUSTOMER",
        // can be either "ADMIN", or any other role in customer
        enum:["CUSTOMER","ADMIN"]
    }

},{timestamps:true,timeseries:true})

// const UserModel = mongoose.model("user",userSchema);

// module.exports = {UserModel}

module.exports = mongoose.model("User", userSchema);