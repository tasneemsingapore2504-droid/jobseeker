import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("DASHBOARD LOADED");

    // 🔥 Step 1: Get token from URL (for cross-app login)
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("token");
    const userFromUrl = params.get("user");

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      console.log("Token received from URL:", tokenFromUrl);
    }

    if (userFromUrl) {
      const parsedUser = JSON.parse(decodeURIComponent(userFromUrl));
      localStorage.setItem("user", JSON.stringify(parsedUser));
      console.log("User saved", parsedUser);
    }

    // 🔥 Step 2: Get token + user from localStorage
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    console.log("Token in dashboard:", token);
    console.log("User in dashboard:", userData);

    // 🔥 Step 3: Validate
    if (!token || !userData) {
      window.location.replace("http://localhost:5173/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);

      if (parsedUser.role !== "jobseeker") {
        window.location.replace("http://localhost:5173/login");
        return;
      }

      setUser(parsedUser);
    } catch (err) {
      console.log("User parse error:", err);
      window.location.replace("http://localhost:5173/login");
      return;
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Loading dashboard...</h2>;
  }
  return (
    <>
      <section class="hero">
        <div class="hero-text">
          <h1>Find your dream job now</h1>
          <p color="black">Welcome to your dashboard, {user?.name}!</p>
          <Link to="/companiesList">
            <button class="explore">Explore Now</button>
          </Link>
          <Link to="/candidateProfile">
            <button class="explore">Manage Profile</button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
