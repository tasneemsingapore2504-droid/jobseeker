// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Register = () => {
//   const [role, setRole] = useState("");

//   return (
//     <>
//       {/* INTERNAL STYLES */}
//       <style>{`
//         body {
//           background: #f8f9fa;
//           margin: 0;
//         }

//         .auth-container {
//           height: 90vh;
//           border-radius: 20px;
//           overflow: hidden;
//           margin-top: 90px;
//         }

//         .left-side {
//           background: linear-gradient(135deg, #e0ce84, #846b39);
//           color: white;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           flex-direction: column;
//           padding: 40px;
//           text-align: center;
//         }

//         .form-section {
//           padding: 30px;
//           height: 90vh;
//           overflow-y: auto;
//         }

//         .form-box {
//           animation: fadeIn 0.3s ease-in-out;
//         }

//         @media (max-width: 768px) {
//           .left-side {
//             display: none;
//           }
//           .form-section {
//             height: auto;
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>

//       {/* MAIN CONTENT */}
//       <div className="container d-flex justify-content-center align-items-center">
//         <div className="row shadow-lg auth-container bg-white w-100">
//           {/* LEFT */}
//           <div className="col-md-6 left-side">
//             <h2>JobSeek</h2>
//             <p className="mt-3">Find • Apply • Grow</p>
//           </div>

//           {/* RIGHT */}
//           <div className="col-md-6 form-section">
//             <h4 className="text-center mb-3">Register As</h4>

//             <div className="d-flex justify-content-center gap-4 mb-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="role"
//                   value="recruiter"
//                   onChange={(e) => setRole(e.target.value)}
//                 />{" "}
//                 Recruiter
//               </label>

//               <label>
//                 <input
//                   type="radio"
//                   name="role"
//                   value="jobseeker"
//                   onChange={(e) => setRole(e.target.value)}
//                 />{" "}
//                 JobSeeker
//               </label>
//             </div>

//             {/* JOBSEEKER */}
//             {role === "jobseeker" && (
//               <div className="form-box">
//                 <h5 className="mb-3">JobSeeker Sign Up</h5>

//                 <form>
//                   <input
//                     className="form-control mb-2"
//                     placeholder="Full Name"
//                   />
//                   <input className="form-control mb-2" placeholder="Email" />
//                   <input className="form-control mb-2" placeholder="Phone" />
//                   <input type="date" className="form-control mb-2" />
//                   <input
//                     type="password"
//                     className="form-control mb-2"
//                     placeholder="Password"
//                   />
//                   <input
//                     type="password"
//                     className="form-control mb-2"
//                     placeholder="Repeat Password"
//                   />
//                   <input type="file" className="form-control mb-3" />

//                   <button className="btn btn-success w-100">Sign Up</button>
//                 </form>
//               </div>
//             )}

//             {/* RECRUITER */}
//             {role === "recruiter" && (
//               <div className="form-box">
//                 <h5 className="mb-3">Recruiter Sign Up</h5>

//                 <form>
//                   <input
//                     className="form-control mb-2"
//                     placeholder="Company Name"
//                   />
//                   <input
//                     className="form-control mb-2"
//                     placeholder="Company Email"
//                   />
//                   <input className="form-control mb-2" placeholder="Website" />
//                   <input
//                     type="password"
//                     className="form-control mb-2"
//                     placeholder="Password"
//                   />
//                   <input
//                     type="password"
//                     className="form-control mb-3"
//                     placeholder="Repeat Password"
//                   />

//                   <button className="btn btn-primary w-100">Sign Up</button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;

// NEW CODE

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
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
          <br />
          <br />

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
                  className="form-control mb-2"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Email"
                  required
                />

                <input
                  className="form-control mb-2"
                  placeholder="Phone"
                  required
                />

                <input type="date" className="form-control mb-2" required />

                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Password"
                  required
                />

                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Repeat Password"
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
                  className="form-control mb-2"
                  placeholder="Company Name"
                  required
                />

                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Company Email"
                  required
                />

                <input
                  className="form-control mb-2"
                  placeholder="Website"
                  required
                />

                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Password"
                  required
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Repeat Password"
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

export default Register;
