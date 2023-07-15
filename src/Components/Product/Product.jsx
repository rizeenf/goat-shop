import React from "react";
import "./Product.scss";
import Goat1 from "../../assets/Goat1.png";
import Goat2 from "../../assets/Goat2.png";
import Goat3 from "../../assets/Goat3.png";
import Goat4 from "../../assets/Goat4.png";
import Goat5 from "../../assets/Goat5.png";

const Product = () => {
  const goats = [
    {
      id: 2,
      src: Goat2,
      name: "Domba Garut",
      price: 1799,
    },
    {
      id: 1,
      src: Goat1,
      name: "Kambing Jawa",
      price: 2199,
    },
    {
      id: 3,
      src: Goat3,
      name: "Kambing Jawa",
      price: 1999,
    },
    {
      id: 4,
      src: Goat4,
      name: "Domba Garut",
      price: 1799,
    },
    {
      id: 5,
      src: Goat5,
      name: "Kambing Jawa",
      price: 1999,
    },
  ];

  return (
    <div className="cards">
      {goats.map((goat) => (
        <div key={goat.id} className="cards-item">
          <img src={goat.src} alt="" />
          <div className="detail">
            <h3>{goat.name}</h3>
            <h4>Rp {goat.price}K</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
