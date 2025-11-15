import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { publicNav } from "../../_nav";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-container">
      <div className="nav-wrapper">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="WisdomQuantum Logo" className="nav-logo-img" />
        </Link>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <nav className="nav-desktop">
          {publicNav.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        {publicNav.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "mobile-item active" : "mobile-item"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
