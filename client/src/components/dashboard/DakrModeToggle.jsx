import React, { useState, useEffect } from 'react';
import './DarkMode.css'; // Import your CSS file

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' ||
      (!('darkMode' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  ); //check local storage first, then system preferences

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;