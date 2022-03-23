import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filterPizzas } from '../actions/pizzaActions';
function Filter() {
    const dispatch = useDispatch();
    const [searchkey , setSearchkey] = useState('');
    const [category , setCategory] = useState('all');
  return (
    <div className='container'>
        <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">

            <div className="col-md-3 ">
              <input value={searchkey} onChange={(e)=> {setSearchkey(e.target.value)}} type="text" className='form-control w-100' placeholder='search pizza' />
            </div>

            <div className="col-md-3 mt-2">
                <select  className='form-control' value={category} onChange={(e)=> {setCategory(e.target.value)}} >
                    <option value="all">ALL</option>
                    <option value="veg">VEG</option>
                    <option value="nonveg">NON-VEG</option>
                </select>
            </div>

            <div className="col-md-3 ">
                <button className='btn w-100 mt-2' onClick={() => {dispatch(filterPizzas(searchkey , category))}}>FILTER</button>
                </div>
        </div>
    </div>
  )
}

export default Filter