import React from 'react';
import ProfileCard from './ProfileCard';
// import QuizResults from './QuizResults';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Career Guide</h1>
      <ProfileCard />
      {/* <QuizResults /> */}
    </div>
  );
};

export default Dashboard;
