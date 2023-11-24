import React, { useState } from "react";
import LightLogo from "../../resources/Light.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <>
      <div className="header">
        <div className="logo-div">
          <Link to="/">
            <img src={LightLogo} alt="Light-Logo" className="logo-img" />
          </Link>
        </div>
        <div className="header-items">
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="nav-item">Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}>
              {btnName}
            </button>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
