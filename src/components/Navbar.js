import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">Studybuddy</Link>

        {/* Hamburger Menu (Mobile) */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      {/* Navbar Links */}
<ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
  <li><Link to="/home" onClick={closeMenu}>Home</Link></li>
  <li><Link to="/tutors" onClick={closeMenu}>Tutors</Link></li>
 
  <li><Link to="/login" onClick={closeMenu}>Login</Link></li>

</ul>
      </div>
    </nav>
  );
};

export default Navbar;
