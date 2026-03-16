import { useState } from "react";
import axios from "axios";

const CandidateProfile = () => {
  const [formData, setFormData] = useState({
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
    const { name, value, files } = e.target;

    if (files) {
      setFormData({
        ...formData,
        [name]: files[0].name,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/candidateprofile", formData);

      alert("Candidate Profile Saved");

      setFormData({
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-card">
      <h1>Candidate Profile</h1>
      <p>Please fill out the form below to fill your Profile</p>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="field">
            <label>First Name</label>
            <input
              name="fname"
              value={formData.fname}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Last Name</label>
            <input
              name="lname"
              value={formData.lname}
              onChange={handleChange}
            />
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
            <input
              name="mname"
              value={formData.mname}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Father Name</label>
            <input
              name="faname"
              value={formData.faname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="field">
          <label>Phone</label>
          <input name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="field">
          <label>Age</label>
          <input name="age" value={formData.age} onChange={handleChange} />
        </div>

        <div className="field">
          <label>DOB</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>City</label>
          <input name="city" value={formData.city} onChange={handleChange} />
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
          <label>Pincode</label>
          <input
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Qualification</label>
          <input
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>University</label>
          <input
            name="university"
            value={formData.university}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Percentage</label>
          <input
            name="percentage"
            value={formData.percentage}
            onChange={handleChange}
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
          <label>Skills</label>
          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Certificates</label>
          <input
            name="certificates"
            value={formData.certificates}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Upload Resume</label>
          <input type="file" name="resume" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Any Other Documents</label>
          <input type="file" name="documents" onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default CandidateProfile;
