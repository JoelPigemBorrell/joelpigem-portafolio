import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import photo from '../../assets/photoPersonal.jpg';
import './hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Ambient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="hero-inner">
        {/* Left content */}
        <div className="hero-content">
          <motion.div {...fadeUp(0.1)}>
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              Available for work
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.2)}>
            Hi, I'm{' '}
            <span className="name-gradient">Joel Pigem</span>
          </motion.h1>

          <motion.p className="hero-role" {...fadeUp(0.3)}>
            iOS Developer · SwiftUI · Fullstack Engineer
          </motion.p>

          <motion.div className="hero-typewriter" {...fadeUp(0.4)}>
            <Typewriter
              words={[
                "Building native iOS apps",
                "SwiftUI specialist",
                "React & fullstack developer",
                "Published on the App Store",
                "UI/UX obsessed",
                "Android & web developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={45}
              deleteSpeed={30}
              delaySpeed={2200}
            />
          </motion.div>

          <motion.div className="hero-actions" {...fadeUp(0.5)}>
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href="/cv-joel-pigem.pdf" download className="btn-secondary">
              Download CV
            </a>
            <a href="#footer" className="btn-secondary">
              Contact me
            </a>
          </motion.div>
        </div>

        {/* Right — photo */}
        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="hero-photo-ring">
            <img src={photo} alt="Joel Pigem" />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
