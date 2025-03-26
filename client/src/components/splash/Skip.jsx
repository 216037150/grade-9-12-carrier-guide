import React from 'react';
import { useNavigate } from 'react-router-dom';

function Skip() {
  const navigate = useNavigate();
  const handleSkip = () => {
    navigate('/login');
  };

  return (
    <button className="skip-button" onClick={handleSkip}>Skip</button>
  );
}

export default Skip;