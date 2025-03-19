import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import EventCard from "../components/EventCard";  // Import EventCard

const Events = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "" });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleAddEvent = async () => {
    if (!user) {
      alert("You need to log in to add events.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/events", newEvent, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setEvents([...events, res.data]);
      setNewEvent({ title: "", date: "", location: "" });
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <div>
      <h2 style={styles.Up}>Upcoming Events</h2>

      {/* Replace the <ul> with EventCard */}
      <div>
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>

      {user && (
        <div>
          <h3>Add New Event</h3>
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
          <input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
          />
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
      )}
    </div>
  );
};


const styles = {
  Up: {
    marginTop : "100px",
  }
}


export default Events;
