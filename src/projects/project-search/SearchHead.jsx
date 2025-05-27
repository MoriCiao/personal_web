import React, { useEffect, useRef, useState } from "react";
import SearchFooter from "./SearchFooter";
const SearchHead = ({ inputValue, handleChange, search }) => {
  // 搜尋連動
  const inputRef = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => {
    // 第一次加載時，監聽按鍵 Enter 是否有被 keydown => search
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (btnRef.current) {
          btnRef.current.click();
        }
      }
    });
    inputRef.current.focus();
  }, []);
  return (
    <div className="header-area">
      <div>
        <div className="bg-img"></div>
        <h1 className="text-[2.5rem] mb-4">
          歡迎免費 <br />
          搜尋圖片
        </h1>
        <input
          type="text"
          className="Searhinput"
          placeholder="Search image ..."
          value={inputValue}
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="Search-button" onClick={search} ref={btnRef}>
          Search
        </button>
      </div>
      <div className="footer">
        <SearchFooter />
      </div>
    </div>
  );
};

export default SearchHead;
