import React, { useContext, useEffect, useReducer, useState } from "react";

export const initailState = { isOn: false };

const Light = () => {
  const [theme, setTheme] = useState("bulb-dark");
  console.log("Light render ...");

  const lightReducer = (state, action) => {
    switch (action.type) {
      case "Toggle":
        return { isOn: !state.isOn };
      case "Turn_On":
        return { isOn: true };
      case "Turn_Off":
        return { isOn: false };
      default:
        throw new Error();
    }
  };

  function LightSwith() {
    const [lightState, dispatch] = useReducer(lightReducer, initailState);
    // 當燈泡開啟 body的主題要變換

    useEffect(() => {
      const cartBody = document.querySelector(".cart-body");
      cartBody.classList.remove("chagneB", "chagneC");
      // if (lightState.isOn) {
      //
      //   cartBody.classList.add("changeB");
      // } else {
      //
      //   cartBody.classList.add("changeC");
      // }
      console.log("useEffect render ...");
    }, [theme]);
    return (
      <div className="bulb">
        <h1 className="text-xl">Light Switch</h1>
        <img
          src={
            lightState.isOn
              ? "/projests-picture/cart/lightbulb-light-solid.svg"
              : "/projests-picture/cart/lightbulb-dark-solid.svg"
          }
          alt="燈泡區域"
        />

        <button
          type="button"
          style={{ border: "1px gray solid", borderRadius: "10px" }}
          onClick={() => {
            dispatch({ type: "Toggle" });
          }}
        >
          Toggle
        </button>
        <button
          type="button"
          style={{ border: "1px gray solid", borderRadius: "10px" }}
          onClick={() => {
            dispatch({ type: "Turn_On" });
          }}
        >
          Turn On
        </button>
        <button
          type="button"
          style={{ border: "1px gray solid", borderRadius: "10px" }}
          onClick={() => {
            dispatch({ type: "Turn_Off" });
          }}
        >
          Turn Off
        </button>
      </div>
    );
  }
  return (
    <div className="light-area">
      <LightSwith />
    </div>
  );
};

export default Light;
