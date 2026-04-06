import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ApplyForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedJob = location.state?.job;
  const currentUser = JSON.parse(localStorage.getItem("user") || "null");

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mname: "",
    faname: "",
    email: currentUser?.email || "",
    pnum: "",
    cname: selectedJob?.company || "",
    apPos: selectedJob?.title || "",
    dob: "",
    addws: "",
    addcc: "",
    address: "",
    experience: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [documentFile, setDocumentFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (selectedJob) {
      setFormData((current) => ({
        ...current,
        cname: selectedJob.company || "",
        apPos: selectedJob.title || "",
      }));
    }
  }, [selectedJob]);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      if (name === "Resume") {
        setResumeFile(files?.[0] || null);
      } else if (name === "AnyOtherDocument") {
        setDocumentFile(files?.[0] || null);
      }
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedJob?._jid || !selectedJob?.companyId) {
      alert("Please apply from an approved job listing.");
      navigate("/jobList");
      return;
    }

    if (!currentUser?.id) {
      alert("Please login first to apply for a job.");
      navigate("/login");
      return;
    }

    setSubmitting(true);

    try {
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      payload.append("userId", currentUser.id);
      payload.append("jobId", selectedJob._jid);
      payload.append("companyId", selectedJob.companyId);

      if (resumeFile) {
        payload.append("Resume", resumeFile);
      }

      if (documentFile) {
        payload.append("AnyOtherDocument", documentFile);
      }

      await axios.post("http://localhost:5000/api/applications", payload);

      alert("Application Submitted Successfully");

      setFormData({
        fname: "",
        lname: "",
        mname: "",
        faname: "",
        email: currentUser?.email || "",
        pnum: "",
        cname: selectedJob?.company || "",
        apPos: selectedJob?.title || "",
        dob: "",
        addws: "",
        addcc: "",
        address: "",
        experience: "",
      });
      setResumeFile(null);
      setDocumentFile(null);
      navigate("/candidate/interviews");
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || "Application submission failed");
    } finally {
      setSubmitting(false);
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
            <input name="cname" value={formData.cname} readOnly />
          </div>

          <div className="field">
            <label>Applied Position</label>
            <input name="apPos" value={formData.apPos} readOnly />
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
          <input name="Resume" type="file" onChange={handleChange} />
        </div>

        <div className="field">
          <label>Any Other Documents</label>
          <input name="AnyOtherDocument" type="file" onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? "Submitting..." : "Apply"}
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
