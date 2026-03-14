import React, { useState } from "react";
import "/Users/hussain.sw/tassy/jobseeker/src/assets/css-files/register.css";

const Login = () => {
  const [role, setRole] = useState("jobseeker");

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="auth-container shadow-lg">

          {/* LEFT PANEL */}
          <div className="left-side">
            <div>
              <h1 className="fw-bold">JobSeek</h1>
              <p className="mt-3">Find • Apply • Grow</p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="form-section">

            <div className="form-wrapper">

              <h3 className="text-center mb-4">Login</h3>

              {/* ROLE TOGGLE */}
              <div className="role-toggle-container mb-4">
                <button
                  className={`role-toggle-btn ${
                    role === "jobseeker" ? "active" : ""
                  }`}
                  onClick={() => setRole("jobseeker")}
                >
                  Job Seeker
                </button>

                <button
                  className={`role-toggle-btn ${
                    role === "recruiter" ? "active" : ""
                  }`}
                  onClick={() => setRole("recruiter")}
                >
                  Recruiter
                </button>
              </div>

              <form>

                <input
                  type="email"
                  className="form-control custom-input mb-3"
                  placeholder="Email"
                  required
                />

                <input
                  type="password"
                  className="form-control custom-input mb-3"
                  placeholder="Password"
                  required
                />

                <button className="custom-btn w-100">
                  Login
                </button>

              </form>

              <p className="text-center mt-3 small-text">
                Don't have an account? Register
              </p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;