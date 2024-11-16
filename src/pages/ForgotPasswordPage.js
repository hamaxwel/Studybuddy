import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPasswordPage.css'; // Import the CSS for styling

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();  // Using useNavigate for routing

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sending reset password email

    // Redirect to the login page after submission
    navigate('/login');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Forgot Your Password?</h2>
        <p>Enter your email address and we will send you a link to reset your password.</p>

        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
            required
            aria-label="Email address"
          />
          <button type="submit">Send Reset Link</button>
        </form>

        <p className="back-to-login">
          Remember your password? <a href="/login">Back to Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
