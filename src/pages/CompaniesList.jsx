import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import axios from "axios";

function CompaniesList() {
  const [jobs, setJobs] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs");
      setJobs(res.data);
    } catch (error) {
      console.log("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.city?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <header className="header">
        <h1>Explore Companies</h1>
        <p>Find suitable roles based on your skills and qualifications</p>
      </header>

      <section className="jobs-container">
        <div className="job-grid">
          {filteredJobs.map((job) => (
            <div className="job-card" key={job._jid || job._id}>
              <h3>{job.title}</h3>
              <h6>{job.company}</h6>

              <p>
                <strong>City:</strong> {job.city}
              </p>

              <p>
                <strong>Job Description:</strong> {job.description}
              </p>

              <a
                className="linkBtn"
                href={job.link}
                target="_blank"
                rel="noreferrer"
              >
                View Company Website
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CompaniesList;
