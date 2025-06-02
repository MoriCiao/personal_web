import React, { memo, useState } from "react";
import { easeInOut, motion } from "framer-motion";

const JsonPreview = ({ jsonData, isOpen, setIsOpen }) => {
  // console.log("JsonPreview render ...");

  return (
    <div
      className={`${
        isOpen ? "" : "hidden"
      } bg-black text-white p-4 rounded-xl relative`}
    >
      <h2 className="text-[2rem] text-center mb-2">JsonPreview</h2>
      <pre className="json-preview h-[600px]  text-start border-top border-bottom border-white p-2 rounded-md">
        {JSON.stringify(jsonData, null, 2)}
      </pre>
    </div>
  );
};

export default JsonPreview;
