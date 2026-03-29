// const CompanyProfile = () => {
//   return (
//     <div class="form-card">
//       <h1>Company Profile</h1>
//       <p>Please fill out the form below to fill your Company Profile</p>

//       <form>
//         <div class="field">
//           <label>Employer ID</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Company Name</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Website</label>
//           <input type="text" required />
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
//           <label>Address</label>
//           <input type="text" required />
//         </div>

//         <div class="field">
//           <label>Comapany Size</label>
//           <div class="options">
//             <label>
//               <input type="radio" name="size" /> small
//             </label>
//             <label>
//               <input type="radio" name="size" /> Medium
//             </label>
//             <label>
//               <input type="radio" name="size" /> Large
//             </label>
//           </div>
//           <input type="text" />
//         </div>

//         <div class="field">
//           <label>Branch Details</label>
//           <input type="text" />
//         </div>

//         <br />

//         <div class="field">
//           <label>Status</label>
//           <input type="text" />
//         </div>

//         <button type="submit" class="submit-btn">
//           Apply
//         </button>
//       </form>
//     </div>
//   );
// };
// export default CompanyProfile;

import { useState } from "react";
import axios from "axios";

const CompanyProfile = () => {
  const [formData, setFormData] = useState({
    cname: "",
    website: "",
    cemail: "",
    cpnum: "",
    address: "",
    csize: "",
    branch: "",
    status: "",
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
      const data = await axios.post(
        "http://localhost:5000/api/companyprofile",
        formData,
      );
      localStorage.setItem("companyProfile", JSON.stringify(data));
      alert("Company Profile Saved");

      // Reset form
      setFormData({
        cname: "",
        website: "",
        cemail: "",
        cpnum: "",
        address: "",
        csize: "",
        branch: "",
        status: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-card">
      <h1>Company Profile</h1>
      <p>Please fill out the form below to fill your Company Profile</p>

      <form onSubmit={handleSubmit}>
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
          <label>Website</label>
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            name="cemail"
            value={formData.cemail}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Phone Number</label>
          <input name="cpnum" value={formData.cpnum} onChange={handleChange} />
        </div>

        <div className="field">
          <label>Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Company Size</label>

          <label>
            <input
              type="radio"
              name="csize"
              value="Small"
              checked={formData.csize === "Small"}
              onChange={handleChange}
            />{" "}
            Small
          </label>

          <label>
            <input
              type="radio"
              name="csize"
              value="Medium"
              checked={formData.csize === "Medium"}
              onChange={handleChange}
            />{" "}
            Medium
          </label>

          <label>
            <input
              type="radio"
              name="csize"
              value="Large"
              checked={formData.csize === "Large"}
              onChange={handleChange}
            />{" "}
            Large
          </label>
        </div>

        <div className="field">
          <label>Branch Details</label>
          <input
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Status</label>
          <input
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default CompanyProfile;
