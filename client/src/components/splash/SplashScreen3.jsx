import React from 'react';
import './splash.css';
import DarkModeToggle from '../dashboard/DarkModeToggle';

function SplashScreen3({ onGetStarted }) {
  return (
    <div className="splash-screen">
      <DarkModeToggle />
      <div className="splash-content">
        <i className="bi bi-mortarboard icon"></i>
        <h1 className='h1Title'>Your Future Awaits: Start Exploring Now.</h1>
        <p>Take the first step towards a successful future. Your journey to informed decisions starts here.</p>
        <img src="images/image.png" alt="Start Journey" className="splash-image" /><br />
        <button onClick={onGetStarted} className="get-started-button">Get Started</button>
      </div>
    </div>
  );
}

export default SplashScreen3;