import React from 'react';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import StripeCheckout from "react-stripe-checkout";


const Checkout = ({subtotal}) => {

  const dispatch = useDispatch()
    function tokenHander(token){
        // console.log(token);
        dispatch(placeOrder(token , subtotal))

    }

  return (
    <div>
       <StripeCheckout
       amount={subtotal * 100}
       shippingAddress
       token={tokenHander}
       stripeKey="pk_test_51KO4ieSDiQCfWhTUrSqmjdFjE42lGEkRuUAwMFNVVHHTM7ONAyJHLqS2LIswlqjtzOKOsiKiXIt6McNMa8qA5C9E009c8IIMBy"
       currency="INR"
       >
           <button className='btn'>Pay Now</button>
       </StripeCheckout>
    </div>
  )
}

export default Checkout