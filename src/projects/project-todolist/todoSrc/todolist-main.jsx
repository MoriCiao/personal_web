import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoListApp from "./todoApp";
import "./todoApp.css";

createRoot(document.getElementById("todolist-root")).render(
  <StrictMode>
    <TodoListApp />
  </StrictMode>
);
