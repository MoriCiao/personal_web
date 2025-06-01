import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate } from "react-router-dom";

const MotionLink = motion.create(Link);

const LinkStyle =
  "bg-yellow-100 font-bold px-2 py-2 mx-1 w-[10rem] border-2 border-2 border-dashed border-gray-900 rounded-xl shadow-md";

const LinkAnimate = {
  whileHover: { scale: 1.05, backgroundColor: "#ffcd44" },
  transition: { type: "spring", stiffness: 300 },
};

const FormData = () => {
  console.log("FormData render ...");
  const dataNavigate = useNavigate();

  return (
    <div className="text-black bg-gray-200 text-center place-items-center h-screen">
      <h1 className="text-[3rem] font-semibold pt-4">Project FormData</h1>
      <nav className="grid grid-cols-3 gap-1 items-center justify-center mt-4">
        <MotionLink
          {...LinkAnimate}
          className={LinkStyle}
          to="/projects/project-form"
        >
          HomePage{" "}
        </MotionLink>

        <MotionLink
          {...LinkAnimate}
          className={LinkStyle}
          to="/projects/project-form/ObjectForm"
        >
          小型資料庫
        </MotionLink>

        <MotionLink
          {...LinkAnimate}
          className={LinkStyle}
          to="/projects/project-form/GetAPI"
        >
          API資料查詢
        </MotionLink>
      </nav>
      <div className="w-100 mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default FormData;
