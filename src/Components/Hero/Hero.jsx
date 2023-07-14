import React from "react";
import "./Hero.scss";
import Goat1 from "../../assets/Goat1.png";
import Goat2 from "../../assets/Goat2.png";
import Goat3 from "../../assets/Goat3.png";
import Goat4 from "../../assets/Goat4.png";
import Goat5 from "../../assets/Goat5.png";
import Goat6 from "../../assets/Goat6.png";

const Hero = () => {
  const goats = [
    {
      id: 1,
      src: Goat1,
      name: "Kambing Jawa",
    },
    {
      id: 2,
      src: Goat2,
      name: "Domba Garut",
    },
    {
      id: 3,
      src: Goat3,
      name: "Kambing Jawa",
    },
    {
      id: 4,
      src: Goat4,
      name: "Domba Garut",
    },
    {
      id: 5,
      src: Goat5,
      name: "Kambing Jawa",
    },
  ];

  return (
    <div className="container">
      <div className="left">
        <div className="tagline">
          <h1>Find your best goat here!</h1>
        </div>
        <div className="details">
          <h4>Sold over 50.000+ goats</h4>
          <div className="images">
            {goats.map((goat) => (
              <img
                src={goat.src}
                alt={goat.name}
                key={goat.id}
                className="image-circle"
              />
            ))}
            <div className="content">
              <img src={Goat1} alt="Kambing Jawa" />
              <div className="text">
                <h4>"Etawa Goat"</h4>
                <span>The most searched and sold.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="img">
          <img src={Goat6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
