import React from 'react';
import ProfileCard from './ProfileCard';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Career Guide</h1>
      <div className="dashboard-content">
        <ProfileCard />
      </div>
    </div>
  );
};

export default Dashboard;
