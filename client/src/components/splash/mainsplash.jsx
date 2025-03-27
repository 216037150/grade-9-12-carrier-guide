import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SplashScreen1 from './SplashScreen1';
import SplashScreen2 from './SplashScreen2';
import SplashScreen3 from './SplashScreen3';
import Skip from './Skip';
function SplashScreens() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const handleGetStarted = () => {
    navigate('/register'); 
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <SplashScreen1 onNext={handleNext} />;
      case 2:
        return <SplashScreen2 onNext={handleNext} />;
      case 3:
        return <SplashScreen3 onGetStarted={handleGetStarted} />;
      default:
        return <div>Login/Register Component Here</div>;
    }
  };

  return (
    <div className="splash-container">
      <Skip />
      {renderScreen()}
    </div>
  );
}

export default SplashScreens;