import React, { useEffect, useState } from "react";
import axios from "axios";

const emptyForm = {
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
};

const normalizeProfile = (profile = {}) => ({
  ...emptyForm,
  ...profile,
  dob: profile?.dob ? String(profile.dob).slice(0, 10) : "",
  phone: profile?.phone ?? "",
  age: profile?.age ?? "",
  pincode: profile?.pincode ?? "",
  percentage: profile?.percentage ?? "",
});

const CandidateProfile = () => {
  const [form, setForm] = useState(emptyForm);
  const [profileExists, setProfileExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "null");
  const token = localStorage.getItem("token");

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchProfile = async () => {
    if (!token || !user?.id) {
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(
        "http://localhost:5000/api/candidateprofile",
        authHeaders,
      );

      if (res.data) {
        localStorage.setItem("candidateProfile", JSON.stringify(res.data));
        setForm(normalizeProfile(res.data));
        setProfileExists(true);
      } else {
        localStorage.removeItem("candidateProfile");
        setForm({
          ...emptyForm,
          email: user.email || "",
        });
        setProfileExists(false);
      }
    } catch (err) {
      if (err?.response?.status === 404) {
        localStorage.removeItem("candidateProfile");
        setForm({
          ...emptyForm,
          email: user.email || "",
        });
        setProfileExists(false);
      } else {
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setForm((current) => ({
      ...current,
      email: current.email || user?.email || "",
    }));
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setForm((current) => ({
      ...current,
      [name]: type === "file" ? files?.[0]?.name || "" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token || !user?.id) {
      alert("Please login again to manage your profile");
      return;
    }

    setSaving(true);

    try {
      const payload = {
        ...form,
        email: form.email || user.email || "",
      };

      const res = profileExists
        ? await axios.put(
            `http://localhost:5000/api/candidateprofile/${user.id}`,
            payload,
            authHeaders,
          )
        : await axios.post(
            "http://localhost:5000/api/candidateprofile",
            payload,
            authHeaders,
          );

      localStorage.setItem("candidateProfile", JSON.stringify(res.data));
      setForm(normalizeProfile(res.data));
      setProfileExists(true);
      alert(profileExists ? "Profile updated" : "Profile created");
    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.message || "Unable to save profile");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!token || !user?.id) {
      alert("Please login again to manage your profile");
      return;
    }

    try {
      await axios.delete(
        `http://localhost:5000/api/candidateprofile/${user.id}`,
        authHeaders,
      );

      localStorage.removeItem("candidateProfile");
      setForm({
        ...emptyForm,
        email: user.email || "",
      });
      setProfileExists(false);
      alert("Profile deleted");
    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.message || "Unable to delete profile");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Candidate Profile</h2>

      {loading && <p>Loading profile...</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="fname"
          value={form.fname}
          onChange={handleChange}
          placeholder="First Name"
          className="form-control mb-2"
        />

        <input
          name="lname"
          value={form.lname}
          onChange={handleChange}
          placeholder="Last Name"
          className="form-control mb-2"
        />

        <input
          name="mname"
          value={form.mname}
          onChange={handleChange}
          placeholder="Mother Name"
          className="form-control mb-2"
        />

        <input
          name="faname"
          value={form.faname}
          onChange={handleChange}
          placeholder="Father Name"
          className="form-control mb-2"
        />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="form-control mb-2"
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-control mb-2"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="form-control mb-2"
        />

        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="form-control mb-2"
        />

        <input
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="City"
          className="form-control mb-2"
        />

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          className="form-control mb-2"
        />

        <input
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          className="form-control mb-2"
        />

        <input
          name="qualification"
          value={form.qualification}
          onChange={handleChange}
          placeholder="Qualification"
          className="form-control mb-2"
        />

        <input
          name="university"
          value={form.university}
          onChange={handleChange}
          placeholder="University"
          className="form-control mb-2"
        />

        <input
          name="percentage"
          value={form.percentage}
          onChange={handleChange}
          placeholder="Percentage"
          className="form-control mb-2"
        />

        <input
          name="experience"
          value={form.experience}
          onChange={handleChange}
          placeholder="Experience"
          className="form-control mb-2"
        />

        <input
          name="skills"
          value={form.skills}
          onChange={handleChange}
          placeholder="Skills"
          className="form-control mb-2"
        />

        <input
          name="certificates"
          value={form.certificates}
          onChange={handleChange}
          placeholder="Certificates"
          className="form-control mb-2"
        />

        <input
          name="resume"
          type="file"
          onChange={handleChange}
          className="form-control mb-2"
        />

        <input
          name="documents"
          type="file"
          onChange={handleChange}
          className="form-control mb-2"
        />

        <button type="submit" className="btn btn-primary" disabled={saving}>
          {saving
            ? "Saving..."
            : `${profileExists ? "Update" : "Create"} Profile`}
        </button>
      </form>

      {profileExists && (
        <div className="mt-4">
          <h4>Candidate Profile Details</h4>

          <table className="table table-bordered table-striped table-hover">
            <tbody>
              <tr>
                <th>First Name</th>
                <td>{form.fname}</td>
              </tr>
              <tr>
                <th>Last Name</th>
                <td>{form.lname}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{form.gender}</td>
              </tr>
              <tr>
                <th>Mother Name</th>
                <td>{form.mname}</td>
              </tr>
              <tr>
                <th>Father Name</th>
                <td>{form.faname}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{form.email}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>{form.phone}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{form.age}</td>
              </tr>
              <tr>
                <th>Date of Birth</th>
                <td>{form.dob}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{form.city}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{form.address}</td>
              </tr>
              <tr>
                <th>Pincode</th>
                <td>{form.pincode}</td>
              </tr>
              <tr>
                <th>Qualification</th>
                <td>{form.qualification}</td>
              </tr>
              <tr>
                <th>University</th>
                <td>{form.university}</td>
              </tr>
              <tr>
                <th>Percentage</th>
                <td>{form.percentage}</td>
              </tr>
              <tr>
                <th>Experience</th>
                <td>{form.experience}</td>
              </tr>
              <tr>
                <th>Skills</th>
                <td>{form.skills}</td>
              </tr>
              <tr>
                <th>Certificates</th>
                <td>{form.certificates}</td>
              </tr>
              <tr>
                <th>Resume</th>
                <td>{form.resume}</td>
              </tr>
              <tr>
                <th>Documents</th>
                <td>{form.documents}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {profileExists && (
        <button className="btn btn-danger mt-3" onClick={handleDelete}>
          Delete Profile
        </button>
      )}
    </div>
  );
};

export default CandidateProfile;
