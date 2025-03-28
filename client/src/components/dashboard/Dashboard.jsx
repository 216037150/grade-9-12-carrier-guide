import React from 'react';
import ProfileCard from './ProfileCard';
import './Dashboard.css';
import Footer from './shared/Footer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Career Guide</h1>
      <div className="dashboard-content">
        <ProfileCard />
        <Footer />
        

      </div>
    </div>
  );
};

export default Dashboard;
