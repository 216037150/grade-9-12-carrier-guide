import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    navigate('/logout');
    setIsMenuOpen(false);
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
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li>
            <a href="/logout" className="nav-link" onClick={handleLogoutClick}>
              <i className="fa fa-user" aria-hidden="true"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;