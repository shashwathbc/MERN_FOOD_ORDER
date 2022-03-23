const mongoose = require("mongoose");

var mongoURL ='mongodb://shash:12345@cluster0-shard-00-00.f2uxe.mongodb.net:27017,cluster0-shard-00-01.f2uxe.mongodb.net:27017,cluster0-shard-00-02.f2uxe.mongodb.net:27017/mern-pizza?replicaSet=atlas-h5z069-shard-0&ssl=true&authSource=admin'

mongoose.connect(mongoURL , {useUnifiedTopology: true , useNewUrlParser: true})

var db = mongoose.connection

db.on("connected" , () => {
    console.log("MONGODB connected")
})

db.on("error" , () => {
    console.log("ERROR FAILED TO CONNECT DB")
})

module.exports = mongoose