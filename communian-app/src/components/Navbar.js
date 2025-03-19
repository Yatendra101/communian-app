import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={styles.navbar}>
      {/* Leftmost - Logo Section */}
      <div style={styles.logoSection}>
        <img src="/banner.JPG" alt="Communion App Logo" style={styles.logo} />
        <p style={styles.logoText}>A community-driven event platform.</p>
      </div>

      {/* Center - Navigation Links in the middle of the page */}
      <div style={styles.centerNav}>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          <li><Link to="/events" style={styles.navLink}>Events</Link></li>
          <li><Link to="/about" style={styles.navLink}>About</Link></li>
        </ul>
      </div>

      {/* Right - Auth Links */}
      <div style={styles.authSection}>
        {!user ? (
          <>
            <Link to="/login" style={styles.authLink}>Login</Link>
            <Link to="/register" style={styles.authLink}>Register</Link>
          </>
        ) : (
          <button onClick={logout} style={styles.logoutButton}>Logout</button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#333",
    padding: "10px 20px",
    position: "fixed",
    top: 0,
    width: "98%",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    height: "50px",
  },
  logoText: {
    color: "white",
    fontSize: "14px",
    maxWidth: "150px",
  },
  centerNav: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    padding: 0,
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "22px",
  },
  authSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  authLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
  logoutButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    paddingRight: "20px",
  },
};

export default Navbar;
