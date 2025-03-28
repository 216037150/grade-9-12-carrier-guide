import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h2>Career Guide</h2>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="/" className="nav-link">Home</a>
          </li>
          <li>
            <a href="/dashboard" className="nav-link">Dashboard</a>
          </li>
          <li>
            <a href="/login" className="nav-link">Login</a>
          </li>
          <li>
            <a href="/register" className="nav-link">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
