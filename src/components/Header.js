import React, { useState } from "react";
import LightLogo from "../../resources/Light.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <>
      <div className="flex mx-6 my-2 justify-between ">
        {/* Logo Div */}
        <div>
          <Link to="/">
            <img src={LightLogo} alt="Light-Logo" className="w-12 sm:w-24 rounded-full" />
          </Link>
        </div>
        {/* when click on hamburger show this*/}
        {isNavOpen && (
          <div className="absolute right-0 top-16 text-white w-28 p-4 bg-black bg-opacity-60">
            <ul className="flex justify-center items-center flex-wrap gap-2">
              <li className="hover:underline">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline">
                <Link to="/about">About us</Link>
              </li>
              <li className="hover:underline">
                <Link to="/contact">Contact us</Link>
              </li>
              {/* Only shows when user login */}
              <li className="hover:underline">
                <Link to="/cart">Cart ({cartItems.length})</Link>
              </li>
              {/* change on basis of user is login or not */}
              <button
                className="hover:underline rounded-lg p-2 m-2 font-bold bg-blue-500 text-white "
                onClick={() => {
                  btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>
                {btnName}
              </button>
            </ul>
          </div>
        )}

        {/* Show only on big screen  */}
        <div className="hidden sm:flex sm:flex-wrap">
          <ul className="flex justify-center items-center font-bold flex-wrap gap-2 sm:gap-6">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/about">About us</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact">Contact us</Link>
            </li>
            {/* Only shows when user login */}
            <li className="hover:underline">
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
            {/* change on basis of user is login or not */}
            <button
              className="hover:underline rounded-lg p-2 m-2 sm:px-4 sm:py-2 sm:mx-4 sm:my-2 font-bold bg-blue-500 text-white "
              onClick={() => {
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}>
              {btnName}
            </button>
          </ul>
        </div>

        {/* Show on small screen */}
        <div
          className="sm:hidden space-y-2 flex flex-col justify-center items-center"
          onClick={() => setIsNavOpen((prev) => !prev)}>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;

// hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6
// flex flex-wrap
