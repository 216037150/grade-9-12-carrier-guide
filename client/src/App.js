import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreens from './components/splash/mainsplash.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Navbar from './components/dashboard/shared/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SplashScreens />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            <div className="dashboard-layout">
              <Navbar />
              <Dashboard />
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
