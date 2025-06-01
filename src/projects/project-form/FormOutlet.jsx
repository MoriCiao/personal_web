import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const FormOutlet = () => {
  console.log("FormOutlet render ...");
  return (
    <div className="mt-4 h-screen">
      {/* <h1 className="text-[2rem]">FormOutlet render ...</h1> */}
      <p className="mt-2 px-2 text-[2rem] font-bold">專案首頁</p>
      <p className="mt-2 px-2 text-[1.5rem]">Route 在此 render ...</p>
      <p className="mt-2 px-2 text-[1.5rem] overflow-visible">
        <span>👉 </span>
        請點擊要前往的小專案...
      </p>
    </div>
  );
};

export default FormOutlet;
