const express = require("express");
const router = express.Router();
//importing uuid:
const { v4: uuidv4 } = require('uuid');
//importing stripe with publishable key frm stripe
const stripe = require("stripe")("sk_test_51KO4ieSDiQCfWhTUYlNc1mJzCA20kC8bl8a0avlfGGbroLN3yHnUPTmGddXVrRqTyYzCsKl9hNJ1tmUJTA7hVeBQ000CarWFNZ")

const Order = require("../models/orderModel")

router.post("/placeorder" , async (req ,res) => {
    //getting all the variables from frontend
    const {token , subtotal , currentUser , cartItems} = req.body

    try{
      const customer = await stripe.customers.create({
          email : token.email,
          source : token.id
      })

      const payment = await stripe.charges.create({
          amount : subtotal * 100,
          currency : 'inr',
          customer : customer.id,
          receipt_email : token.email
      },{
          //this is used to make  so that user is not charged twice for same order , it will be uniqe for evey order
          idempotencyKey : uuidv4()
      })

      if(payment){
          const neworder = new Order({
              name : currentUser.name,
              email : currentUser.email,
              userid : currentUser.userid,
              orderItems : cartItems,
              orderAmount : subtotal,
              shippingAddress : {
                  
              }
          })
          res.send("Payment Done")
      }
      else{
          res.send("Payment Failed")
      }
    }catch(error){
        return res.status(400).json({message : 'Something Went wrong with Payment' + error})
    }


});

module.exports = router

