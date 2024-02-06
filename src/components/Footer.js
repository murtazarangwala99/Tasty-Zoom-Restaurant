import React from "react";
import DarkLogo from "../../resources/Dark.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex px-4 py-2 absolute w-full bg-black justify-between text-white">
        <div className="flex flex-col">
          <Link to="/">
            <img src={DarkLogo} alt="Logo" className="w-16 sm:w-24 rounded-full mx-8 my-2" />
            <p className="hover:underline text-lg">©2023 Tasty Zoom Pvt. Ltd</p>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex flex-col flex-wrap sm:flex-row justify-between gap-1 sm:gap-8 sm:font-bold">
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
