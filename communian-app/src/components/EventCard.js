import React from "react";

const EventCard = ({ event }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{event.title}</h3>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px 0",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "8px",
  }
};

export default EventCard;
