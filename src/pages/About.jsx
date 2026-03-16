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
              <strong>JobSeek</strong> is a next-generation Recruitment Management System engineered to bridge the gap between top-tier organizations and ambitious talent. Our platform centralizes the hiring ecosystem into one intelligent interface, transforming recruitment from a complex chore into a fast, transparent, and highly organized strategic advantage.
            </p>

            <p>
              In a hyper-competitive market, manual tracking and fragmented data can stall growth. JobSeek eliminates these bottlenecks by providing a unified workspace that automates workflows and fosters seamless collaboration between hiring teams.
            </p>

            <p>
              Built with an uncompromising focus on usability and reliability, JobSeek supports the entire recruitment lifecycle—from the initial job post to the final shortlist—with clinical efficiency.
            </p>

            <div class="about-details mt-4">
              <h3>What We Do</h3>
              <ul class="list-unstyled">
                <li>• Centralize job postings and applications in one workspace</li>
                <li>• Empower recruiters to track and shortlist candidates with precision</li>
                <li>• Bridge the communication gap between employers and applicants</li>
                <li>• Accelerate hiring timelines by minimizing manual administrative tasks</li>
                <li>• Secure and organize sensitive recruitment data with modern standards</li>
              </ul>

              <h3 class="mt-3">Our Mission</h3>
              <p>
                To deliver a high-performance recruitment platform that enables organizations to discover and connect with the right talent effortlessly.
              </p>

              <h3 class="mt-3">Our Vision</h3>
              <p>
                To be the industry’s most trusted hiring solution by continuously evolving the recruitment experience through intuitive technology.
              </p>

              <p class="fst-italic mt-4">
                At JobSeek, we believe recruitment should be simple, structured, and accessible—and our platform is built to make that happen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
