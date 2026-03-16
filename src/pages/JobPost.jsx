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
    company: "",
    title: "",
    description: "",
    requirement: "",
    qualification: "",
    skills: "",
    salary: "",
    jobType: "",
    lastDate: "",
    workMode: "",
    country: "",
    state: "",
    city: "",
    link: "",
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

      setFormData({
        company: "",
        title: "",
        description: "",
        requirement: "",
        qualification: "",
        skills: "",
        salary: "",
        jobType: "",
        lastDate: "",
        workMode: "",
        country: "",
        state: "",
        city: "",
        link: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-card">
      <h1>Job Post</h1>
      <p>Please fill out the form below to fill your Job Post</p>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <input
            name="requirement"
            placeholder="Requirement"
            value={formData.requirement}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <input
            name="qualification"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <input
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Job Type</label>

          <label>
            <input
              type="radio"
              name="jobType"
              value="FullTime"
              checked={formData.jobType === "FullTime"}
              onChange={handleChange}
            />
            Full Time
          </label>

          <label>
            <input
              type="radio"
              name="jobType"
              value="PartTime"
              checked={formData.jobType === "PartTime"}
              onChange={handleChange}
            />
            Part Time
          </label>

          <label>
            <input
              type="radio"
              name="jobType"
              value="Internship"
              checked={formData.jobType === "Internship"}
              onChange={handleChange}
            />
            Internship
          </label>
        </div>

        <div className="field">
          <input
            type="date"
            name="lastDate"
            value={formData.lastDate}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Work Mode</label>

          <label>
            <input
              type="radio"
              name="workMode"
              value="Onsite"
              checked={formData.workMode === "Onsite"}
              onChange={handleChange}
            />
            Onsite
          </label>

          <label>
            <input
              type="radio"
              name="workMode"
              value="Remote"
              checked={formData.workMode === "Remote"}
              onChange={handleChange}
            />
            Remote
          </label>

          <label>
            <input
              type="radio"
              name="workMode"
              value="Hybrid"
              checked={formData.workMode === "Hybrid"}
              onChange={handleChange}
            />
            Hybrid
          </label>
        </div>

        <div className="field">
          <input
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <input
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <input
            name="link"
            placeholder="Company Page Link"
            value={formData.link}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobPost;
