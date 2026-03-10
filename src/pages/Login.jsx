import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [role, setRole] = useState("jobseeker");

  return (
    <div className="container">
      <div className="row shadow-lg auth-container bg-white">
        {/* LEFT PANEL */}
        <div className="col-md-6 left-side">
          <h2>JobSeek</h2>
          <p className="mt-3">Find • Apply • Grow</p>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-md-6 form-section">
          <h4 className="text-center mb-3">Register As</h4>

          <div className="d-flex justify-content-center gap-4 mb-4">
            <div>
              <input
                type="radio"
                name="role"
                value="recruiter"
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              Recruiter
            </div>

            <div>
              <input
                type="radio"
                name="role"
                value="jobseeker"
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              JobSeeker
            </div>
          </div>

          {/* JOBSEEKER FORM */}

          {role === "jobseeker" && (
            <div className="form-box active">
              <h5 className="mb-3">JobSeeker Sign Up</h5>

              <form>
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Email"
                  required
                />

                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Password"
                  required
                />

                <input type="file" className="form-control mb-3" required />

                <button className="btn btn-success w-100">Sign Up</button>
              </form>
            </div>
          )}

          {/* RECRUITER FORM */}

          {role === "recruiter" && (
            <div className="form-box active">
              <h5 className="mb-3">Recruiter Sign Up</h5>

              <form>
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Company Email"
                  required
                />

                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Password"
                  required
                />

                <button className="btn btn-primary w-100">Sign Up</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
