import React from "react";
import "./Products.scss";
import Lazada from "../../assets/Lazada.png";
import Tokopedia from "../../assets/Tokopedia.svg";
import Shopee from "../../assets/Shopee.svg";
import Bukalapak1 from "../../assets/Bukalapak1.svg";
import Bukalapak2 from "../../assets/Bukalapak2.svg";
import Product from "../Product/Product";

const Products = () => {
  return (
    <div className="p-container">
      <div className="wrapper">
        <div className="available">
          <h2>Available on</h2>
          <div className="marketplace">
            <div className="tokped">
              <img src={Tokopedia} alt="" />
            </div>
            <div className="shopee">
              <img src={Shopee} alt="" />
            </div>
            <div className="bukalapak">
              <img src={Bukalapak1} alt="" />
              <img src={Bukalapak2} alt="" />
            </div>
            <div className="lazada">
              <img src={Lazada} alt="Lazada" />
            </div>
          </div>
        </div>
        <Product />
      </div>
      <div className="wavep">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Products;
