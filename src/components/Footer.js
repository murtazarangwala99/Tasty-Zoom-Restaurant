import React from "react";
import DarkLogo from "../../resources/Dark.png";
// import LightLogo from "../../resources/Light.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <hr /> */}
      <div className="footer">
        <div className="footer-comapny">
          <Link to="/">
            <img src={DarkLogo} alt="Logo" className="logo-img-footer" />
          </Link>
          <p className="copyright">© 2023 Tasty Zoom Pvt. Ltd</p>
        </div>
        <div className="footer-items">
          <ul className="footer-two">
            <li className="footer-item">
              <Link to="/about">About</Link>
            </li>
            <li className="footer-item">
              <Link to="career">Career</Link>
            </li>
            <li className="footer-item">
              <Link to="contact">Contact us</Link>
            </li>
            <li className="footer-item">
              <Link to="privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;
