import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="main-navbar">
        <div className="nav-left">
          <div className="logo">
            Job<span>Seek</span>
          </div>

          <Link to="/">Home</Link>
          <Link to="/jobList">JobList</Link>
          <Link to="/companiesList">CompaniesList</Link>

          <Link to="/about">AboutUs</Link>
          <Link to="/contact">ContactUs</Link>

          <Link to="/register">Register</Link>
        </div>

        <div className="nav-right">
          <Link to="/login" id="main-login">
            Login
          </Link>

          <input
            className="search-box"
            type="text"
            placeholder="Search Companies..."
          />
          <button className="search-btn">Search</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
