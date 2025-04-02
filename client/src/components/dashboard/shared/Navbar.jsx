import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/users/email', { withCredentials: true })
      .then(response => {
        setUserName(response.data.name);
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

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
          <img src="images/logo.png" alt="" />
        </div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/dashboard" className="nav-link" >Dashboard</Link></li>
          <li>
            <i className="fa fa-user-circle" aria-hidden="true"></i>
            <Link to="/profile" className="nav-link">
              {userName ? userName : 'User'}
            </Link>
          </li>
          <li>
            <a href="/logout" className="nav-link" onClick={handleLogoutClick}>
              <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
