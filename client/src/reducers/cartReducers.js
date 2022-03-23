export const cartReducer = (state={cartItems : []} , action) => {

    switch(action.type)
    {

        case "ADD_TO_CART" :
        //if we find the item with the same id in cart if yes we will do the below function
        const alreadyExists = state.cartItems.find(item => item._id===action.payload._id )   
        //if true  we will just replace the old item with new item
        if(alreadyExists)
        {
               return {
                   ...state , 
                   cartItems : state.cartItems.map(item=> item._id===action.payload._id ? action.payload : item)
                                                         // if ture ? we will replace this with : item
               }
        }else{
        //we will add the new item into our cart
        return {
             ...state , 
             cartItems : [...state.cartItems , action.payload]
        }

    }

    case "DELETE_FROM_CART" : return{
            ...state , 
            cartItems : state.cartItems.filter(item => item._id !== action.payload._id)
    }

        default: return state

    }
}