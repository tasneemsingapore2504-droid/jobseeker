// const CandidateProfile = () => {
//   return (
//     <div class="form-card">
//       <h1>Candidate Profile</h1>
//       <p>Please fill out the form below to fill you Profile</p>

//       <form>
//         <div class="field">
//           <label>Candidate ID</label>
//           <input type="text" required />
//         </div>
//         <div class="row">
//           <div class="field">
//             <label>First Name</label>
//             <input type="text" required />
//           </div>
//           <div class="field">
//             <label>Last Name</label>
//             <input type="text" required />
//           </div>
//         </div>

//         <div class="field">
//           <label>Gender</label>
//           <div class="options">
//             <label>
//               <input type="radio" name="gender" /> Male
//             </label>
//             <label>
//               <input type="radio" name="gender" /> Female
//             </label>
//             <label>
//               <input type="radio" name="gender" /> Other
//             </label>
//           </div>
//         </div>

//         <div class="row">
//           <div class="field">
//             <label>Mother Name</label>
//             <input type="text" required />
//           </div>
//           <div class="field">
//             <label>Father Name</label>
//             <input type="text" required />
//           </div>
//         </div>

//         <div class="field">
//           <label>Email</label>
//           <input type="email" required />
//         </div>

//         <div class="field">
//           <label>Phone Number</label>
//           <input type="tel" required />
//         </div>

//         <div class="field">
//           <label>Age</label>
//           <input type="number" required />
//         </div>

//         <div class="field">
//           <label>Add DOB</label>
//           <input type="date" required />
//         </div>

//         <div class="field">
//           <label>Add Current City</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Address</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Pincode</label>
//           <input type="number" required />
//         </div>

//         <div class="field">
//           <label>Highest Qualification</label>
//           <input type="text" required />
//         </div>
//         <div class="field">
//           <label>University</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Percentage</label>
//           <input type="number" />
//         </div>

//         <div class="field">
//           <label>Experience</label>
//           <input type="text" />
//         </div>

//         <div class="field">
//           <label>Skills</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Certificates</label>
//           <input type="text" />
//         </div>

//         <div class="field">
//           <label>Upload Resume</label>
//           <input type="file" />
//         </div>

//         <div class="field">
//           <label>Any Other Documents</label>
//           <input type="file" placeholder="Certificates,Awards,etc..." />
//         </div>

//         <button type="submit" class="submit-btn">
//           Apply
//         </button>
//       </form>
//     </div>
//   );
// };
// export default CandidateProfile;

import { useState } from "react";
import axios from "axios";

const CandidateProfile = () => {
  const [formData, setFormData] = useState({
    candidateId: "",
    fname: "",
    lname: "",
    gender: "",
    mname: "",
    faname: "",
    email: "",
    phone: "",
    age: "",
    dob: "",
    city: "",
    address: "",
    pincode: "",
    qualification: "",
    university: "",
    percentage: "",
    experience: "",
    skills: "",
    certificates: "",
    resume: "",
    documents: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/CandidateProfile", formData);

      alert("Candidate Profile Saved");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-card">
      <h1>Candidate Profile</h1>
      <p>Please fill out the form below to fill your Profile</p>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Candidate ID</label>
          <input name="candidateId" onChange={handleChange} />
        </div>

        <div className="row">
          <div className="field">
            <label>First Name</label>
            <input name="fname" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Last Name</label>
            <input name="lname" onChange={handleChange} />
          </div>
        </div>

        <div className="field">
          <label>Gender</label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />{" "}
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />{" "}
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
            />{" "}
            Other
          </label>
        </div>

        <div className="row">
          <div className="field">
            <label>Mother Name</label>
            <input name="mname" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Father Name</label>
            <input name="faname" onChange={handleChange} />
          </div>
        </div>

        <div className="field">
          <label>Email</label>
          <input name="email" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Phone</label>
          <input name="phone" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Age</label>
          <input name="age" onChange={handleChange} />
        </div>

        <div className="field">
          <label>DOB</label>
          <input type="date" name="dob" onChange={handleChange} />
        </div>

        <div className="field">
          <label>City</label>
          <input name="city" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Address</label>
          <input name="address" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Pincode</label>
          <input name="pincode" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Qualification</label>
          <input name="qualification" onChange={handleChange} />
        </div>

        <div className="field">
          <label>University</label>
          <input name="university" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Percentage</label>
          <input name="percentage" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Experience</label>
          <input name="experience" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Skills</label>
          <input name="skills" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Certificates</label>
          <input name="certificates" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Upload Resume</label>
          <input name="uploadRes" type="file" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Any Other Documents</label>
          <input name="anyDoc" type="file" onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default CandidateProfile;
