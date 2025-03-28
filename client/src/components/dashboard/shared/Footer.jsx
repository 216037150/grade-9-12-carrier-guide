import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="last-text">
      <p> Copyright &copy; {currentYear}, Crafted with love by Siyabonga Zungu, Full Stack Developer.</p>
    </div>
  );
};

export default Footer;