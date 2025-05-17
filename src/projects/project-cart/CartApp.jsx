import React from "react";
import { createRoot } from "react-dom/client";
import "./cart.css";
import CartBody from "./CartBodyArea.jsx";

createRoot(document.getElementById("cartRoot")).render(<CartBody />);
