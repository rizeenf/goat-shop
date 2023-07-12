import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logoInfo">
          <img src={Logo} alt="" className="logo" />
          <h1 className="logoName">Goatify</h1>
        </div>
        <div className="listItem">
          <span className="active">Home</span>
          <span>Product</span>
          <span>Pricing</span>
        </div>
        <div className="button">
          <button>Shop Now</button>
        </div>
      </div>
      <div className="line" />
    </>
  );
};

export default Navbar;
