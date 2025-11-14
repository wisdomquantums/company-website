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
    <div className="min-h-screen flex flex-col bg-light text-dark">
      <Router />
    </div>
  );
}
