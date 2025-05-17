import React, { useReducer } from "react";
import Light from "./LightSwitch.jsx";
const CartHeader = () => {
  // lightReducer

  return (
    <div className="header">
      <p className="">Header</p>
      <Light />
    </div>
  );
};

export default CartHeader;
