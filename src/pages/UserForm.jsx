import { useState } from "react";
import axios from "axios";

const UserForm = ({ fetchUsers }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/users", form);
    fetchUsers();
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input name="name" placeholder="Name" onChange={handleChange} />
    //   <input name="email" placeholder="Email" onChange={handleChange} />
    //   <input name="age" placeholder="Age" onChange={handleChange} />
    //   <button type="submit">Add User</button>
    // </form>
    <div class="form-card">
      <h1>Job Application Form</h1>
      <p>Please fill out the form below to submit your job application!</p>

      <form>
        <div class="row">
          <div class="field">
            <label>First Name</label>
            <input name="fname" type="text" required onChange={handleChange} />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input name="lname" type="text" required onChange={handleChange} />
          </div>
        </div>

        <div class="row">
          <div class="field">
            <label>Mother Name</label>
            <input name="mname" type="text" required onChange={handleChange} />
          </div>
          <div class="field">
            <label>Father Name</label>
            <input name="faname" type="text" required onChange={handleChange} />
          </div>
        </div>

        <div class="field">
          <label>Email</label>
          <input name="email" type="email" required onChange={handleChange} />
        </div>

        <div class="field">
          <label>Phone Number</label>
          <input name="pnum" type="tel" required onChange={handleChange} />
        </div>

        <div class="row">
          <div class="field">
            <label>Company Name</label>
            <input name="cname" type="text" required onChange={handleChange} />
          </div>
          <div class="field">
            <label>Applied Position</label>
            <input type="text" required onChange={handleChange} />
          </div>
        </div>

        <div class="field">
          <label>Add DOB</label>
          <input type="date" required onChange={handleChange} />
        </div>

        <div class="field">
          <label>Add Work Status</label>
          <input type="text" required onChange={handleChange} />
        </div>
        <div class="field">
          <label>Add Current City</label>
          <input type="text" required onChange={handleChange} />
        </div>

        <div class="field">
          <label>Address</label>
          <input type="text" required onChange={handleChange} />
        </div>

        <div class="field">
          <label>Experience</label>
          <input type="text" onChange={handleChange} />
        </div>

        <div class="field">
          <label>Upload Resume</label>
          <input type="file" onChange={handleChange} />
        </div>

        <div class="field">
          <label>Any Other Documents</label>
          <input type="file" onChange={handleChange} />
        </div>

        <button type="submit" class="submit-btn" onClick={handleSubmit}>
          Add user
        </button>
      </form>
    </div>
  );
};
export default UserForm;
