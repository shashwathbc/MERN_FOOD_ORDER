import React from 'react';
import {useSelector , useDispatch } from "react-redux";

import {addToCart} from "../actions/cartActions";
import { deleteFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout';

export default function Cartscreen() {

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    const dispatch = useDispatch()

    var subtotal = cartItems.reduce((x , item)=> x+item.price , 0)


  return (
    <div>
        <div className="row justify-cotent-center">
            <div className="col-md-6">
              <h2 style={{fontSize: "40px"}}>My Cart</h2>
              {cartItems.map(item=> {
                  return <div className="flex-container">
                  {/* diplaying info of item     */}
                    <div className='text-left m-1 w-100'>
                        <h1>{item.name}[{item.varient}]</h1>
                        <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                        <h1 style={{display: "inline"}}>Quantity : </h1>
                        <i className="fa fa-plus" aria-hidden="true" onClick={() => {dispatch(addToCart(item , item.quantity+1 , item.varient))}} ></i>
                        <b>{item.quantity}</b>
                        <i className="fa fa-minus" aria-hidden="true" onClick={() => {dispatch(addToCart(item , item.quantity-1 , item.varient))}}></i>
                        <hr/>
                    </div>
                  {/* display img */}
                    <div className='m-1 w-100'>
                    <img src={item.image} style={{height:"100px" , width: "100px" }} />
                    </div>
                  {/* delete button */}
                    <div className='m-1 w-100'>
                    <i className="fa fa-trash mt-5 fa-2x" aria-hidden="true" onClick={() => {dispatch(deleteFromCart(item))}}></i>
                    </div>
                </div>
              })}
             
            </div>

            <div className="col-md-4 text-end">
                   <h2 style={{fontSize : "45px"}}>SubTotal : {subtotal}/Rs</h2>
                   {/* <button className='btn'>CheckOut</button> */}
                   <Checkout subtotal={subtotal} />
            </div>
        </div>
    </div>
  )
}
