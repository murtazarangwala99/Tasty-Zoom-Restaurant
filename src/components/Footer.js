import React from "react";
import DarkLogo from "../../resources/Dark.png";
// import LightLogo from "../../resources/Light.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <hr /> */}
      <div className="flex px-4 py-2 absolute  w-full bg-black justify-between text-white">
        <div className="flex flex-col">
          <Link to="/">
            <img src={DarkLogo} alt="Logo" className="w-24 rounded-full mx-8 my-2" />
            <p className="hover:underline">©2023 Tasty Zoom Pvt. Ltd</p>
          </Link>
        </div>
        <div className="flex">
          <ul className="flex justify-center items-center gap-8 font-bold">
            <li className="hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link to="career">Career</Link>
            </li>
            <li className="hover:underline">
              <Link to="contact">Contact us</Link>
            </li>
            <li className="hover:underline">
              <Link to="privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;
