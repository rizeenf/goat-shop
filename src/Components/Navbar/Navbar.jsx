import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/Logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = () => {
  return (
    <>
      <div className="n-container">
        <div className="logoInfo">
          <img src={Logo} alt="" className="logo" />
          <h1 className="logoName">Goatify</h1>
        </div>
        <BurgerMenu />
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
