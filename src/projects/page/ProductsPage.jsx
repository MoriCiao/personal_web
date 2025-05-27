import React from "react";
import { Outlet } from "react-router-dom";

const ProductsPage = () => {
  console.log("ProductsPage render ...");
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default ProductsPage;
