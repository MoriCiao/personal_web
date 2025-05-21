import React, { useContext, useReducer, useState } from "react";
import { ThemeContext } from "./CartBodyArea.jsx";
import { motion } from "framer-motion";
const CartMain = () => {
  const { isOpen, fruit, daily, dispatch, result, item, setItem, handleItems } =
    useContext(ThemeContext);
  // let content;
  // if (item === "fruit"){
  //   content =  fruit.map((f) => {
  //     return (
  //       <motion.div
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ duration: 1 }}
  //         key={f.id}
  //         className="product-container p-4"
  //       >
  //         <strong className="product-name block py-2">{f.name}</strong>
  //         <div className="img_container overflow-hidden  opacity-75 rounded-20">
  //           <img
  //             src="/projests-picture/cart/lemon-dark-regular.svg"
  //             alt={f.name}
  //             className="p-4"
  //           />
  //         </div>
  //         <div className="flex items-center mt-2 relative  w-full grid grid-cols-8 ">
  //           <p className="pb-0 w-4/3 block col-span-5">
  //             Price : <strong className="text-red-500">${f.price}</strong>
  //           </p>
  //           <button
  //             type="button"
  //             className="col-span-3"
  //             onClick={() => {
  //               dispatch({
  //                 type: "ADD_Item",
  //                 payload: { id: f.id, name: f.name, price: f.price },
  //               });
  //             }}
  //           >
  //             <span>add</span>
  //           </button>
  //         </div>
  //       </motion.div>
  //     );
  //   });
  // }else if (item === "daily"){
  //   content = daily.map((d) => {
  //   return (
  //     <motion.div
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       transition={{ duration: 1 }}
  //       key={d.id}
  //       className="product-container p-4"
  //     >
  //       <strong className="product-name block py-2">{d.name}</strong>
  //       <div className="img_container overflow-hidden rounded-20">
  //         <img
  //           src="/projests-picture/cart/box-tissue-dark-solid.svg"
  //           alt={d.name}
  //           className="p-4"
  //         />
  //       </div>
  //       <div className="flex items-center mt-2 relative  w-full grid grid-cols-8 ">
  //         <p className="pb-0 w-4/3 block col-span-6">
  //           Price :{" "}
  //           <strong className="text-red-500">${d.price}</strong>
  //         </p>
  //         <button
  //           type="button"
  //           className="col-span-2"
  //           onClick={() => {
  //             dispatch({
  //               type: "ADD_Item",
  //               payload: { id: d.id, name: d.name, price: d.price },
  //             });
  //           }}
  //         >
  //           <span>Add</span>
  //         </button>
  //       </div>
  //     </motion.div>
  //   );
  // })}else{
  //   if(result.length === 0){
  //     content = <div>您找的商品不存在...</div>
  //   }else{
  //     content = result.map((r) =>{
  //       return(
  //         <motion.div
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           transition={{ duration: 1 }}
  //           key={r.id}
  //           className="product-container p-4"
  //         >
  //           <strong className="product-name block py-2">{r.name}</strong>
  //           <div className="img_container overflow-hidden rounded-20">
  //             <img
  //               src="/projests-picture/cart/box-tissue-dark-solid.svg"
  //               alt={r.name}
  //               className="p-4"
  //             />
  //           </div>
  //           <div className="flex items-center mt-2 relative  w-full grid grid-cols-8 ">
  //             <p className="pb-0 w-4/3 block col-span-6">
  //               Price :{" "}
  //               <strong className="text-red-500">${r.price}</strong>
  //             </p>
  //             <button
  //               type="button"
  //               className="col-span-2"
  //               onClick={() => {
  //                 dispatch({
  //                   type: "ADD_Item",
  //                   payload: { id: r.id, name: r.name, price: r.price },
  //                 });
  //               }}
  //             >
  //               <span>Add</span>
  //             </button>
  //           </div>
  //         </motion.div>
  //       )}
  //     );
  //   }

  // }}

  // console.log(isOpen);
  // const [item, setItem] = useState("fruit");
  // const handleItems = (e) => {
  //   if (e.target.value === "fruit") {
  //     setItem("fruit");
  //     console.log(e.target.value);
  //   } else if (e.target.value === "daily") {
  //     setItem("daily");
  //     console.log(e.target.value);
  //   }
  // };
  // 如果result.lenght !== 0 裡有搜尋物件，則更換products_area 部分
  // 如果result.lenght === 0搜尋無結果，則 回傳 "您找的商品不存在..."
  console.log(result.length);
  return (
    <div className="relative h-full p-12 w-3/4 m-auto">
      <div className="products-body-bg"></div>
      {/* 商品切換區域 */}
      <div className="w-3/4 flex gap-5">
        <button
          className="sort-btn block w-16 text-center px-1"
          value="fruit"
          onClick={handleItems}
        >
          Fruit
        </button>
        <button
          className="sort-btn block w-16 text-center px-1"
          value="daily"
          onClick={handleItems}
        >
          Daily
        </button>
      </div>
      <div
        className={`products_area h-screen grid gap-0 grid-cols-4 transition-all duration-300 pt-4 ${
          isOpen ? "w-3/4 " : "w-full"
        } `}
      >
        {item === "fruit"
          ? fruit.map((f) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  key={f.id}
                  className="product-container p-4"
                >
                  <strong className="product-name block py-2">{f.name}</strong>
                  <div className="img_container overflow-hidden  opacity-75 rounded-20">
                    <img
                      src="/projests-picture/cart/lemon-dark-regular.svg"
                      alt={f.name}
                      className="p-4"
                    />
                  </div>
                  <div className="flex items-center mt-2 relative  w-full grid grid-cols-8 ">
                    <p className="pb-0 w-4/3 block col-span-5">
                      Price :{" "}
                      <strong className="text-red-500">${f.price}</strong>
                    </p>
                    <button
                      type="button"
                      className="col-span-3"
                      onClick={() => {
                        dispatch({
                          type: "ADD_Item",
                          payload: { id: f.id, name: f.name, price: f.price },
                        });
                      }}
                    >
                      <span>add</span>
                    </button>
                  </div>
                </motion.div>
              );
            })
          : daily.map((d) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  key={d.id}
                  className="product-container p-4"
                >
                  <strong className="product-name block py-2">{d.name}</strong>
                  <div className="img_container overflow-hidden rounded-20">
                    <img
                      src="/projests-picture/cart/box-tissue-dark-solid.svg"
                      alt={d.name}
                      className="p-4"
                    />
                  </div>
                  <div className="flex items-center mt-2 relative  w-full grid grid-cols-8 ">
                    <p className="pb-0 w-4/3 block col-span-6">
                      Price :{" "}
                      <strong className="text-red-500">${d.price}</strong>
                    </p>
                    <button
                      type="button"
                      className="col-span-2"
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
            })}
      </div>
    </div>
  );
};

export default CartMain;
