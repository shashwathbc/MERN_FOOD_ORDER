import axios from "axios";


export const placeOrder = (token , subtotal) => async (dispatch , getState) => {
    //getState is uded for getting the current user information and cart details
    dispatch({type : "PLACE_ORDER_REQUEST"})
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try{
      const response = await axios.post("/api/orders/placeorder" , {token , subtotal , currentUser , cartItems })
      dispatch({type : "PLACE_ORDER_SUCCESS"})
      console.log(response)
    }catch(error){
        dispatch({type : "PLACE_ORDER_FAILED"})
   console.log(error);
    }
}