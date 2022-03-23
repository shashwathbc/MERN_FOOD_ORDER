//we have to create the reducer for pizza :
//2 parameters state (empty) , action to get , success , failed
export const getAllPizzasReducer = (state={pizzas:[]} , action) =>{

    switch(action.type)
    {
        case "GET_PIZZAS_REQUEST" : return{
            loading : true,
            ...state
        }

        case "GET_PIZZAS_SUCCESS" : return{
 // we will get the pizza in action.payload where payload(is written in pizzaAction.js to get data and error)
            loading : false,
            pizzas : action.payload 
        }

        case "GGET_PIZZAS_FAILED" : return{
            error : action.payload,
            loading : false
        }

        default : return { ...state}
    }
} 