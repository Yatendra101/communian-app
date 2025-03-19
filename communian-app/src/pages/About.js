import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Communion App</h2>
      <p style={styles.text}>
        The <strong>Communion App</strong> is designed to help communities and groups manage and share upcoming events easily. 
        Users can browse event listings, filter events, and authenticated users can add new events.
      </p>
      <p style={styles.text}>
        Our goal is to make event planning seamless and engaging, allowing users to stay informed and participate in meaningful events.
      </p>
      <h3 style={styles.subheading}>Features:</h3>
      <ul style={styles.list}>
        <li>📅 Browse upcoming community events.</li>
        <li>🔍 Filter and search for specific events.</li>
        <li>✍️ Add events (authentication required).</li>
        <li>🗺️ View event locations on a map.</li>
      </ul>
      <p style={styles.text}>
        We hope you enjoy using the Communion App. If you have any suggestions or feedback, feel free to reach out!
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    marginTop : "50px",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "15px",
  },
  subheading: {
    fontSize: "22px",
    marginTop: "20px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.5",
    marginBottom: "10px",
  },
  list: {
    textAlign: "left",
    display: "inline-block",
    fontSize: "18px",
  },
};

export default About;
