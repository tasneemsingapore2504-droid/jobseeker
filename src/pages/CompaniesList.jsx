import { useEffect, useState } from "react";

function CompaniesList() {
  const [company, setCompany] = useState([]);
  const job = [
    {
      jobname: "Junior Software Engineer-Full Stack Developer",
      compname: "Airbus Group India Pvt Ltd",
      city: "Bengaluru",
      jobdesc:
        "This role is ideal for recent graduates or entry-level candidates with a passion for software development and a desire to grow their skills....",
      url: "https://ag.wd3.myworkdayjobs.com/en-US/Airbus/job/Bangalore-Area/Software-Engineer--Python--Angular-Full-stack-_JR10366937",
    },
    {
      jobname: "Junior Software Engineer-Full Stack Developer",
      compname: "Airbus Group India Pvt Ltd",
      city: "Bengaluru",
      jobdesc:
        "This role is ideal for recent graduates or entry-level candidates with a passion for software development and a desire to grow their skills....",
      url: "https://ag.wd3.myworkdayjobs.com/en-US/Airbus/job/Bangalore-Area/Software-Engineer--Python--Angular-Full-stack-_JR10366937",
    },
    {
      jobname: "Junior Software Engineer-Full Stack Developer",
      compname: "Airbus Group India Pvt Ltd",
      city: "Bengaluru",
      jobdesc:
        "This role is ideal for recent graduates or entry-level candidates with a passion for software development and a desire to grow their skills....",
      url: "https://ag.wd3.myworkdayjobs.com/en-US/Airbus/job/Bangalore-Area/Software-Engineer--Python--Angular-Full-stack-_JR10366937",
    },
    {
      jobname: "Junior Software Engineer-Full Stack Developer",
      compname: "Airbus Group India Pvt Ltd",
      city: "Bengaluru",
      jobdesc:
        "This role is ideal for recent graduates or entry-level candidates with a passion for software development and a desire to grow their skills....",
      url: "https://ag.wd3.myworkdayjobs.com/en-US/Airbus/job/Bangalore-Area/Software-Engineer--Python--Angular-Full-stack-_JR10366937",
    },
  ];

  return (
    <>
      <header class="header">
        <h1>Explore Companies</h1>
        <p>Find suitable roles based on your skills and qualifications</p>
      </header>
      <section class="jobs-container">
        <div class="job-grid">
          {/* <!-- Job Card 1 --> */}

          {company.map((comp, index) => {
            <li key={index}>
              <div class="job-card">
                <h3>{comp.jobname}</h3>
                <h6>{comp.compname}</h6>
                <p>
                  <strong>City:</strong> {comp.city}
                </p>
                <p>
                  <strong>Job Description:</strong> {comp.jobdesc}
                </p>
                <a class="linkBtn" href={comp.url}>
                  Apply on Company Website
                </a>
              </div>
            </li>;
          })}

          <div class="job-card">
            <h3>Junior Software Engineer-Full Stack Developer</h3>
            <h6>Airbus Group India Pvt Ltd</h6>
            <p>
              <strong>City:</strong> Bengaluru
            </p>
            <p>
              <strong>Job Description:</strong> This role is ideal for recent
              graduates or entry-level candidates with a passion for software
              development and a desire to grow their skills....
            </p>
            <a
              class="linkBtn"
              href="https://ag.wd3.myworkdayjobs.com/en-US/Airbus/job/Bangalore-Area/Software-Engineer--Python--Angular-Full-stack-_JR10366937"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 2 --> */}
          <div class="job-card">
            <h3>API Developer</h3>
            <h6>Airbus Group India Pvt Ltd</h6>
            <p>
              <strong>City:</strong> Bengaluru
            </p>
            <p>
              <strong>Job Description:</strong> Are you passionate about IT,
              experienced in software development techniques and convinced by
              the business added value of digitalization?...
            </p>
            <a
              class="linkBtn"
              href="https://ag.wd3.myworkdayjobs.com/en-US/Airbus/job/Bangalore-Area/Developer---Mulesoft-API_JR10390610-1"
            >
              Apply on Company Website
            </a>
          </div>

          {/*  <!-- Job Card 3 --> */}
          <div class="job-card">
            <h3>Software Developer</h3>
            <h6>Quess Corp Limited</h6>
            <p>
              <strong>City:</strong> Coimbatore
            </p>
            <p>
              <strong>Job Description:</strong> The Software Developer role is
              based in Coimbatore and involves working on software development
              projects....
            </p>
            <a
              class="linkBtn"
              href="https://fa-eumz-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/10183"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 4 --> */}
          <div class="job-card">
            <h3>Full Stack Developer</h3>
            <h6>Oracle Financial Services Software Ltd</h6>
            <p>
              <strong>City:</strong> Mumbai
            </p>
            <p>
              <strong>Job Description:</strong> As a consulting business,
              customer relationships are the heart of growing our business. We
              are ambassadors at the customer...
            </p>
            <a
              class="linkBtn"
              href="https://careers.oracle.com/en/sites/jobsearch/job/304501?location=India&locationId=300000000106947"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 5 --> */}
          <div class="job-card">
            <h3>Full Stack Developer</h3>
            <h6>Oracle Financial Services Software Ltd</h6>
            <p>
              <strong>City:</strong> Mumbai
            </p>
            <p>
              <strong>Job Description:</strong> As a consulting business,
              customer relationships are the heart of growing our business. We
              are ambassadors at the customer....
            </p>
            <a
              class="linkBtn"
              href="https://careers.oracle.com/en/sites/jobsearch/job/304501?location=India&locationId=300000000106947"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 6  --> */}
          <div class="job-card">
            <h3>Entry Level Python and Java</h3>
            <h6>KPMG India Services Llp</h6>
            <p>
              <strong>City:</strong> Bengaluru
            </p>
            <p>
              <strong>Job Description:</strong>KPMG entities in India are
              professional services firm(s). These Indian member firms are
              affiliated with KPMG International Limited....
            </p>
            <a
              class="linkBtn"
              href="https://ejgk.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/INTG10038681"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 7  --> */}
          <div class="job-card">
            <h3>SQL Developer Intern</h3>
            <h6>Cricil Ltd</h6>
            <p>
              <strong>City:</strong> Mumbai
            </p>
            <p>
              <strong>Job Description:</strong>Need to hire a intern with basic
              SQL knowledge. Having exposure to data modelling and basic sql
              scripting....
            </p>
            <a
              class="linkBtn"
              href="https://career.crisil.com/crisil/jobview/sql-developer-mumbai-maharashtra-india-2026020119550191"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 8 --> */}
          <div class="job-card">
            <h3>Test Engineer</h3>
            <h6>Quality Koisk Software Llp</h6>
            <p>
              <strong>City:</strong> Kochi
            </p>
            <p>
              <strong>Job Description:</strong>6 months to 2 years of Testing
              Experience for the BFSI/Telecom domain or as per requirement?
              Effective communication skills and ability to articulate
              properly?....
            </p>
            <a
              class="linkBtn"
              href="https://careers-qualitykiosk.peoplestrong.com/job/detail/R-0040031-01"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 9 --> */}
          <div class="job-card">
            <h3>Application Automation</h3>
            <h6>Accenture India Private Limited</h6>
            <p>
              <strong>City:</strong> Bengaluru
            </p>
            <p>
              <strong>Job Description:</strong>Accenture is a global
              professional services company with leading capabilities in
              digital, cloud and security.Combining unmatched experience and
              specialized skills across more than 40 industries....
            </p>
            <a
              class="linkBtn"
              href="https://www.accenture.com/in-en/careers/jobdetails?id=AIOC-S01627413_en&title=App%20Automation%20Eng%20New%20Associate"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 10 --> */}
          <div class="job-card">
            <h3>Business Analyst</h3>
            <h6>Mphasis Limited</h6>
            <p>
              <strong>City:</strong>Pune
            </p>
            <p>
              <strong>Job Description:</strong>Digital Risk's mission to Make
              Mortgages Safe relies on the perfect blending of human experience
              and state-of-the-art technology to serve its workforce and
              clients....
            </p>
            <a
              class="linkBtn"
              href="https://mphasis.ripplehire.com/candidate/?token=ty4DfyWddnOrtpclQeia&lang=en&ref=LI01#detail/job/647381"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 11 --> */}
          <div class="job-card">
            <h3>Graphic Designer</h3>
            <h6>Larsen & Turbo Ltd</h6>
            <p>
              <strong>City:</strong>Mumbai
            </p>
            <p>
              <strong>Job Description:</strong>Conceptualize and design visual
              content for print and digital media — including brochures,
              hoardings, site branding, emailers, social media posts, and
              digital ads....
            </p>
            <a
              class="linkBtn"
              href="https://larsentoubrocareers.peoplestrong.com/job/detail/LNT_GD_1546173"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 12 --> */}
          <div class="job-card">
            <h3>Digital Business Dealing</h3>
            <h6>Kotak Securities Limited</h6>
            <p>
              <strong>City:</strong>Kolkata
            </p>
            <p>
              <strong>Job Description:</strong>The Digital Business Dealing role
              in Kolkata involves managing digital business operations and sales
              activities. The position requires working closely....
            </p>
            <a
              class="linkBtn"
              href="https://hcbt.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/37819"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 13 --> */}
          <div class="job-card">
            <h3>System Engineer</h3>
            <h6>GE Healthcare</h6>
            <p>
              <strong>City:</strong> Bengaluru
            </p>
            <p>
              <strong>Job Description:</strong> Systems engineering is a
              cross-functional engineering discipline centered on an approach,
              mindset, and process. All activities that consider both the ....
            </p>
            <a
              class="linkBtn"
              href="https://careers.gehealthcare.com/global/en/job/R4036386"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 14 --> */}
          <div class="job-card">
            <h3>Database Administration</h3>
            <h6>NTT India Ltd</h6>
            <p>
              <strong>City:</strong>Mumbai
            </p>
            <p>
              <strong>Job Description:</strong>The role of a Database
              Administrator involves managing and maintaining database systems.
              - Responsibilities include ensuring database performance,
              security, and availability...
            </p>
            <a
              class="linkBtn"
              href="https://nttltd.ripplehire.com/candidate/?token=HxDsHL3vMLvYaPbKzyBL&lang=en&ref=LI01#detail/job/428659"
            >
              Apply on Company Website
            </a>
          </div>

          {/* <!-- Job Card 15 --> */}
          <div class="job-card">
            <h3>Customer Delivery Specialist</h3>
            <h6>Tata Croma</h6>
            <p>
              <strong>City:</strong>Pune
            </p>
            <p>
              <strong>Job Description:</strong>Croma is a brand of Infiniti
              Retail Ltd., which is a wholly-owned subsidiary of Tata Sons, the
              holding company of the Tata Group....
            </p>
            <a
              class="linkBtn"
              href="https://fa-eryk-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/25223?jarvisId=d4fcf9dc-95cc-460c-b1d7-03e503a54c56&mode=location&sessionId=a555f00e-afc6-40d5-8e42-6bc326a26b41.22e0cfe2-3d7d-419b-899d-7f8794b210be"
            >
              Apply on Company Website
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default CompaniesList;
