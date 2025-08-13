import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
};

const stats = [
  { icon: '📱', number: '1', label: 'App published on the App Store', featured: true },
  { icon: '⚡', number: '3+', label: 'Years building apps' },
  { icon: '🌐', number: '5+', label: 'Projects shipped' },
  { icon: '🎯', number: '100%', label: 'Passion for code' },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        {/* Left */}
        <motion.div className="about-text" {...fadeUp}>
          <span className="section-label">About me</span>
          <h2>
            I build apps that <em>people love to use</em>
          </h2>
          <p className="about-bio">
            I'm a passionate iOS & SwiftUI developer with a fullstack background — which means I can build an entire product from the native iOS app to the web backend. My flagship app <strong style={{color: 'var(--text)'}}>Stockeats</strong> is live on the App Store.
          </p>
          <p className="about-bio">
            Beyond iOS, I build with React, Angular, Node.js, Firebase and more. I care deeply about clean UI, smooth UX and code that lasts. I'm driven by technology, design, and turning ideas into real products.
          </p>
          <div className="about-tags">
            {['SwiftUI', 'iOS', 'React', 'Fullstack', 'App Store', 'Firebase', 'Kotlin', 'TypeScript'].map(t => (
              <span key={t} className="about-tag">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Right — stats */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {stats.map((s, i) => (
            <div key={i} className={`stat-card${s.featured ? ' featured' : ''}`}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
