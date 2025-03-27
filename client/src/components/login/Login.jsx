import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // 1. Fetch the user's salt from the backend
      const saltResponse = await fetch(`http://localhost:8080/api/users/salt?email=${email}`);
      if (!saltResponse.ok) {
        throw new Error('Failed to retrieve salt');
      }
      const saltData = await saltResponse.json();
      const salt = saltData.salt;

      // 2. Hash the password with the salt (using CryptoJS) - Modified salt usage
      const saltedPassword = salt + password; // changed password + salt to salt + password
      const hash = CryptoJS.SHA256(saltedPassword);

      // 3. Convert the hash to hexadecimal string
      const hashedPassword = hash.toString(CryptoJS.enc.Hex);

      // 4. Send the hashed password to the backend
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password: hashedPassword }),
      });

      if (response.ok) {
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid email or password.');
      }
    } catch (err) {
      setError('An error occurred during login.');
      console.error('Login error:', err);
    }
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