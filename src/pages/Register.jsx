import React, { useState } from "react";
// import "/Users/hussain.sw/tassy/jobseeker/src/assets/css-files/register.css";

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
                    name="fname"
                    required
                  />

                  <input
                    type="email"
                    className="form-control custom-input mb-3"
                    placeholder="Email"
                    name="email"
                    required
                  />

                  <input
                    className="form-control custom-input mb-3"
                    placeholder="Phone"
                    name="phone"
                    required
                  />

                  <input
                    type="date"
                    name="dob"
                    className="form-control custom-input mb-3"
                    required
                  />

                  <input
                    type="password"
                    name="password"
                    className="form-control custom-input mb-3"
                    placeholder="Password"
                    required
                  />

                  <input
                    type="password"
                    name="repasswd"
                    className="form-control custom-input mb-3"
                    placeholder="Repeat Password"
                    required
                  />

                  <input type="file" className="form-control mb-3" required />

                  <button className="custom-btn w-100">Sign Up</button>
                </form>
              )}

              {/* RECRUITER FORM */}
              {role === "recruiter" && (
                <form>
                  <input
                    className="form-control custom-input mb-3"
                    placeholder="Company Name"
                    name="cname"
                    required
                  />

                  <input
                    type="email"
                    className="form-control custom-input mb-3"
                    placeholder="Company Email"
                    name="cemail"
                    required
                  />

                  <input
                    className="form-control custom-input mb-3"
                    placeholder="Website"
                    name="website"
                    required
                  />

                  <input
                    type="password"
                    className="form-control custom-input mb-3"
                    placeholder="Password"
                    name="password"
                    required
                  />

                  <input
                    type="password"
                    className="form-control custom-input mb-3"
                    placeholder="Repeat Password"
                    name="repasswd"
                    required
                  />

                  <button className="custom-btn w-100">Sign Up</button>
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
