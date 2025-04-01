import React from 'react';
import './splash.css';
import DarkModeToggle from '../dashboard/DarkModeToggle.jsx';

function SplashScreen1({ onNext }) {
  return (
    <div className="splash-screen">
      <i className="bi bi-mortarboard icon"></i>
      
      <DarkModeToggle />
      
      <div className="splash-content">
        <h1>Welcome to Your Career Journey!</h1>
        <p className="curve-paragraph">Explore subject options and career paths to make informed decisions for Grade 10.</p>
        <img src="/images/image.png" alt="Career Journey" className="splash-image" /> <br />
        <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
}

export default SplashScreen1;
