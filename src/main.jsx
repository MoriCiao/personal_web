import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import CartBody from "./projects/project-cart/CartBodyArea.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects/project-cart/cart/*" element={<CartBody />} />
    </Routes>
  </BrowserRouter>
);
