import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css"; // Tailwind styles

/**
 * Entry point — WisdomQuantum Solution Pvt. Ltd.
 *
 * Mounts the React app using React 18 createRoot API.
 * Wraps entire app in BrowserRouter for routing.
 */

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
