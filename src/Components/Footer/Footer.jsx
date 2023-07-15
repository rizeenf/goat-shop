import React from "react";
import "./Footer.scss";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="f-container">
      <div className="f-wrapper">
        <div className="wavef">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="top">
          <div className="socmed">
            <img src={Instagram} alt="Instagram" />
            <img src={Facebook} alt="Facebook" />
            <img src={Linkedin} alt="Linkedin" />
          </div>
          <div className="fmenu">
            <h4>Home</h4>
            <h4>Product</h4>
            <h4>Pricing</h4>
          </div>
        </div>
        <div className="bottom">
          <h4>&copy; Copyright 2023 </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
