// Footer.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <p className="footer-copy">© 2025 Joel Pigem Borrell. All rights reserved.</p>
        <div className="footer-contact">
          <a href="tel:+34622522645" aria-label="Call phone">
            <FaPhoneAlt className="icon" /> 622 522 645
          </a>
          <a href="mailto:jpbportafolio@gmail.com" aria-label="Send email">
            <FaEnvelope className="icon" /> jpbportafolio@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
