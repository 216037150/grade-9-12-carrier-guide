import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
        Copyright &copy; {currentYear}, Crafted with love by Siyabonga Zungu, Full Stack Developer, for Grade 9 Learners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;