import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  memo,
  useMemo,
} from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "./CartBodyArea.jsx";

// 避免重新渲染
export const topAreaImg = [
  { id: 1, img: "/projests-picture/cart/TopImg-1.jpg" },
  { id: 2, img: "/projests-picture/cart/TopImg-2.jpg" },
  { id: 3, img: "/projests-picture/cart/TopImg-3.jpg" },
  { id: 4, img: "/projests-picture/cart/TopImg-4.jpg" },
];
export const animateImg_1 = {
  initial: { y: -10 },
  animate: { y: [-10, 10, -10] },
  transition: { duration: 8, repeat: Infinity, repeatType: "loop" },
};
export const animateImg_2 = {
  initial: { y: 10 },
  animate: { y: [10, -10, 10] },
  transition: { duration: 8, repeat: Infinity, repeatType: "loop" },
};

const TopImage = memo(({ img, animateVariant }) => {
  console.log("TopImage render ...");
  return (
    <div className="top-img relative flex items-center justify-center col-span-2 overflow-hidden">
      <motion.img
        {...animateVariant}
        className="m-auto relative"
        src={img}
        alt="TopImg"
      />
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-3 w-40 bg-black/10 rounded-full blur-sm z-0"></div>
    </div>
  );
});

const CartTopArea = () => {
  console.log("CartTopArea render ...");

  const { query, setQuery, handleSearch, setItem } = useContext(ThemeContext);
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="top-area grid grid-cols-12">
      <div className="top-bg"></div>

      <TopImage img={topAreaImg[0].img} animateVariant={animateImg_1} />
      <TopImage img={topAreaImg[1].img} animateVariant={animateImg_2} />

      {/* input area */}
      <div className="col-span-4">
        <div className="search-area  flex items-center justify-center gap-0.5 pt-24">
          <input
            className="w-2/3"
            type="text"
            placeholder="furit..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
                setItem(e.target.value);
              }
            }}
            ref={inputRef}
          />
          <button type="button" className="" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <TopImage img={topAreaImg[2].img} animateVariant={animateImg_1} />
      <TopImage img={topAreaImg[3].img} animateVariant={animateImg_2} />
    </div>
  );
};

export default CartTopArea;
