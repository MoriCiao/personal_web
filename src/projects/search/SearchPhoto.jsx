import React, { useRef, useEffect, useState } from "react";
// 從父元素獲取data資料
const SearchPhoto = ({ data, morePhoto }) => {
  // const photoRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //     if (entry.isIntersecting) {
  //       setIsVisible(true);
  //       observer.unobserve(entry.target); // 只觀察一次
  //     }
  //   });

  //   if (photoRef.current) {
  //     observer.observe(photoRef.current);
  //   }

  //   return () => {
  //     if (photoRef.current) {
  //       observer.unobserve(photoRef.current);
  //     }
  //   };
  // }, []);
  return (
    <div className="photo-area">
      <div className="photo-bg"></div>
      {/* data 預設為 null ， async拿到data需要時間
      ，因此等拿到資料後才執行data.map */}
      {data &&
        data.map((d, index) => {
          return (
            <div className="per-photo-area" key={index}>
              <p className="photo-text">
                Photographer: <br />
                {d.photographer}
              </p>

              <div className="photo-container">
                <img src={d.src.large} alt="..." className="photo" />
              </div>

              <p>
                Download{" "}
                <a href={d.src.large} target="_blank">
                  Click
                </a>
                <a href={d.photographer_url} className="blog">
                  <span className="blog-icon">👉</span>
                  Blog
                </a>
              </p>
            </div>
          );
        })}
      <button className="morePhoto" onClick={morePhoto}>
        More...
      </button>
    </div>
  );
};

export default SearchPhoto;
