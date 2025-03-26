import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Add your login logic here (e.g., API call)
    // For now, just simulate success
    console.log('Login data:', { email, password });
    // if (/* login successful */) {
    navigate('/dashboard'); 
    // } else {
    //   setError('Invalid email or password.');
    // }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;