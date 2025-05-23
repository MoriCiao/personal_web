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

import ProductsPage from "../page/ProductsPage.jsx";
import DefaultPage from "../page/DefaultPage.jsx";
import ProductFruit from "../page/ProductFruit.jsx";
import ProductDaily from "../page/ProductDaily.jsx";
import ProductSnack from "../page/ProductSnack.jsx";
import ProductDivce from "../page/ProductDivce.jsx";
import NotFound from "../page/NotFound.jsx";
const CartMain = () => {
  const { isOpen, fruit, daily, dispatch, result, item, setItem, handleItems } =
    useContext(ThemeContext);
  const btnClass = "text-center border py-2 bg-gray-500 text-white rounded-md";
  const [active, setActive] = useState("");
  const handleClick = (name) => {
    console.log(name + "被點擊了!");
    setActive(name);
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  return (
    <div className="relative h-full p-12 w-3/4 m-auto {}`">
      {/* 商品切換區域 */}

      {/* Link */}

      <nav className={`grid grid-cols-6 gap-4 ${isOpen ? "w-3/4" : "w-full"}`}>
        <Link
          className={`link-point ${btnClass} ${
            active === "products" ? "bg-yellow-400 text-black" : ""
          }`}
          to="/cart/products"
          onClick={() => handleClick("products")}
        >
          Products
        </Link>
        <Link
          className={`link-point ${btnClass} ${
            active === "fruit" ? "bg-yellow-400 text-black" : ""
          }`}
          to="/cart/products/fruit"
          onClick={() => handleClick("fruit")}
        >
          Fruit
        </Link>
        <Link
          className={`link-point ${btnClass} ${
            active === "daily" ? "bg-yellow-400 text-black" : ""
          }`}
          to="/cart/products/daily"
          onClick={() => handleClick("daily")}
        >
          Daily
        </Link>
        <Link
          className={`link-point ${btnClass}${
            active === "snack" ? "bg-yellow-400 text-black" : ""
          }`}
          to="/cart/products/snack"
          onClick={() => handleClick("snack")}
        >
          Snack
        </Link>
        <Link
          className={`link-point ${btnClass} ${
            active === "divce" ? "bg-yellow-400 text-black" : ""
          }`}
          to="/cart/products/divce"
          onClick={() => handleClick("divce")}
        >
          Divce
        </Link>

        <button
          className="col-start-12 p-2"
          onClick={() => navigate("/cart/products")}
        >
          HomePage
        </button>
      </nav>

      <p className="pt-2">Location : {location.pathname}</p>
      {/* 這邊需要有頁面轉換功能， */}
      <Routes>
        <Route path="/cart/products/" element={<ProductsPage />}>
          <Route index element={<DefaultPage />} />
          <Route path="fruit" element={<ProductFruit />} />
          <Route path="daily" element={<ProductDaily />} />
          <Route path="snack" element={<ProductSnack />} />
          <Route path="divce" element={<ProductDivce />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* <div
        className={`products_area h-screen grid gap-0 grid-cols-4 transition-all duration-300 pt-4 ${
          isOpen ? "w-3/4 " : "w-full"
        } `}
      ></div> */}
    </div>
  );
};

export default CartMain;
