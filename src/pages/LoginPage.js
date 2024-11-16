import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Ensure correct import
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();  // Using useNavigate for routing
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here

    // Redirect to dashboard after successful login
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
        />
        <button type="submit">Login</button>

        {/* Forgot password link */}
        <p>
           <Link to="/forgotpassword" className="forgot-password-link">Forgot your password?</Link>
        </p>

      </form>
    </div>
  );
};

export default LoginPage;
