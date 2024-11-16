import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Hey Maxwel</h1>
        <div className="user-info">
          <span>John Doe</span>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
