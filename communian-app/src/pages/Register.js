import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { email, password });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2 style={styles.Reg}>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

const styles = {
 Reg: {
    marginTop : "100px",
  }
}

export default Register;
