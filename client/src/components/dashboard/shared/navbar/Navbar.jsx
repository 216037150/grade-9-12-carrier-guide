import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Career Guide</h2>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
      </ul>
      <button className="logout-btn">Logout</button>
    </nav>
  );
};

export default NavBar;
