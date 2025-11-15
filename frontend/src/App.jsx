import React from "react";
import Router from "./router";

/**
 * Root App Component — WisdomQuantum Solution Pvt. Ltd.
 *
 * Handles the global structure:
 *  - Navbar + Footer are included in router layout
 *  - All pages are rendered by the router
 */

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-light text-dark">
      <Router />
    </div>
  );
}
