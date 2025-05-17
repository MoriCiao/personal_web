import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import SearchHead from "./SearchHead";

import SearchPhoto from "./SearchPhoto";
const SearchBody = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");

  const btnRef = useRef(null);

  const [showApiInput, setShowApiInput] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [tempkey, setTempKey] = useState("");
  useEffect(() => {
    const savedApi = localStorage.getItem("pexels_api_key");
    if (savedApi) {
      setApiKey(savedApi);
    } else {
      setShowApiInput(true);
    }
  }, []);
  console.log(tempkey);
  const handleKeySave = () => {
    if (tempkey.trim() !== "") {
      setApiKey(tempkey);
      localStorage.setItem("pexels_api_key", tempkey);
      // 讓使用者輸入 Api 後將畫面display : none
      setShowApiInput(false);
    } else {
      alert("API 不可空白!!");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  // 取得圖片網址的API
  const auth = apiKey;
  const initialURL = "https://api.pexels.com/v1/curated?per_page=16&page=1";
  // 建立搜索的URL
  const searchURL = `https://api.pexels.com/v1/search?query=${inputValue}&per_page=16&page=${page}`;
  const search = async (url) => {
    // 獲取data
    let res = await axios.get(url, { headers: { Authorization: auth } });
    // 將get DATA存取至setData，供子元素運用
    // Array
    setData(res.data.photos);

    // moroPhoto ,需要更新目前input的URL才能將搜尋照片統一為搜尋的key
    setCurrentSearch(inputValue);
    setTimeout(() => {
      if (inputValue === "") return;
      setInputValue("");
    }, 50);
  };

  useEffect(() => {
    if (apiKey) {
      search(initialURL);
    }
  }, [apiKey]);

  const morePhoto = async () => {
    let newURL;
    //如果目前的網址是預設的，則增加page
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?per_page=16&page=${page + 1}`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=16&page=${
        page + 1
      }`;
    }
    let res = await axios.get(newURL, { headers: { Authorization: auth } });
    // 要將原本的data 加上新的data
    setData(data.concat(res.data.photos));
  };
  return (
    <div className="main-space">
      {showApiInput && (
        <div className="api_key_modal">
          <h4 style={{ margin: "auto" }}>
            請輸入您的 <br />
            Pexels API Key
          </h4>
          <input
            style={{ textIndent: "0.5rem" }}
            type="text"
            value={tempkey}
            onChange={(e) => {
              setTempKey(e.target.value);
            }}
            placeholder="Your API Key"
          />
          <button onClick={handleKeySave}>Save Key</button>
        </div>
      )}
      <SearchHead
        inputValue={inputValue}
        handleChange={handleChange}
        // 將input的值帶入新的URL裡
        search={() => search(searchURL)}
      />
      <SearchPhoto data={data} morePhoto={morePhoto} />
    </div>
  );
};

export default SearchBody;
