import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

const DashboardHome = () => {
  const [isSignedUp, setIsSignedUp] = useState(false); // Default state
  const navigate = useNavigate();

  // Simulate redirection logic
  useEffect(() => {
    if (!isSignedUp) {
      console.log("User not signed up. Redirecting to signup page...");
      navigate('/signup'); // Redirect to signup if not signed up
    }
  }, [isSignedUp, navigate]);

  return (
    <div className="dashboard-home">
      <h1 className="dashboard-title">Student Dashboard</h1>

      <div className="widget-container">
        <div className="widget">
          <h2>Assignments Due</h2>
          <p>3 assignments due this week</p>
        </div>

        <div className="widget">
          <h2>Upcoming Classes</h2>
          <p>Next class: Math - 2 PM, Friday</p>
        </div>

        <div className="widget">
          <h2>Performance</h2>
          <p>Average grade: 85%</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
