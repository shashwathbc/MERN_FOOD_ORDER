const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
    name : {type: String , require},
    varients : [] , 
    prices : [],
    category : {type: String , require},
    image : {type: String , require},
    description : {type: String , require}

} , {
    timestamps : true,   // to check when the pizzas are added 
})


const pizzaModel = mongoose.model("pizzas" , pizzaSchema);   //before expoting we have to create the model (collectionName , pizzaSchema)

module.exports = pizzaModel;   //exporting 


