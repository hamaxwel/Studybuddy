import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      {/* Footer Top Section: Site Links */}
      <div className="footer-top">
        <div className="footer-links">
          <h4>Studybuddy</h4>
          <ul>
            <li><button onClick={() => console.log('About Us clicked')} className="link-button">About Us</button></li>
          </ul>
        </div>
        
        {/* Footer Center Section: Legal Links */}
        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><button onClick={() => console.log('Privacy Policy clicked')} className="link-button">Privacy Policy</button></li>
            <li><button onClick={() => console.log('Terms of Service clicked')} className="link-button">Terms of Service</button></li>
            <li><button onClick={() => console.log('Cookies Policy clicked')} className="link-button">Cookies Policy</button></li>
          </ul>
        </div>

        {/* Footer Right Section: Contact Information */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: <a href="mailto:support@studybuddy.com">support@studybuddy.com</a></li>
            <li>Phone: <a href="tel:+254704400263">+254704400263</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section: Social Media and Copyright */}
      <div className="footer-bottom">
        <div className="social-media">
          <button onClick={() => console.log('Facebook clicked')} className="social-icon">Facebook</button>
          <button onClick={() => console.log('Twitter clicked')} className="social-icon">Twitter</button>
          <button onClick={() => console.log('Instagram clicked')} className="social-icon">Instagram</button>
        </div>
        <p>&copy; 2024 Studybuddy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
