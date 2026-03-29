import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarNew = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  });

  // new changes
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const navigate = useNavigate();

  // Listen for login/logout changes
  useEffect(() => {
    const syncAuthState = () => {
      try {
        setUser(JSON.parse(localStorage.getItem("user") || "null"));
      } catch {
        setUser(null);
      }
      setToken(localStorage.getItem("token"));
    };

    syncAuthState();
    window.addEventListener("userChanged", syncAuthState);
    window.addEventListener("storage", syncAuthState);

    return () => {
      window.removeEventListener("userChanged", syncAuthState);
      window.removeEventListener("storage", syncAuthState);
    };
  }, []);

  const isLoggedIn = Boolean(token);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("candidateProfile"); // Clear candidate profile on logout
    window.dispatchEvent(new Event("userChanged"));
    navigate("/login");
  };

  // Dashboard navigation (based on role)
  const handleDashboardClick = () => {
    if (!user) return;

    if (user.role === "recruiter") {
      const token = localStorage.getItem("token") || "";
      window.location.href = `http://localhost:5174/company/dashboard?token=${token}&user=${encodeURIComponent(
        JSON.stringify(user),
      )}`;
      return;
    }

    navigate("/candidate/dashboard");
  };

  return (
    <nav className="main-navbar">
      {/* LEFT */}
      <div className="nav-left">
        <div className="logo">
          Job<span>Seek</span>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/jobList">JobList</Link>
          <Link to="/companiesList">CompaniesList</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/contact">ContactUs</Link>

          {/* Register before login */}
          {!isLoggedIn ? (
            <Link to="/register">Register</Link>
          ) : (
            <button
              type="button"
              className="nav-link-btn"
              onClick={handleDashboardClick}
            >
              Dashboard
            </button>
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        {/* Login / Logout */}
        {!isLoggedIn ? (
          <Link to="/login" id="main-login">
            Login
          </Link>
        ) : (
          <button type="button" id="main-login" onClick={handleLogout}>
            Logout
          </button>
        )}

        <input
          type="text"
          className="search-box mobile-search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="search-btn mobile-search"
          onClick={() => navigate(`/companiesList?search=${search}`)}
        >
          Search
        </button>

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
