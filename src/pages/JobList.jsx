import { Link } from "react-router-dom";
function JobList() {
  return (
    <>
      <header class="header">
        <h1>Explore Job Opportunities</h1>
        <p>Find suitable roles based on your skills and qualifications</p>
      </header>

      {/* <!-- Jobs Section --> */}
      <section class="jobs-container">
        <div class="job-grid">
          {/* <!-- Job Card 1 --> */}
          <div class="job-card">
            <h3>Multi Task Associate</h3>
            <p>
              <strong>Qualification:</strong> 12th Pass / Any Graduate
            </p>
            <p>
              <strong>Skills:</strong> Multitasking, Time management, Basic
              computer knowledge
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>

          {/* <!-- Job Card 2 --> */}
          <div class="job-card">
            <h3>Reporter</h3>
            <p>
              <strong>Qualification:</strong> Graduation in Journalism / Mass
              Communication
            </p>
            <p>
              <strong>Skills:</strong> News reporting, Interviewing, Research,
              Communication
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>

          {/* <!-- Job Card 3 --> */}
          <div class="job-card">
            <h3>Cameraman</h3>
            <p>
              <strong>Qualification:</strong> 12th Pass / Diploma or Graduation
              in Media
            </p>
            <p>
              <strong>Skills:</strong> Camera handling, Lighting, Framing, Video
              editing basics
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>

          {/* <!-- Job Card 4 --> */}
          <div class="job-card">
            <h3>Content Writer</h3>
            <p>
              <strong>Qualification:</strong> Graduation in English / Journalism
              / Any Graduate
            </p>
            <p>
              <strong>Skills:</strong> Creative writing, Research, Content
              planning, SEO basics
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>

          {/* <!-- Job Card 5 --> */}
          <div class="job-card">
            <h3>Digital Marketing Executive / Social Media Handler</h3>
            <p>
              <strong>Qualification:</strong> Graduation / PG / Certification
              preferred
            </p>

            <p>
              <strong>Skills:</strong> Social media management, Content
              creation, Ads, Analytics
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>Sales Executive</h3>
            <p>
              <strong>Qualification:</strong> 12th Pass / Any Graduate
            </p>
            <p>
              <strong>Skills:</strong> Communication, persuasion, negotiation,
              closing skills, customer relationship building, market research,
              sales analysis, time management, confidence
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>Computer operator</h3>
            <p>
              <strong>Qualification:</strong> 10+2 (Higher Secondary) or Diploma
              in Computer Applications
            </p>
            <p>
              <strong>Skills:</strong>Typing speed and accuracy, MS Office
              proficiency, data entry and record management, basic
              troubleshooting, internet and email handling
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>

          <div class="job-card">
            <h3>office assistant</h3>
            <p>
              <strong>Qualification:</strong> 10+2 (Higher Secondary) or
              equivalent
            </p>
            <p>
              <strong>Skills:</strong>Communication skills, MS Office
              proficiency, filing and record management, time management,
              organizational skills
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>boutique manager</h3>
            <p>
              <strong>Qualification:</strong> Bachelor's degree in Fashion
              Design, Fashion Merchandising, Business Administration, or related
              field
            </p>
            <p>
              <strong>Skills:</strong>Leadership, customer service, sales and
              marketing, inventory management, visual merchandising, team
              management
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>counselor</h3>
            <p>
              <strong>Qualification:</strong> Bachelor's degree in Psychology,
              Social Work, Counseling, or a related field
            </p>
            <p>
              <strong>Skills:</strong>Active listening, empathy, communication,
              problem-solving, patience, confidentiality, interpersonal skills,
              and emotional intelligence.
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>marketing executive</h3>
            <p>
              <strong>Qualification:</strong> Bachelor's degree in Marketing,
              Business Administration, or a related field
            </p>
            <p>
              <strong>Skills:</strong>Communication, creativity, market
              research, digital marketing, sales, social media management,
              negotiation, analytical thinking, and project management.
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>computer teacher</h3>
            <p>
              <strong>Qualification:</strong> Bachelor’s degree in Computer
              Science, Information Technology, or Education with Computer
              Science
            </p>
            <p>
              <strong>Skills:</strong>Computer literacy, programming knowledge,
              MS Office proficiency, teaching and presentation skills,
              communication
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>stitcher</h3>
            <p>
              <strong>Qualification:</strong> 8th / 10th / 12th Pass
            </p>
            <p>
              <strong>Skills:</strong>Stitching, Tailoring, Measurement
              accuracy, Fabric knowledge
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>Teacher (Primary & Higher Secondary)</h3>
            <p>
              <strong>Qualification:</strong> Primary: Graduation + D.Ed/B.Ed;
              Higher Secondary: PG + B.Ed
            </p>
            <p>
              <strong>Skills:</strong>Subject expertise, Lesson planning,
              Classroom control, Assessment
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>Hardware & Networking Executive</h3>
            <p>
              <strong>Qualification:</strong> Graduation / Diploma in IT / CS
            </p>
            <p>
              <strong>Skills:</strong>Hardware troubleshooting, Networking,
              System installation, Tech support
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>Electrician</h3>
            <p>
              <strong>Qualification:</strong> 10th / 12th Pass + ITI Electrician
            </p>
            <p>
              <strong>Skills:</strong>Electrical installation, Fault finding,
              Safety practices, Maintenance
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>Security Guard</h3>
            <p>
              <strong>Qualification:</strong> 8th / 10th Pass
            </p>
            <p>
              <strong>Skills:</strong>Surveillance, Alertness, Discipline,
              Emergency response
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>Driver</h3>
            <p>
              <strong>Qualification:</strong> 8th / 10th Pass + Valid License
            </p>
            <p>
              <strong>Skills:</strong>Safe driving, Traffic rules, Vehicle
              upkeep, Punctuality
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>Premises In-charge</h3>
            <p>
              <strong>Qualification:</strong> Any Graduate
            </p>
            <p>
              <strong>Skills:</strong>Facility supervision, Maintenance
              coordination, Safety, Vendor handling
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
          <div class="job-card">
            <h3>Accountant</h3>
            <p>
              <strong>Qualification:</strong> B.Com / M.Com (PG preferred)
            </p>
            <p>
              <strong>Skills:</strong>Accounting , Tally, GST & TDS, Financial
              reporting
            </p>
            <Link class="linkBtn" to="/applyForm">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default JobList;
