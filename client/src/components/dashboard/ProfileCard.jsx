import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileCard.css';

const ProfileCard = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    axios.get('http://localhost:8080/api/users/email', { withCredentials: true })
      .then(response => {
        console.log("User data:", response.data);
        setUser({ name: response.data.name, email: response.data.email });
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }, []);

  return (
    <div className="profile-card">
      <h2>{user.name || 'User Name'}</h2>
      <p>{user.email || 'user@example.com'}</p>
    </div>
  );
};

export default ProfileCard;
