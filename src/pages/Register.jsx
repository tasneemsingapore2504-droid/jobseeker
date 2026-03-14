import React, { useState } from "react";
import "/Users/hussain.sw/tassy/jobseeker/src/assets/css-files/register.css";

const Register = () => {
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

              <h3 className="text-center mb-4">Create Account</h3>

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

              {/* JOB SEEKER FORM */}
              {role === "jobseeker" && (
                <form>

                  <input
                    className="form-control custom-input mb-3"
                    placeholder="Full Name"
                    required
                  />

                  <input
                    type="email"
                    className="form-control custom-input mb-3"
                    placeholder="Email"
                    required
                  />

                  <input
                    className="form-control custom-input mb-3"
                    placeholder="Phone"
                    required
                  />

                  <input
                    type="date"
                    className="form-control custom-input mb-3"
                    required
                  />

                  <input
                    type="password"
                    className="form-control custom-input mb-3"
                    placeholder="Password"
                    required
                  />

                  <input
                    type="password"
                    className="form-control custom-input mb-3"
                    placeholder="Repeat Password"
                    required
                  />

                  <input
                    type="file"
                    className="form-control mb-3"
                    required
                  />

                  <button className="custom-btn w-100">
                    Sign Up
                  </button>

                </form>
              )}

              {/* RECRUITER FORM */}
              {role === "recruiter" && (
                <form>

                  <input
                    className="form-control custom-input mb-3"
                    placeholder="Company Name"
                    required
                  />

                  <input
                    type="email"
                    className="form-control custom-input mb-3"
                    placeholder="Company Email"
                    required
                  />

                  <input
                    className="form-control custom-input mb-3"
                    placeholder="Website"
                    required
                  />

                  <input
                    type="password"
                    className="form-control custom-input mb-3"
                    placeholder="Password"
                    required
                  />

                  <input
                    type="password"
                    className="form-control custom-input mb-3"
                    placeholder="Repeat Password"
                    required
                  />

                  <button className="custom-btn w-100">
                    Sign Up
                  </button>

                </form>
              )}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;