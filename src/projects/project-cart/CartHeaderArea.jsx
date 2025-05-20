import React, { useReducer, useState } from "react";
import Light from "./LightSwitch.jsx";
const CartHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header h-full w-full relative">
      <button
        className="fixed top-4 right-4 bg-gray-300 rounded-md px-2 z-50"
        onClick={toggleCart}
      >
        {isOpen ? "Close Cart" : "Open Cart"}
      </button>
      <div
        className={`fixed top-16 right-0 bg-red-200 flex items-center z-40 p-2 rounded-md ${
          isOpen
            ? "translate-x-0 w-64 right-4"
            : "translate-x-full w-0 overflow-hidden"
        }`}
      >
        <div className="">
          <p className="">Header</p>
          <hr />
          <div className="cart-area overflow-overlay">
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
