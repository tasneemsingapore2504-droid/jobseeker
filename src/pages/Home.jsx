import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section class="hero">
        <div class="hero-text">
          <h1>Find your dream job now</h1>
          <p color="black">
            Create an account or sign in to see your personalised job
            recommendations.
          </p>
          <Link to="/companiesList">
            <button class="explore">Explore Now</button>
          </Link>
        </div>
      </section>
    </>
  );
}
export default Home;
