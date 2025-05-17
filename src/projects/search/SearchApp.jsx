import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./search.css";
import SearchBody from "./SearchBody.jsx";

createRoot(document.getElementById("searchRoot")).render(
  // <StrictMode>
  <SearchBody />
  // </StrictMode>
);
