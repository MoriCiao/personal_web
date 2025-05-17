import React, { createContext, useContext, useEffect, useState } from "react";
import CartHeader from "./CartHeaderArea";
import CartMain from "./CartMainArea";

export const ThemeContext = createContext();

const CartBody = () => {
  const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("bulb-dark");
    // const ToggleTheme = () => {
    //   setTheme((prev) => (prev === "bulb-dark" ? "bulb-light" : "bulb-dark"));
    // };
    useEffect(() => {
      document.body.className = "";
      document.body.classList.add(theme);
      console.log(theme);
    }, [theme]);
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  return (
    <div>
      <ThemeProvider>
        <CartHeader />
        <CartMain />
      </ThemeProvider>
    </div>
  );
};

export default CartBody;
