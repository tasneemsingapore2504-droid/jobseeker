import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const getDaysRemaining = (lastDate) => {
  if (!lastDate) return null;

  const endDate = new Date(`${lastDate}T00:00:00`);
  if (Number.isNaN(endDate.getTime())) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
};

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
              {(() => {
                const daysRemaining = getDaysRemaining(job.lastDate);

                if (
                  daysRemaining === null ||
                  daysRemaining <= 0 ||
                  daysRemaining > 2
                ) {
                  return null;
                }

                return (
                  <p className="text-danger fw-bold mb-2">
                    Reminder: only {daysRemaining}{" "}
                    {daysRemaining === 1 ? "day" : "days"} left to apply
                  </p>
                );
              })()}

              <h3>{job.title}</h3>
              <h6>{job.company}</h6>

              <p>
                <strong>City:</strong> {job.city}
              </p>

              <p>
                <strong>Last Date:</strong> {job.lastDate || "N/A"}
              </p>

              <p>
                <strong>Qualification:</strong> {job.qualification}
              </p>

              <p>
                <strong>Skills:</strong> {job.skills}
              </p>

              <Link className="linkBtn" to="/applyForm" state={{ job }}>
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
