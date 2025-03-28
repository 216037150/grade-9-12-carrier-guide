import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  
  React.useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null; 
}

export default Logout;