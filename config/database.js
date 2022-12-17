const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/flights")

//make sure its connected
const db= mongoose.connection
db.on("connected", function() {
    console.log(`connected to MongoDB at ${db.host}:${db.port}`)
})