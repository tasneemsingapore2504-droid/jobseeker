// const ApplyForm = () => {
//   return (
//     <div class="form-card">
//       <h1>Job Application Form</h1>
//       <p>Please fill out the form below to submit your job application!</p>

//       <form>
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

//         <div class="row">
//           <div class="field">
//             <label>Company Name</label>
//             <input type="text" required />
//           </div>
//           <div class="field">
//             <label>Applied Position</label>
//             <input type="text" required />
//           </div>
//         </div>

//         <div class="field">
//           <label>Add DOB</label>
//           <input type="date" required />
//         </div>

//         <div class="field">
//           <label>Add Work Status</label>
//           <input type="text" required />
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
//           <label>Experience</label>
//           <input type="text" />
//         </div>

//         <div class="field">
//           <label>Upload Resume</label>
//           <input type="file" />
//         </div>

//         <div class="field">
//           <label>Any Other Documents</label>
//           <input type="file" />
//         </div>

//         <button type="submit" class="submit-btn">
//           Apply
//         </button>
//       </form>
//     </div>
//   );
// };
// export default ApplyForm;

import { useState } from "react";
import axios from "axios";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mname: "",
    faname: "",
    email: "",
    pnum: "",
    cname: "",
    apPos: "",
    dob: "",
    addws: "",
    addcc: "",
    address: "",
    experience: "",
    uploadRes: "",
    anyDoc: "",
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
      await axios.post("http://localhost:5000/api/ApplyForm", formData);

      alert("Application Submitted Successfully");

      setFormData({
        fname: "",
        lname: "",
        mname: "",
        faname: "",
        email: "",
        pnum: "",
        cname: "",
        apPos: "",
        dob: "",
        addws: "",
        addcc: "",
        address: "",
        experience: "",
        uploadRes: "",
        anyDoc: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-card">
      <h1>Job Application Form</h1>
      <p>Please fill out the form below to submit your job application!</p>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="field">
            <label>First Name</label>
            <input
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Last Name</label>
            <input
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label>Mother Name</label>
            <input
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Father Name</label>
            <input
              name="faname"
              value={formData.faname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Phone Number</label>
          <input
            name="pnum"
            value={formData.pnum}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row">
          <div className="field">
            <label>Company Name</label>
            <input
              name="cname"
              value={formData.cname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Applied Position</label>
            <input
              name="apPos"
              value={formData.apPos}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field">
          <label>Add DOB</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Add Work Status</label>
          <input
            name="addws"
            value={formData.addws}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Add Current City</label>
          <input
            name="addcc"
            value={formData.addcc}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Experience</label>
          <input
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
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
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
