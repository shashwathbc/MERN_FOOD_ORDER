import React from "react";
import {Dropdown , Nav, Container , NavDropdown} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  //
  const cartstate = useSelector((state) => state.cartReducer);

  //
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  const dispatch = useDispatch()
  return (
    <div>
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded  ">
      <a className="navbar-brand" href="/">
        ShashDev
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle=" collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto ">
          {/* <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li> */}
          {currentUser ? (
            // <li>{currentUser.name}</li>
            //or use this :
            <Dropdown className="mt-2 " >
            <Dropdown.Toggle  id="dropdown-basic"> 
               {currentUser.name}
            </Dropdown.Toggle>
          
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">My Orders</Dropdown.Item>
              <Dropdown.Item href="#" onClick={() => {dispatch(logoutUser())}}><li>Logout</li></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          )}

          <li className="nav-item">
            <a className="nav-link" href="/cart">
              Cart {cartstate.cartItems.length}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  );
}
