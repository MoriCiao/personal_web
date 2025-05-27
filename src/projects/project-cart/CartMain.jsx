import React, { useContext, useReducer, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { ThemeContext } from "./CartBodyArea.jsx";
import { motion } from "framer-motion";
import ProductsPage from "../page/ProductsPage.jsx";
import DefaultPage from "../page/DefaultPage.jsx";
import ProductFruit from "../page/ProductFruit.jsx";
import ProductDaily from "../page/ProductDaily.jsx";
import ProductSnack from "../page/ProductSnack.jsx";
import ProductDivce from "../page/ProductDivce.jsx";
import NotFound from "../page/NotFound.jsx";

export const btnClass =
  "text-center border py-2 bg-gray-500 text-white rounded-md";

const CartMain = () => {
  console.log("CartMain render ...");
  const { isOpen, result, setResult, isSearch, setIsSearch, dispatch } =
    useContext(ThemeContext);

  const [active, setActive] = useState("");

  const handleClick = (name) => {
    console.log("handleClick render ...");
    setResult([]);
    console.log(isSearch);
    console.log(name + "被點擊了!");
    setActive(name);
    console.log(result);
    setTimeout(() => {
      setIsSearch(false);
      console.log(isSearch);
    }, 150);
  };
  //搜尋後無法切換商品

  const location = useLocation();

  return (
    <div
      className={`transition-all duration-300 p-12 m-auto w-3/4
        `}
    >
      {/* 商品切換區域 */}
      {/* Link */}
      <motion.nav className={`grid grid-cols-6 gap-4 w-full`}>
        <Link
          className={`link-point ${btnClass} ${
            active === "products" ? "bg-yellow-400 text-black" : ""
          }`}
          to="/projects/project-cart/cart/products"
          onClick={() => handleClick("products")}
        >
          Products
        </Link>
        <Link
          className={`link-point ${btnClass} ${
            active === "fruit" ? "bg-yellow-400 text-black" : ""
          }`}
          to="/projects/project-cart/cart/products/fruit"
          onClick={() => handleClick("fruit")}
        >
          Fruit
        </Link>
        <Link
          className={`link-point ${btnClass} ${
            active === "daily" ? "bg-yellow-400 text-black" : ""
          }`}
          to="/projects/project-cart/cart/products/daily"
          onClick={() => handleClick("daily")}
        >
          Daily
        </Link>
        <Link
          className={`link-point ${btnClass}${
            active === "snack" ? " bg-yellow-400 text-black" : ""
          }`}
          to="/projects/project-cart/cart/products/snack"
          onClick={() => handleClick("snack")}
        >
          Snack
        </Link>
        <Link
          className={`link-point ${btnClass} ${
            active === "divce" ? "bg-yellow-400 text-black" : ""
          }`}
          to="/projects/project-cart/cart/products/divce"
          onClick={() => handleClick("divce")}
        >
          Divce
        </Link>
      </motion.nav>
      {isSearch ? (
        <div className="relative h-full  w-full m-auto">
          <div
            className={`products_area h-screen grid gap-0 grid-cols-4 transition-all duration-300 pt-4 ${
              isOpen ? "w-3/4 " : "w-full"
            } `}
          >
            {result.map((r) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  key={r.id}
                  className="product-container p-4"
                >
                  <strong className="product-name block py-2">{r.name}</strong>
                  <div className="img_container overflow-hidden  opacity-75 rounded-20">
                    <span className=" text-[9rem]">{r.img}</span>
                  </div>
                  <div className="flex items-center mt-2 relative  w-full grid grid-cols-8 ">
                    <p className="pb-0 w-4/3 block col-span-5">
                      Price :{" "}
                      <strong className="text-red-500">${r.price}</strong>
                    </p>
                    <button
                      type="button"
                      className="col-span-3"
                      onClick={() => {
                        dispatch({
                          type: "ADD_Item",
                          payload: { id: r.id, name: r.name, price: r.price },
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
      ) : (
        <div className="relative h-full  w-full m-auto `">
          <p className="pt-2">Location : {location.pathname}</p>
          {/* 這邊需要有頁面轉換功能， */}
          <Routes>
            <Route path="products" element={<ProductsPage />}>
              <Route index element={<DefaultPage />} />
              <Route path="fruit" element={<ProductFruit />} />
              <Route path="daily" element={<ProductDaily />} />
              <Route path="snack" element={<ProductSnack />} />
              <Route path="divce" element={<ProductDivce />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      )}
    </div>
  );
};

export default CartMain;
