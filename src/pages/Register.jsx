// import React, { useState } from "react";
// // import "/Users/hussain.sw/tassy/jobseeker/src/assets/css-files/register.css";

// const Register = () => {
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
//               <h3 className="text-center mb-4">Create Account</h3>

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

//               {/* JOB SEEKER FORM */}
//               {role === "jobseeker" && (
//                 <form>
//                   <input
//                     className="form-control custom-input mb-3"
//                     placeholder="Full Name"
//                     name="fname"
//                     required
//                   />

//                   <input
//                     type="email"
//                     className="form-control custom-input mb-3"
//                     placeholder="Email"
//                     name="email"
//                     required
//                   />

//                   <input
//                     className="form-control custom-input mb-3"
//                     placeholder="Phone"
//                     name="phone"
//                     required
//                   />

//                   <input
//                     type="date"
//                     name="dob"
//                     className="form-control custom-input mb-3"
//                     required
//                   />

//                   <input
//                     type="password"
//                     name="password"
//                     className="form-control custom-input mb-3"
//                     placeholder="Password"
//                     required
//                   />

//                   <input
//                     type="password"
//                     name="repasswd"
//                     className="form-control custom-input mb-3"
//                     placeholder="Repeat Password"
//                     required
//                   />

//                   <div className="mb-3">
//                     <label htmlFor="resumeUpload" className="form-label">
//                       Resume
//                     </label>
//                     <input
//                       type="file"
//                       className="form-control"
//                       id="resumeUpload"
//                       required
//                     />
//                   </div>

//                   <button className="custom-btn w-100">Sign Up</button>
//                 </form>
//               )}

//               {/* RECRUITER FORM */}
//               {role === "recruiter" && (
//                 <form>
//                   <input
//                     className="form-control custom-input mb-3"
//                     placeholder="Company Name"
//                     name="cname"
//                     required
//                   />

//                   <input
//                     type="email"
//                     className="form-control custom-input mb-3"
//                     placeholder="Company Email"
//                     name="cemail"
//                     required
//                   />

//                   <input
//                     className="form-control custom-input mb-3"
//                     placeholder="Website"
//                     name="website"
//                     required
//                   />

//                   <input
//                     type="password"
//                     className="form-control custom-input mb-3"
//                     placeholder="Password"
//                     name="cpassword"
//                     required
//                   />

//                   <input
//                     type="password"
//                     className="form-control custom-input mb-3"
//                     placeholder="Repeat Password"
//                     name="repasswd"
//                     required
//                   />

//                   <button className="custom-btn w-100">Sign Up</button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [role, setRole] = useState("jobseeker");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    phone: "",
    dob: "",
    website: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (formData.password !== formData.repassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: role,
        phone: formData.phone,
        dob: formData.dob,
        website: formData.website,
      });

      alert("Registration successful");

      // Redirect to login (same app)
      window.location.href = "http://localhost:5173/login";
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Registration failed");
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
              <h3 className="text-center mb-4">Create Account</h3>

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

              {/* JOB SEEKER FORM */}
              {role === "jobseeker" && (
                <form onSubmit={handleSubmit}>
                  <label className="form-label">Full Name</label>
                  <input
                    className="form-control custom-input mb-3"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control custom-input mb-3"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <label className="form-label">Phone</label>
                  <input
                    className="form-control custom-input mb-3"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <label className="form-label">Date Of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    className="form-control custom-input mb-3"
                    value={formData.dob}
                    onChange={handleChange}
                  />

                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control custom-input mb-3"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <label className="form-label">Repeat Password</label>
                  <input
                    type="password"
                    name="repassword"
                    className="form-control custom-input mb-3"
                    placeholder="Repeat Password"
                    value={formData.repassword}
                    onChange={handleChange}
                    required
                  />

                  <div className="mb-3">
                    <label className="form-label">Resume</label>
                    <input type="file" className="form-control" />
                  </div>

                  <button type="submit" className="custom-btn w-100">
                    Sign Up
                  </button>
                </form>
              )}

              {/* RECRUITER FORM */}
              {role === "recruiter" && (
                <form onSubmit={handleSubmit}>
                  <label className="form-label">Company Name</label>
                  <input
                    className="form-control custom-input mb-3"
                    placeholder="Company Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <label className="form-label">Company Email</label>
                  <input
                    type="email"
                    className="form-control custom-input mb-3"
                    placeholder="Company Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <label className="form-label">Website</label>
                  <input
                    className="form-control custom-input mb-3"
                    placeholder="Website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                  />

                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control custom-input mb-3"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <label className="form-label">Repeat Password</label>
                  <input
                    type="password"
                    className="form-control custom-input mb-3"
                    placeholder="Repeat Password"
                    name="repassword"
                    value={formData.repassword}
                    onChange={handleChange}
                    required
                  />

                  <button type="submit" className="custom-btn w-100">
                    Sign Up
                  </button>
                </form>
              )}
              <p className="text-center mt-3 small-text">
                Already have an account <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
