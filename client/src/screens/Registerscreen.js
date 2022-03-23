import React, { useState } from "react";
import {useDispatch , useSelector} from "react-redux";
import {registerUser} from "../actions/userActions"
import Success from "../components/Success";
import Error from "../components/Error";
import Loading from "../components/Loading"
export default function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const registerstate = useSelector(state => state.registerUserReducer)
 const {error , loading , success} = registerstate

  const dispatch = useDispatch()

  function register() {
    if (password!==cpassword) 
    {
      alert("Password does not match ");
    }
     else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      // dispatch th eused by sending this 
      dispatch(registerUser(user))
    } 
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">

{loading && (<Loading />)}
{success && (<Success success="user registered successfully" />)}
{error && (<Error error="Email already registered" />)}

          <h2 className="text-center mt-2 m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              required
              type="email"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              required
              type="password"
              placeholder="CofirmPassword"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <button onClick={register} className="btn mt-3 mb-3">
              REGISTER
            </button>
            <br />
            <a style={{color : "black"}} href="/login">Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
