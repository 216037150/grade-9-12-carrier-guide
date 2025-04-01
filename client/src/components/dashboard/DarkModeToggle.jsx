import React, { useState, useEffect } from "react";
import "./DarkModeToggle.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement; // Target `html`

    if (darkMode) {
      root.classList.add("dark-mode");
      root.classList.remove("light-mode");
    } else {
      root.classList.add("light-mode");
      root.classList.remove("dark-mode");
    }

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;

