import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchHead from "./SearchHead";

import SearchPhoto from "./SearchPhoto";
const SearchBody = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  // 取得圖片網址的API
  const auth = "API KEY";
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
    search(initialURL);
  }, []);

  const morePhoto = async () => {
    let newURL;
    //如果目前的網址是預設的，則增加page
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?per_page=16&page=${page + 1}`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=16&page=${
        page + 1
      }`;
      console.log(page);
    }
    let res = await axios.get(newURL, { headers: { Authorization: auth } });
    // 要將原本的data 加上新的data
    setData(data.concat(res.data.photos));
  };
  return (
    <div className="main-space">
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
