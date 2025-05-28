import React, { memo } from "react";

const JsonPreview = ({ jsonData }) => {
  // console.log("JsonPreview render ...");
  return (
    <div className="bg-black text-white p-4 rounded-xl">
      <h2 className="text-[2rem] text-center mb-2">JsonPreview</h2>
      <pre className="border-top border-bottom border-white p-2 rounded-md">
        {JSON.stringify(jsonData, null, 2)}
      </pre>
    </div>
  );
};

export default JsonPreview;
