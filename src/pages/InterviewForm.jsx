// const InterviewForm = () => {
//   return (
//     <div class="form-card">
//       <h1>Interview form</h1>
//       <p>Please fill out the form below to fill the Interview Details</p>

//       <form>
//         <div class="field">
//           <label>Employer ID</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Candidate ID</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Company Name</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Interview Date</label>
//           <input type="date" required />
//         </div>

//         <div class="field">
//           <label>Interview Time</label>
//           <input type="datetime" required />
//         </div>

//         <div class="field">
//           <label>Interview Place</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Candidate Name</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Applied Position</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Selection</label>
//           <div class="options">
//             <label>
//               <input type="radio" name="Selection" /> Selected
//             </label>
//             <label>
//               <input type="radio" name="Selection" /> Rejected
//             </label>
//             <label>
//               <input type="radio" name="Selection" /> Pending
//             </label>
//           </div>
//         </div>

//         <button type="submit" class="submit-btn">
//           Apply
//         </button>
//       </form>
//     </div>
//   );
// };
// export default InterviewForm;

import { useState } from "react";
import axios from "axios";

const InterviewForm = () => {
  const [formData, setFormData] = useState({
    employerId: "",
    candidateId: "",
    cname: "",
    intDate: "",
    intTime: "",
    intPlace: "",
    candidateName: "",
    apPos: "",
    selection: "",
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
      await axios.post("http://localhost:5000/api/InterviewForm", formData);

      alert("Interview Saved");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-card">
      <h1>Interview Form</h1>
      <p>Please fill out the form below to fill the Interview Details</p>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Employer ID</label>
          <input name="employerId" onChange={handleChange} required />
        </div>

        <div className="field">
          <label>Candidate ID</label>
          <input name="candidateId" onChange={handleChange} required />
        </div>

        <div className="field">
          <label>Company Name</label>
          <input name="cname" onChange={handleChange} required />
        </div>

        <div className="field">
          <label>Interview Date</label>
          <input type="date" name="intDate" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Interview Time</label>
          <input type="time" name="intTime" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Interview Place</label>
          <input name="intPlace" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Candidate Name</label>
          <input name="candidateName" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Applied Position</label>
          <input name="apPos" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Selection</label>

          <label>
            <input
              type="radio"
              name="selection"
              value="Selected"
              onChange={handleChange}
            />{" "}
            Selected
          </label>

          <label>
            <input
              type="radio"
              name="selection"
              value="Rejected"
              onChange={handleChange}
            />{" "}
            Rejected
          </label>

          <label>
            <input
              type="radio"
              name="selection"
              value="Pending"
              onChange={handleChange}
            />{" "}
            Pending
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Apply
        </button>
      </form>
    </div>
  );
};

export default InterviewForm;
