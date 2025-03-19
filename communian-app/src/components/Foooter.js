import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Leftmost - Logo Section */}
        <div style={styles.logoSection}>
          <img src="/banner.JPG" alt="Communion App Logo" style={styles.logo} />
          <p>A community-driven event platform to connect people and share experiences.</p>
        </div>

        {/* Middle Section - Social Apps, Company, Contact */}
        <div style={styles.middleSection}>
          {/* Social Media Icons */}
          <div style={styles.column}>
            <h3>Follow Us</h3>
            <div style={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaInstagram /></a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaWhatsapp /></a>
            </div>
          </div>

          {/* Company Column */}
          <div style={styles.column}>
            <h3>Company</h3>
            <ul style={styles.list}>
              <li><Link to="/" style={styles.link}>Home</Link></li>
              <li><Link to="/events" style={styles.link}>Events</Link></li>
              <li><Link to="/about" style={styles.link}>About</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div style={styles.column}>
            <h3>Contact</h3>
            <p>Email: <a href="mailto:support@communion.com" style={styles.email}>support@communion.com</a></p>
          </div>
        </div>

        {/* Rightmost - Legal Section */}
        <div style={styles.legalSection}>
          <h3>Legal</h3>
          <ul style={styles.list}>
            <li><Link to="/privacy-policy" style={styles.link}>Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" style={styles.link}>Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={styles.copyright}>
        <p>© 2025. All rights reserved to <strong>Communion</strong></p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "white",
    padding: "30px 0",
    textAlign: "center",
    marginTop: "40px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "auto",
    flexWrap: "wrap",
  },
  logoSection: {
    flex: "1",
    minWidth: "250px",
    textAlign: "center",
    paddingLeft: "5px",
  },
  middleSection: {
    flex: "2",
    display: "flex",
    justifyContent: "space-around",
    minWidth: "400px",
  },
  legalSection: {
    flex: "1",
    minWidth: "200px",
    textAlign: "center",
    paddingRight: "20px",
  },
  column: {
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  link: {
    color: "white",
    textDecoration: "none",
    display: "block",
    margin: "5px 0",
  },
  email: {
    color: "#f0a500",
    textDecoration: "none",
  },
  logo: {
    height: "60px",
    marginBottom: "10px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    fontSize: "20px",
  },
  icon: {
    color: "white",
    textDecoration: "none",
  },
  copyright: {
    borderTop: "1px solid #444",
    marginTop: "20px",
    paddingTop: "10px",
    textAlign: "center",
  },
};

export default Footer;
