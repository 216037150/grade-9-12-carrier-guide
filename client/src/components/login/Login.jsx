import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import Loader from "../dashboard/shared/Loader";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Show loader immediately after clicking login

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setTimeout(() => {
          navigate('/dashboard'); // Navigate only after loading
        }, 2000); // Simulate loading delay for a better user experience
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid email or password.');
      }
    } catch (err) {
      setError(`An error occurred during login: ${err.message}`);
      console.error('Login error:', err);
    } finally {
      setTimeout(() => {
        setLoading(false); // Stop loading
      }, 2000); // Match delay to the navigation time
    }
  };

  return (
    <div className="login-container">
      {loading ? ( // Show loader only when loading
        <Loader />
      ) : (
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
      )}
    </div>
  );
}

export default Login;
