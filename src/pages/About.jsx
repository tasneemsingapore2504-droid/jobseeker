import aboutImg from "../assets/img/about.avif";

const About = () => {
  return (
    <>

      <section class="about-hero">
        <h1>About JobSeek</h1>
      </section>

      {/* <!-- ABOUT CONTENT --> */}
      <section class="about-main">
        <div class="about-wrapper">
          <div class="about-image">
            <img class="about" src={aboutImg} alt="JobSeek" />
          </div>

          <div class="about-text">
            <h2>Who We Are</h2>
            <p>
              JobSeek is a modern Recruitment Management System designed to
              simplify and streamline the hiring process for organizations,
              recruiters, and job seekers. Our platform brings all recruitment
              activities onto one smart and efficient system, making hiring
              faster, more organized, and more transparent.
            </p>

            <p>
              In today’s competitive job market, managing job postings,
              applications, and candidate data can be time-consuming and
              complex. JobSeek solves this challenge by providing a centralized
              platform that automates recruitment workflows and improves
              collaboration between hiring teams.
            </p>

            <p>
              Our system is built with a strong focus on usability, efficiency,
              and reliability. From posting job opportunities to tracking
              applications and shortlisting candidates, JobSeek supports the
              entire recruitment lifecycle with ease.
            </p>
            <p>
              What We Do • Manage job postings and applications in one place •
              Help recruiters track and shortlist candidates efficiently •
              Improve communication between employers and applicants • Reduce
              hiring time and manual work • Maintain secure and organized
              recruitment data Our Mission To provide a simple, effective, and
              reliable recruitment platform that helps organizations connect
              with the right talent effortlessly. Our Vision To become a trusted
              recruitment solution by continuously improving hiring experiences
              for employers and job seekers through technology. At JobSeek, we
              believe recruitment should be simple, structured, and
              accessible—and our platform is built to make that happen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
