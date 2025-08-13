import React from 'react';
import { motion } from 'framer-motion';
import './footer.css';

const contacts = [
  {
    icon: '📧',
    label: 'Email',
    value: 'joelpigemdeveloper@gmail.com',
    href: 'mailto:joelpigemdeveloper@gmail.com',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+34 622 522 645',
    href: 'tel:+34622522645',
  },
];

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Left */}
          <motion.div
            className="footer-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Let's build something <em>great</em> together
            </h2>
            <p>
              I'm available for iOS projects, fullstack work, and anything in between.
              Drop me a message — I reply fast.
            </p>
            <a href="/cv-joel-pigem.pdf" download className="footer-cv-link">
              ↓ Download CV
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            className="footer-contact-list"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {contacts.map((c) => (
              <a key={c.label} href={c.href} className="footer-contact-item">
                <div className="footer-contact-icon">{c.icon}</div>
                <div>
                  <span className="footer-contact-label">{c.label}</span>
                  <span className="footer-contact-value">{c.value}</span>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2025 Joel Pigem Borrell. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
