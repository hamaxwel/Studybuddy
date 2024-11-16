import React from 'react';
import Sidebar from '../components/Sidebar';  // Import Sidebar
import Header from '../components/Header';    // Import Header
import DashboardHome from './StudentDashboard';  // Main dashboard content (widgets)
import './Dashboard.css';  // Import the CSS for the Dashboard styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Main Dashboard Content on Top */}
      <div className="main-content">
        <Header />  {/* Header for dashboard */}
        <div className="dashboard-content">
          <DashboardHome />  {/* The main content (widgets) */}
        </div>
      </div>

      {/* Sidebar placed below the header content */}
      <Sidebar />  {/* Sidebar for dashboard navigation */}
    </div>
  );
};

export default Dashboard;

