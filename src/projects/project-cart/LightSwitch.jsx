import React, { useContext, useEffect, useReducer } from "react";
import { ThemeContext } from "./CartBodyArea";

const Light = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme); // deBug確認Provider有連動

  const initailState = { isOn: false };

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
    const { setTheme } = useContext(ThemeContext);
    useEffect(() => {
      if (lightState.isOn) {
        setTheme("bulb-light");
      } else {
        setTheme("bulb-dark");
      }
    }, [lightState.isOn]);
    return (
      <div className="bulb">
        <h1>Light Switch</h1>
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
            ToggleTheme();
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
