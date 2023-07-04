const express = require("express")
var app = express()
const PORT = 3010
app.listen(PORT ,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})