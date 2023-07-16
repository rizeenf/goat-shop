import React, { useState } from "react";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="bwrapper">
      <label className="burger" onClick={() => setChecked(!checked)}>
        <input type="checkbox" value={checked} />
      </label>
      <div className="listb">
        <nav>
          <h4>Home</h4>
          <h4>Product</h4>
          <h4>Pricing</h4>
          <div className="buttonb">
            <button>Shop Now</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
