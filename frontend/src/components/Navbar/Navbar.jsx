import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { publicNav } from "../../_nav";

/**
 * Fully responsive navigation bar — WisdomQuantum Solution Pvt. Ltd.
 * - Sticky top bar
 * - Animated mobile menu
 * - No unwanted margin or padding
 */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      {/* Wrapper */}
      <div className="flex items-center justify-between px-5 py-5 mx-auto max-w-7xl md:px-8">
        {/* Brand Logo / Name */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-blue-700 hover:opacity-90"
          onClick={() => setMenuOpen(false)}
        >
          WisdomQuantum
        </Link>

        {/* Hamburger (Mobile Toggle) */}
        <button
          className="text-gray-700 md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden space-x-8 md:flex">
          {publicNav.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-bold transition-colors duration-200 ${
                  isActive
                    ? "text-blue-700 after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-blue-700"
                    : "text-gray-800 hover:text-blue-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Menu (Slide Down) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 bg-white border-t border-gray-100 shadow-sm">
          {publicNav.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 px-3 rounded-md text-base font-medium transition ${
                  isActive
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
