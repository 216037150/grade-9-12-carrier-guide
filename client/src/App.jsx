import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import SplashScreens from "./components/splash/mainsplash.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Navbar from "./components/dashboard/shared/Navbar.jsx";
import Logout from "./components/dashboard/Logout.jsx";
import DarkModeToggle from "./components/dashboard/DarkModeToggle.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<SplashScreens />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <div className="dashboard-layout">
                <Navbar />
                <Dashboard />
              </div>
            }
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
