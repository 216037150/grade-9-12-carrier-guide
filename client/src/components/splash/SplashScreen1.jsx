import React from 'react';
import './splash.css';

function SplashScreen1({ onNext }) {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1>Welcome to Your Career Journey!</h1>
        <p>Explore subject options and career paths to make informed decisions for Grade 10.</p>
        <img src="/images/image.png" alt="Career Journey" className="splash-image" /> <br />
        <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
}

export default SplashScreen1;