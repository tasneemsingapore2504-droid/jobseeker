// const JobPost = () => {
//   return (
//     <div class="form-card">
//       <h1>JobPost</h1>
//       <p>Please fill out the form below to fill your Job Post</p>

//       <form>
//         <div class="field">
//           <label>Job ID</label>
//           <input type="text" required />
//         </div>
//         <div class="field">
//           <label>Employer ID</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Candidate ID</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Title</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Description</label>
//           <textarea
//             id="content"
//             name="content"
//             rows="20"
//             cols="80"
//             maxlength="50000"
//             spellcheck="true"
//             placeholder="Write your company description here..."
//             required
//           ></textarea>
//         </div>

//         <div class="field">
//           <label>Requirement</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Salary</label>
//           <input type="number" required />
//         </div>

//         <div class="field">
//           <label>Job Type</label>
//           <div class="options">
//             <label>
//               <input type="radio" name="type" /> Full time
//             </label>
//             <label>
//               <input type="radio" name="type" /> Part Time
//             </label>
//             <label>
//               <input type="radio" name="type" /> Internship
//             </label>
//             <label>
//               <input type="radio" name="type" /> Remote
//             </label>
//           </div>
//         </div>
//         <br />

//         <div class="field">
//           <label>Work mode</label>
//           <div class="options">
//             <label>
//               <input type="radio" name="mode" /> Onsite
//             </label>
//             <label>
//               <input type="radio" name="mode" /> Remote
//             </label>
//             <label>
//               <input type="radio" name="mode" /> Hybrid
//             </label>
//           </div>
//         </div>
//         <br />

//         <div class="field">
//           <label>Education</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Country</label>
//           <input type="number" required />
//         </div>

//         <div class="field">
//           <label>State</label>
//           <input type="text" required />
//         </div>
//         <div class="field">
//           <label>City</label>
//           <input type="text" required />
//         </div>

//         <button type="submit" class="submit-btn">
//           Apply
//         </button>
//       </form>
//     </div>
//   );
// };
// export default JobPost;

import { useState } from "react";
import axios from "axios";

const JobPost = () => {
  const [formData, setFormData] = useState({
    jobId: "",
    employerId: "",
    candidateId: "",
    title: "",
    description: "",
    requirement: "",
    salary: "",
    jobType: "",
    workMode: "",
    education: "",
    country: "",
    state: "",
    city: "",
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
      await axios.post("http://localhost:5000/api/JobPost", formData);

      alert("Job Posted Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-card">
      <h1>Job Post</h1>
      <p>Please fill out the form below to fill your Job Post</p>

      <form onSubmit={handleSubmit}>
        <input
          name="jobId"
          placeholder="Job ID"
          onChange={handleChange}
          required
        />

        <input
          name="employerId"
          placeholder="Employer ID"
          onChange={handleChange}
          required
        />

        <input
          name="candidateId"
          placeholder="Candidate ID"
          onChange={handleChange}
          required
        />

        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <input
          name="requirement"
          placeholder="Requirement"
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
        />

        <label>Job Type</label>

        <label>
          <input
            type="radio"
            name="jobType"
            value="FullTime"
            onChange={handleChange}
          />{" "}
          Full time
        </label>

        <label>
          <input
            type="radio"
            name="jobType"
            value="PartTime"
            onChange={handleChange}
          />{" "}
          Part time
        </label>

        <label>
          <input
            type="radio"
            name="jobType"
            value="Internship"
            onChange={handleChange}
          />{" "}
          Internship
        </label>

        <label>Work Mode</label>

        <label>
          <input
            type="radio"
            name="workMode"
            value="Onsite"
            onChange={handleChange}
          />{" "}
          Onsite
        </label>

        <label>
          <input
            type="radio"
            name="workMode"
            value="Remote"
            onChange={handleChange}
          />{" "}
          Remote
        </label>

        <label>
          <input
            type="radio"
            name="workMode"
            value="Hybrid"
            onChange={handleChange}
          />{" "}
          Hybrid
        </label>

        <input
          name="education"
          placeholder="Education"
          onChange={handleChange}
        />

        <input name="country" placeholder="Country" onChange={handleChange} />

        <input name="state" placeholder="State" onChange={handleChange} />

        <input name="city" placeholder="City" onChange={handleChange} />

        <button type="submit" className="submit-btn">
          Apply
        </button>
      </form>
    </div>
  );
};

export default JobPost;
