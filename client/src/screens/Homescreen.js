import React from "react";
import Pizza from "../components/Pizza";
// import pizzas from '../pizzasdata';

//used to dispatch action from component
import { useEffect } from "react";
//useSelecter hook is used to get all the data from reducers
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";

export default function Homescreen() {
  const dispatch = useDispatch(); //object of useDispatch using this we will dispatch the action present in pizzaAction.js

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  //with the help of these variables we can track the req wheather it is loading/err/res
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas()); //dispatch the action present in pizzaAction.js
  },[]);

  return (
    <div>
       <Filter />
      <div className="row">
       
        {/* conditional rendering  */}
        {loading ? (
          // <h1>Loading...</h1>
          <Loading />
        ) : error ? (
          // <h1>Something went wrong</h1>
          <Error error="something went wrong" />
        ) : (
          pizzas.map(pizza => {
            return (
              <div className="col-md-4 p-3" key={pizza._id}>
                <div  style={{ margin: "65px" }}>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
        {/* instead of doing the below one we will use the above one  */}
        {/* {pizzas.map(pizza => {
           return <div className="col-md-4 p-3">
             <div style={{margin: "65px"}} >
               <Pizza pizza={pizza} />
             </div>
           </div>
         })} */}
      </div>
    </div>
  );
}
