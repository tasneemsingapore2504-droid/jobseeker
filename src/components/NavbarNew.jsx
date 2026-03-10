import React, { useState } from "react";
import { Link } from "react-router-dom";
const NavbarNew = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="main-navbar">
      {/* LEFT */}
      <div className="nav-left">
        <div className="logo">
          Learn<span>Go</span>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/jobList">JobList</Link>
          <Link to="/companiesList">CompaniesList</Link>

          <Link to="/about">AboutUs</Link>
          <Link to="/contact">ContactUs</Link>

          <Link to="/register">Register</Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <Link to="/login" id="main-login">
          Login
        </Link>

        <input
          type="text"
          className="search-box mobile-search"
          placeholder="Search..."
        />
        <button className="search-btn mobile-search">Search</button>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
