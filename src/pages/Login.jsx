// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// const Login = () => {
//   const [role, setRole] = useState("jobseeker");

//   return (
//     <div className="page-wrapper">
//       <div className="container">
//         <div className="auth-container shadow-lg">
//           {/* LEFT PANEL */}
//           <div className="left-side">
//             <div>
//               <h1 className="fw-bold">JobSeek</h1>
//               <p className="mt-3">Find • Apply • Grow</p>
//             </div>
//           </div>

//           {/* RIGHT PANEL */}
//           <div className="form-section">
//             <div className="form-wrapper">
//               <h3 className="text-center mb-4">Login</h3>

//               {/* ROLE TOGGLE */}
//               <div className="role-toggle-container mb-4">
//                 <button
//                   className={`role-toggle-btn ${
//                     role === "jobseeker" ? "active" : ""
//                   }`}
//                   onClick={() => setRole("jobseeker")}
//                 >
//                   Job Seeker
//                 </button>

//                 <button
//                   className={`role-toggle-btn ${
//                     role === "recruiter" ? "active" : ""
//                   }`}
//                   onClick={() => setRole("recruiter")}
//                 >
//                   Recruiter
//                 </button>
//               </div>
//               {role === "jobseeker" && (
//                 <form>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control custom-input mb-3"
//                     placeholder="Email"
//                     required
//                   />

//                   <input
//                     type="password"
//                     name="password"
//                     className="form-control custom-input mb-3"
//                     placeholder="Password"
//                     required
//                   />

//                   <button className="custom-btn w-100">Login</button>
//                 </form>
//               )}

//               {role === "recruiter" && (
//                 <form>
//                   <input
//                     type="email"
//                     name="cemail"
//                     className="form-control custom-input mb-3"
//                     placeholder="Company Email"
//                     required
//                   />

//                   <input
//                     type="password"
//                     name="cpassword"
//                     className="form-control custom-input mb-3"
//                     placeholder="Password"
//                     required
//                   />

//                   <button className="custom-btn w-100">Login</button>
//                 </form>
//               )}

//               <p className="text-center mt-3 small-text">
//                 Don't have an account? <Link to="/register">Register</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("jobseeker");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cemail: "",
    cpassword: "",
  });

  // Handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("LOGIN CLICKED");

    try {
      const email = role === "recruiter" ? formData.cemail : formData.email;
      const password =
        role === "recruiter" ? formData.cpassword : formData.password;

      console.log("Sending:", { email, password });

      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      console.log("Response:", res.data);

      const { token, user } = res.data;

      // Save token
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // update navbar accordingly

      window.dispatchEvent(new Event("userChanged")); // Notify other tabs

      // 🔥 Redirect based on role
      if (user.role === "recruiter") {
        alert("Recruiter Login Successful");
        setTimeout(() => {
          window.location.href = `http://localhost:5174/company/dashboard?token=${token}&user=${encodeURIComponent(JSON.stringify(user))}`;
        }, 500);
      } else if (user.role === "jobseeker") {
        alert("jobseeker Login Successful");

        setTimeout(() => {
          window.location.href = "candidate/dashboard";
        }, 500);
      }
    } catch (error) {
      console.log("FULL ERROR: ", error);
      console.log("Backend Message ", error?.response?.data);
      alert(error?.response?.data?.message || "Login failed");
    }
  };

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
                  type="button"
                  className={`role-toggle-btn ${
                    role === "jobseeker" ? "active" : ""
                  }`}
                  onClick={() => setRole("jobseeker")}
                >
                  Job Seeker
                </button>

                <button
                  type="button"
                  className={`role-toggle-btn ${
                    role === "recruiter" ? "active" : ""
                  }`}
                  onClick={() => setRole("recruiter")}
                >
                  Recruiter
                </button>
              </div>

              {/* FORM (SAME FOR BOTH ROLES) */}
              <form onSubmit={handleSubmit}>
                {role === "jobseeker" ? (
                  <>
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control custom-input mb-3"
                      placeholder={
                        role === "recruiter" ? "Company Email" : "Email"
                      }
                      onChange={handleChange}
                      required
                    />

                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control custom-input mb-3"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    />
                  </>
                ) : (
                  <>
                    <label className="form-label">Company Email</label>
                    <input
                      type="email"
                      name="cemail"
                      className="form-control custom-input mb-3"
                      placeholder="Company Email"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-label">Company Password</label>
                    <input
                      type="password"
                      name="cpassword"
                      className="form-control custom-input mb-3"
                      placeholder="Company Password"
                      onChange={handleChange}
                      required
                    />
                  </>
                )}
                <button type="submit" className="custom-btn w-100">
                  Login
                </button>
              </form>

              <p className="text-center mt-3 small-text">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
