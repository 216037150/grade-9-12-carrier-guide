import React from 'react';
import './splash.css';

function SplashScreen2({ onNext }) {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1>GRADE 10 CHOICES, OPENING LIFELONG PATHS</h1>
        <p>Detailed career profiles, subject-specific information, and personalized career recommendations.<a href="https://careerguidanceproject.co.za/wp-content/uploads/2020/10/Subject-Choice-for-Grade-10.pdf">Learn More</a> </p>
        <div className="feature-icons">
          <img src="images/image.png" alt="Explore" className="feature-icon" />
          <img src="images/image.png" alt="Subjects" className="feature-icon" />
          <img src="images/image.png" alt="Recommendations" className="feature-icon" />
        </div>
        <button onClick={onNext} className="next-button">Next</button>
      </div>
    </div>
  );
}

export default SplashScreen2;