import { Link } from "react-router-dom";
import "../styles/Community.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Community = () => {
  return (
    <main>
      <Navbar loggedIn={true} />
      <div className="flexbox">
        <Card />

        <div className="grid2">
          <h1>
            Create tracks with <span className="gradient">Groovy</span>
          </h1>
          <p className="color">
            Discover the best beats, create them, upload them!
          </p>
          <Link to="/groovy">
            <button>Launch Groovy</button>
          </Link>
        </div>

        <Card />
      </div>

      <div className="flexbox track-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Community;
