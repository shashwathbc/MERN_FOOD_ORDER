import axios from "axios";
// actionname = {getAllPiza} , redux thunk fuction (dispatch fuction)
export const getAllPizzas= () => async dispatch => {
 //whenever these action/fuction are created we havre to write a reducer({type: "GET_PIZZAS_REQUEST"}) dispatch
 //whenever this fuction is called this req will be sent to reducer
         dispatch({type: "GET_PIZZAS_REQUEST"})

// getting the data using axios :
         try{
             const response = await axios.get("/api/pizzas/getallpizzas")
             console.log(response);   //to check id we are getting the data
             dispatch({type: "GET_PIZZAS_SUCCESS" , payload : response.data})
         }catch(error){
            dispatch({type: "GET_PIZZAS_FAILED" , payload : error})
         }

}


export const filterPizzas= (searchkey , category) => async dispatch => {
    var filteredPizzas ;
            dispatch({type: "GET_PIZZAS_REQUEST"})
            try{
                const response = await axios.get("/api/pizzas/getallpizzas")
                 filteredPizzas = response.data.filter(pizza => pizza.name.toLowerCase().includes(searchkey))
                 if(category != 'all'){
                    filteredPizzas = response.data.filter(pizza => pizza.category.toLowerCase().includes(category))
                 }
                dispatch({type: "GET_PIZZAS_SUCCESS" , payload : filteredPizzas})
            }catch(error){
               dispatch({type: "GET_PIZZAS_FAILED" , payload : error})
            }
   
   }