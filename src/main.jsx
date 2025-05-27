import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import CartBody from "./projects/project-cart/CartBodyArea.jsx";
import SearchBody from "./projects/project-search/SearchBody.jsx";
import StaticPageUniverse from "./projects/StaticPage-universe.jsx";
import StaticPageTodoList from "./projects/StaticPage-todoList.jsx";
import StaticPageCalculator from "./projects/StaticPage-calculator.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/projects/project-universe"
        element={<StaticPageUniverse />}
      />
      <Route
        path="/projects/project-todolist"
        element={<StaticPageTodoList />}
      />
      <Route
        path="/projects/project-calculator"
        element={<StaticPageCalculator />}
      />
      <Route path="/projects/project-search/" element={<SearchBody />} />
      <Route path="/projects/project-cart/cart/*" element={<CartBody />} />
    </Routes>
  </BrowserRouter>
);
