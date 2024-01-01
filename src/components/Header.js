import React, { useState } from "react";
import LightLogo from "../../resources/Light.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="flex mx-6 my-2 justify-between ">
        <div>
          <Link to="/">
            <img src={LightLogo} alt="Light-Logo" className="w-24 rounded-full" />
          </Link>
        </div>
        <div className="flex flex-wrap">
          <ul className="flex justify-center items-center flex-wrap gap-6">
            <li className="hover:underline font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline font-bold ">
              <Link to="/about">About us</Link>
            </li>
            <li className="hover:underline font-bold">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="hover:underline font-bold">
              <Link to="/cart">Cart - {cartItems.length}</Link>
            </li>
            <button
              className="hover:underline rounded-lg font-bold px-4 py-2 bg-blue-500 text-white "
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
