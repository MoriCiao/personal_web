import React, { createContext, useContext, useState } from "react";
import TodoList from "./TodoList";
import Timer from "./todoTimerTool";

// 要變更主題顏色的區域
const Header = () => {
  return (
    <div className={`header-area`}>
      <div className="bg-img"></div>
      <Timer />
      <TodoList />
    </div>
  );
};

export default Header;
