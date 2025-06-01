import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import CartBody from "./projects/project-cart/CartBodyArea.jsx";
import SearchBody from "./projects/project-search/SearchBody.jsx";
import StaticPageUniverse from "./projects/StaticPage-universe.jsx";
import StaticPageTodoList from "./projects/StaticPage-todoList.jsx";
import StaticPageCalculator from "./projects/StaticPage-calculator.jsx";
import FormOutlet from "./projects/project-form/FormOutlet.jsx";
import FormData from "./projects/project-form/FormData.jsx";
import ObjectForm from "./projects/project-form/ObjectForm/ObejectForm.jsx";
import GetApiAPP from "./projects/project-form/GetAPI/GetApiAPP.jsx";
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

      {/* Form */}
      <Route path="/projects/project-form/*" element={<FormData />}>
        <Route index element={<FormOutlet />} />
        <Route path="ObjectForm" element={<ObjectForm />} />
        <Route path="GetAPI" element={<GetApiAPP />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
