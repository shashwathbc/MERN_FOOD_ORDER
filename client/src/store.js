//if not default exports must be wrapped in {currly barzzes}
import {combineReducers} from "redux";
// we are going to have multiple reducers so we are going to combine all reducers and we have to make one finalReducer
// createStore 
//applyMiddleWare
import { createStore , applyMiddleware} from "redux";

//thunk :Redux Thunk is a middleware that lets you call action creators that return a function instead of an
// action object. That function receives the store's dispatch method, which is then used to dispatch 
//regular synchronous actions inside the function's body once the asynchronous operations have been completed
import thunk from "redux-thunk";

//composeWithDevTools : 
// import {composeWithDevTools} from "redux-devtools-extension";
import {composeWithDevTools} from "redux-devtools-extension";
//getting all our pizzas from PizzaReducers.js
import { getAllPizzasReducer } from "./reducers/pizzaReducers";

//importing cart reducers :
import { cartReducer } from "./reducers/cartReducers";

//importing register reducers:
import { registerUserReducer } from "./reducers/userReducers";

//importing login reducers:
import { loginUserReducer } from "./reducers/userReducers";

import { placeOrderReducer} from "./reducers/orderReducer";
//creating our final reducer by using combineReducers
const finalReducer = combineReducers({
    //key : value 
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer :  placeOrderReducer,
}) 

const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null

const initialState = {
     cartReducer :{
       cartItems : cartItems
     }  ,
     loginUserReducer : {
       currentUser : currentUser
     }
}

//created using composeWithDevTools with an empty object
const composeEnhancers = composeWithDevTools({})

//with this finalReducer we will create our store using createStore(from redux),in createStore we will pass 3 parameters
// finalReducer , initialState (empty) , in composeEnhancers we are applyMiddleware of thunk
//we can also do this with just applyMiddleWare , but here we have to track through all the redux state in google crome 

//when createStore is used u must use applyMiddleWare


const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)))

//exporting it  and this store will be added in our index.js  <Provider store={store}>
export default store














