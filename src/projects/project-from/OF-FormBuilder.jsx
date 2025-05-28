import React, { useEffect, useRef, useState } from "react";
// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });
const SubmitBtn = ({ onClick }) => {
  return (
    <button
      type="submit"
      className={`bg-blue-900 text-white border border-black rounded px-1 
        col-start-10 col-span-3
      `}
      onClick={onClick}
    >
      Submit
    </button>
  );
};

const FormBuilder = ({
  dataKey,
  setDataKey,
  dataValue,
  setDataValue,
  handleSubmit,
}) => {
  console.log("FormBuilder render ...");
  const keyRef = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    keyRef.current.focus();
  }, []);

  return (
    <div className="form-builder m-auto p-4 sticky absolute top-0 bg-gray-300 z-2 text-black">
      <h1 className="text-[2rem] text-center">FormBuilder</h1>
      <form
        className="flex h-[2rem] items-center justify-center mt-4 grid grid-cols-12"
        action=""
        // 注意事項, 可防止按 Enter 自動刷新頁面
        onSubmit={(e) => {
          e.preventDefault();
          // 連動 Enter
          handleSubmit({ dataKey, dataValue });
          // 資料輸入進 database後，自動導向 inputkey
          keyRef.current.focus();
        }}
      >
        <section className="px-2 col-start-1 col-span-2">
          <label htmlFor="" className="">
            新增資料
          </label>
        </section>
        <section className="input-area rounded-md mx-2 col-start-3 col-span-7">
          <input
            className="input-data bg-gray-200 text-black w-100 rounded-md border border-black"
            type="text"
            placeholder="key..."
            ref={keyRef}
            value={dataKey}
            required
            onChange={(e) => {
              setDataKey(e.target.value);
            }}
          />
          <input
            className="input-data bg-gray-200 text-black w-100 mt-1 rounded-md border border-black"
            type="text"
            placeholder="value..."
            ref={valueRef}
            value={dataValue}
            required
            onChange={(e) => {
              setDataValue(e.target.value);
            }}
          />
        </section>
        <SubmitBtn />
      </form>
    </div>
  );
};

export default FormBuilder;
