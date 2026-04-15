import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function Interviews() {
  const [applications, setApplications] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appsRes, interviewsRes] = await Promise.all([
          axios.get(
            "http://localhost:5000/api/applications/candidate/my",
            authHeaders,
          ),
          axios.get(
            "http://localhost:5000/api/interview/candidate",
            authHeaders,
          ),
        ]);

        setApplications(appsRes.data);
        setInterviews(interviewsRes.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const interviewMap = useMemo(
    () =>
      interviews.reduce((acc, interview) => {
        acc[String(interview.applicationId)] = interview;
        return acc;
      }, {}),
    [interviews],
  );

  if (loading) {
    return <div className="container mt-4">Loading interview updates...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Interview Updates</h2>
      <p>View your application status, interview details, and final result.</p>

      {applications.length === 0 ? (
        <p className="mt-3">You have not submitted any applications yet.</p>
      ) : (
        applications.map((application) => {
          const interview = interviewMap[String(application._id)];
          const applicationStatus = application.status || "pending";
          const interviewResult = interview?.interviewResult || "pending";

          return (
            <div key={application._id} className="card p-3 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="mb-1">{application.apPos}</h5>
                  <p className="mb-0 text-muted">{application.cname}</p>
                </div>

                <span
                  className={`badge ${
                    applicationStatus === "selected"
                      ? "bg-success"
                      : applicationStatus === "rejected"
                        ? "bg-danger"
                        : "bg-warning"
                  }`}
                >
                  {applicationStatus}
                </span>
              </div>

              {applicationStatus === "rejected" && (
                <p className="mb-0">
                  This company has rejected your application.
                </p>
              )}

              {applicationStatus === "pending" && (
                <p className="mb-0">Your application is still under review.</p>
              )}

              {applicationStatus === "selected" && interview && (
                <div className="table-responsive">
                  <table className="table table-bordered align-middle mb-0">
                    <tbody>
                      <tr>
                        <th>Company Name</th>
                        <td>{interview.cname}</td>
                      </tr>
                      <tr>
                        <th>Candidate Name</th>
                        <td>{interview.candidateName}</td>
                      </tr>
                      <tr>
                        <th>Applied Position</th>
                        <td>{interview.apPos}</td>
                      </tr>
                      <tr>
                        <th>Interview Date</th>
                        <td>{interview.intDate}</td>
                      </tr>
                      <tr>
                        <th>Interview Time</th>
                        <td>{interview.intTime}</td>
                      </tr>
                      <tr>
                        <th>Interview Place</th>
                        <td>{interview.intPlace}</td>
                      </tr>
                      <tr>
                        <th>Interview Result</th>
                        <td>{interviewResult}</td>
                      </tr>
                      <tr>
                        <th>Remarks</th>
                        <td>{interview.remarks || "No remarks added yet"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {applicationStatus === "selected" && !interview && (
                <p className="mb-0">
                  You have been selected. Interview details will appear here
                  once the company submits them.
                </p>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Interviews;
