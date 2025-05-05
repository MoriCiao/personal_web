import React, { useEffect, useRef, useState } from "react";
import SearchFooter from "./SearchFooter";
const SearchHead = ({ inputValue, handleChange, search }) => {
  // 搜尋連動
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="header-area">
      <div>
        <div className="bg-img"></div>
        <h1>
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
        <button className="Search-button" onClick={search}>
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
