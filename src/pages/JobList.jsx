import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
        <h1>Explore Job Opportunities</h1>
        <p>Find suitable roles based on your skills and qualifications</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
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
                <strong>Qualification:</strong> {job.qualification}
              </p>

              <p>
                <strong>Skills:</strong> {job.skills}
              </p>

              <Link className="linkBtn" to="/applyForm">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default JobList;
