import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreens from './components/splash/mainsplash.jsx';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from "./components/dashboard/shared/navbar/Navbar";
import Footer from './components/dashboard/shared/footer/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SplashScreens />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          <Route path="/dashboard"  element={<>
                <Navbar />
                <Dashboard />
              </>
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
