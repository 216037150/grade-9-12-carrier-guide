import React from 'react';
import './Dashboard.css';
import Footer from './shared/Footer';
import Bcom from "./stream/bcom/Bcom"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Career Guide</h1>
      <div className="dashboard-content">
          <Bcom />
          <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
