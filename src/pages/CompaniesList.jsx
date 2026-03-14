import { useEffect, useState } from "react";
import axios from "axios";

function CompaniesList() {
  const [company, setCompany] = useState([]);
  const [users, setUsers] = useState([]);

  const jobData = [
    {
      id: 1,
      title: "Junior Software Engineer-Full Stack Developer",
      company: "Airbus Group India Pvt Ltd",
      city: "Bengaluru",
      description:
        "This role is ideal for recent graduates or entry-level candidates with a passion for software development and a desire to grow their skills....",
      link: "https://ag.wd3.myworkdayjobs.com/en-US/Airbus/job/Bangalore-Area/Software-Engineer--Python--Angular-Full-stack-_JR10366937",
    },
    {
      id: 2,
      title: "API Developer",
      company: "Airbus Group India Pvt Ltd",
      city: "Bengaluru",
      description:
        "Are you passionate about IT, experienced in software development techniques and convinced by the business added value of digitalization?...",
      link: "https://ag.wd3.myworkdayjobs.com/en-US/Airbus/job/Bangalore-Area/Developer---Mulesoft-API_JR10390610-1",
    },
    {
      id: 3,
      title: "Software Developer",
      company: "Quess Corp Limited",
      city: "Coimbatore",
      description:
        "The Software Developer role is based in Coimbatore and involves working on software development projects....",
      link: "https://fa-eumz-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/10183",
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Oracle Financial Services Software Ltd",
      city: "Mumbai",
      description:
        "As a consulting business, customer relationships are the heart of growing our business. We are ambassadors at the customer...",
      link: "https://careers.oracle.com/en/sites/jobsearch/job/304501?location=India&locationId=300000000106947",
    },
    {
      id: 5,
      title: "Entry Level Python and Java",
      company: "KPMG India Services LLP",
      city: "Bengaluru",
      description:
        "KPMG entities in India are professional services firms affiliated with KPMG International Limited....",
      link: "https://ejgk.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/INTG10038681",
    },
    {
      id: 6,
      title: "SQL Developer Intern",
      company: "CRISIL Ltd",
      city: "Mumbai",
      description:
        "Need to hire an intern with basic SQL knowledge. Having exposure to data modelling and basic SQL scripting....",
      link: "https://career.crisil.com/crisil/jobview/sql-developer-mumbai-maharashtra-india-2026020119550191",
    },
    {
      id: 7,
      title: "Test Engineer",
      company: "Quality Kiosk Software LLP",
      city: "Kochi",
      description:
        "6 months to 2 years of testing experience for the BFSI/Telecom domain with strong communication skills....",
      link: "https://careers-qualitykiosk.peoplestrong.com/job/detail/R-0040031-01",
    },
    {
      id: 8,
      title: "Application Automation Engineer",
      company: "Accenture India Private Limited",
      city: "Bengaluru",
      description:
        "Accenture is a global professional services company with capabilities in digital, cloud, and security....",
      link: "https://www.accenture.com/in-en/careers/jobdetails?id=AIOC-S01627413_en",
    },
    {
      id: 9,
      title: "Business Analyst",
      company: "Mphasis Limited",
      city: "Pune",
      description:
        "Digital Risk's mission relies on blending human experience with advanced technology to serve clients....",
      link: "https://mphasis.ripplehire.com/candidate/?token=ty4DfyWddnOrtpclQeia",
    },
    {
      id: 10,
      title: "Graphic Designer",
      company: "Larsen & Toubro Ltd",
      city: "Mumbai",
      description:
        "Conceptualize and design visual content for print and digital media including brochures and social media posts....",
      link: "https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_GD_1546173",
    },
    {
      id: 11,
      title: "Digital Business Dealing",
      company: "Kotak Securities Limited",
      city: "Kolkata",
      description:
        "The Digital Business Dealing role involves managing digital business operations and sales activities....",
      link: "https://hcbt.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/37819",
    },
    {
      id: 12,
      title: "System Engineer",
      company: "GE Healthcare",
      city: "Bengaluru",
      description:
        "Systems engineering is a cross-functional discipline focused on processes and system lifecycle....",
      link: "https://careers.gehealthcare.com/global/en/job/R4036386",
    },
    {
      id: 13,
      title: "Database Administrator",
      company: "NTT India Ltd",
      city: "Mumbai",
      description:
        "Managing and maintaining database systems while ensuring performance, security, and availability.",
      link: "https://nttltd.ripplehire.com/candidate/?token=HxDsHL3vMLvYaPbKzyBL",
    },
    {
      id: 14,
      title: "Customer Delivery Specialist",
      company: "Tata Croma",
      city: "Pune",
      description:
        "Responsible for customer delivery operations and maintaining service quality for retail products.",
      link: "https://fa-eryk-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/25223",
    },
  ];

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/JobPost");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <header className="header">
        <h1>Explore Companies</h1>
        <p>Find suitable roles based on your skills and qualifications</p>
      </header>

      <section className="jobs-container">
        <div className="job-grid">
          {jobData.map((job) => (
            <div className="job-card" key={job.id}>
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
