import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Communion App</h1>
          <p style={{ fontSize: "18px", color: "black" }}>Discover and organize meaningful events within your community.</p>
          <p style={{ fontSize: "25px", color: "black" }}>Bridging gaps between faiths with tech and a dash of fun.</p>
          <Link to="/events" className="explore-btn">
            Explore Events
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Communion App</h2>
        <p>
          Communion App helps you find and organize local events effortlessly. Whether it's a 
          gathering, a seminar, or a celebration, you can join or create events in just a few clicks!
        </p>
        <h3 style={styles.subheading}>Features:</h3>
      <ul style={styles.list}>
        <li>📅 Browse upcoming community events.</li>
        <li>🔍 Filter and search for specific events.</li>
        <li>✍️ Add events (authentication required).</li>
        <li>🗺️ View event locations on a map.</li>
      </ul>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>WHY COMMUNION ROCKS</h2>
        <p>Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm.</p>
        <Link to="/register" className="cta-btn">
          Sign Up
        </Link>
      </section>
    </div>
  );
};

const styles = {
  subheading: {
    fontSize: "22px",
    marginTop: "20px",
  },
  list: {
    textAlign: "left",
    display: "inline-block",
    fontSize: "18px",
  }
}
export default Home;
