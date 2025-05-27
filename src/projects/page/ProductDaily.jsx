import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../project-cart/CartBodyArea";
import { motion } from "framer-motion";

const ProductDaily = () => {
  console.log("ProductDaily render ...");

  const { isOpen, daily, dispatch } = useContext(ThemeContext);
  const dailyList = useMemo(() => {
    console.log("dailyList useMemo 執行!");
    return daily.map((d) => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          key={d.id}
          className="product-container p-4"
        >
          <strong className="product-name block py-2">{d.name}</strong>
          <div className="img_container overflow-hidden  opacity-75 rounded-20">
            <span className=" text-[9rem]">{d.img}</span>
          </div>
          <div className="flex items-center mt-2 relative  w-full grid grid-cols-8 ">
            <p className="pb-0 w-4/3 block col-span-5">
              Price : <strong className="text-red-500">${d.price}</strong>
            </p>
            <button
              type="button"
              className="col-span-3"
              onClick={() => {
                dispatch({
                  type: "ADD_Item",
                  payload: { id: d.id, name: d.name, price: d.price },
                });
              }}
            >
              <span>Add</span>
            </button>
          </div>
        </motion.div>
      );
    });
  }, [daily]);
  return (
    <div
      className={`products_area h-screen grid gap-0 grid-cols-4 transition-all duration-300 pt-4 ${
        isOpen ? "w-3/4 " : "w-full"
      } `}
    >
      {dailyList}
    </div>
  );
};

export default ProductDaily;
