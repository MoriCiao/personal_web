import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import CartBody from "../projects/project-cart/CartBodyArea";

const ProjectsOutlet = () => {
  return (
    <div className="outlet-project">
      {/* 這邊要可以導向所有的 Project */}

      <Routes>
        <Route path="/projects/project-cart/cart" element={<CartBody />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default ProjectsOutlet;
