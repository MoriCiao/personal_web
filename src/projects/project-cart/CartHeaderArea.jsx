import React, { useReducer, useState, useContext } from "react";
import Light from "./LightSwitch.jsx";
import { ThemeContext } from "./CartBodyArea.jsx";
const CartHeader = () => {
  const { isOpen, toggleCart } = useContext(ThemeContext);

  return (
    <div className="header h-full w-full relative">
      <button
        className="fixed top-4 right-4 rounded-md z-50"
        onClick={toggleCart}
      >
        {isOpen ? "Close Cart" : "Open Cart"}
      </button>
      <div
        className={`fixed top-16 right-0 h-3/4 bg-red-200 flex items-start z-40 p-2 rounded-md transition-all duration-300 ${
          isOpen
            ? "translate-x-0 w-80 right-4 "
            : "translate-x-full w-0 overflow-hidden"
        }`}
      >
        <div className="">
          <p className="py-2">以下是您選購的商品：</p>
          <hr />
          <div className="cart-area overflow-y-auto scroll-width-none py-2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
              recusandae.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
              recusandae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
              recusandae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
              recusandae.
            </p>
          </div>
        </div>
      </div>

      {/* <Light /> */}
    </div>
  );
};

export default CartHeader;
