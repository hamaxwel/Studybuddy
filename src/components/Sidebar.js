import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Using useLocation to set active class
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation(); // Get current route to set active class

  return (
    <div className="sidebar">
      <h2>StudyBuddy</h2>
      <div className="menu-items">
        <Link to="/dashboard/home" className={`menu-item ${location.pathname === "/dashboard/home" ? "active" : ""}`}>
          <div className="icon">🏠</div> Home
        </Link>
        <Link to="/dashboard/courses" className={`menu-item ${location.pathname === "/dashboard/courses" ? "active" : ""}`}>
          <div className="icon">📚</div> Courses
        </Link>
        <Link to="/dashboard/assignments" className={`menu-item ${location.pathname === "/dashboard/assignments" ? "active" : ""}`}>
          <div className="icon">📝</div> Assignments
        </Link>
        <Link to="/dashboard/grades" className={`menu-item ${location.pathname === "/dashboard/grades" ? "active" : ""}`}>
          <div className="icon">📊</div> Grades
        </Link>
        <Link to="/dashboard/settings" className={`menu-item ${location.pathname === "/dashboard/settings" ? "active" : ""}`}>
          <div className="icon">⚙️</div> Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
