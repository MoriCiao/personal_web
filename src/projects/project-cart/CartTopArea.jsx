import React from "react";

const CartTopArea = () => {
  const topAreaImg = [
    { id: 1, img: "/projests-picture/cart/TopImg-1.jpg" },
    { id: 2, img: "/projests-picture/cart/TopImg-2.jpg" },
    { id: 3, img: "/projests-picture/cart/TopImg-4.jpg" },
    { id: 4, img: "/projests-picture/cart/TopImg-3.jpg" },
  ];

  return (
    <div className="top-area grid grid-cols-12">
      <div className="top-img flex items-center justify-center col-span-2 overflow-hidden">
        <img className="m-5" src={topAreaImg[0].img} alt="" />
      </div>
      <div className="top-img flex items-center justify-center col-span-2 overflow-hidden">
        <img className="m-5" src={topAreaImg[1].img} alt="" />
      </div>
      <div className="col-span-4">
        <div className="search-area flex items-center justify-center gap-0.5 pt-24">
          <input className="w-2/3" type="text" placeholder="furit..." />
          <button className="">Search</button>
        </div>
      </div>
      <div className="top-img flex items-center justify-center col-span-2 overflow-hidden">
        <img className="m-5" src={topAreaImg[2].img} alt="" />
      </div>
      <div className="top-img flex items-center justify-center col-span-2 overflow-hidden">
        <img className="m-5" src={topAreaImg[3].img} alt="" />
      </div>
    </div>
  );
};

export default CartTopArea;
