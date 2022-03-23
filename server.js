const express = require("express");   // initializing express  by using require

// const Pizza = require("./models/pizzaModel");



const app = express();        //  creating an app variable using express
const db = require("./db");   

app.use(express.json());       // used for body parsel 

//routes:
const pizzasRoute = require("./routes/pizzaRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

const path = require("path");

app.use("/api/pizzas/" , pizzasRoute);
app.use("/api/users/" , userRoute);
app.use("/api/orders/" , ordersRoute);

// app.get("/" ,  (req , res) => {             // default root 
//     res.send("server working" + port);             // to check if it is working 
// });


// app.get("/getpizzas" , (req , res) => {
// Pizza.find({} , (err, docs) => {
//     if(err){
//         console.log(err)
//     }else{
//         res.send(docs);
//     }
// })
// })


const port = process.env.PORT || 8000;      //  this is the port where backent will run


//hosting:
__dirname = path.resolve();
if(process.env.NODE_ENV === 'production'){
    app.use(express.static( "client/build"))
    app.get("*" , (req , res) => {
        res.sendFile(path.resolve(__dirname , "client" , "build" , "index.html"))
    })
}else{
    app.get("/" ,  (req , res) => {             // default root 
        res.send("server working" + port);             // to check if it is working 
    });
}

app.listen(port , () => {
    console.log(`BACKEND SERVER RUNNING`);
});  //

