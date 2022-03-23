import React, { useState , useEffect} from "react";
import { useDispatch , useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading"

export default function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginstate = useSelector(state => state.loginUserReducer)
  const {loading , error} = loginstate
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem("currentUser"))
    {
      window.location.href="/"
    }
  },[])

  function login() {
     const user = {email , password}
     dispatch(loginUser(user))
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded" >
          <h2 className="text-center mt-2 m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>
          {loading && (<Loading />)}
          {error && (<Error error="Invalid Credentiales" />)}
          <div>
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

            <button  onClick={login} className="btn mt-3 mb-3">LOGIN</button>
            <br />
            <a style={{color : "black"}} href="/register">Click Here To Register </a>
          </div>
        </div>
      </div>
    </div>
  );
}
