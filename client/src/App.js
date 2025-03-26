import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreens from './components/splash/mainsplash.jsx';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreens />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;