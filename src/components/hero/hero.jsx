import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Particles } from "react-tsparticles";
import photo from '../../assets/photoPersonal.jpg';
import './hero.css';

const particlesOptions = {
  fpsLimit: 60,
  background: { color: "transparent" },
  particles: {
    number: { value: 40, density: { enable: true, area: 900 } },
    color: { value: "#3f8efc" },
    shape: { type: "circle" },
    opacity: { value: 0.25, anim: { enable: true, speed: 1, opacity_min: 0.05, sync: false } },
    size: { value: 3, random: true },
    move: { enable: true, speed: 0.5, direction: "none", random: true, straight: false, outMode: "out" },
  },
  interactivity: {
    detectsOn: "canvas",
    events: { onHover: { enable: false }, onClick: { enable: false }, resize: true },
  },
  detectRetina: true,
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section">

      {/* Particles behind */}
      <Particles className="hero-particles" options={particlesOptions} />

      {/* Image with animation */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
      >
        <img src={photo} alt="Joel Pigem" />
      </motion.div>


      {/* Content with animation */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, delay: 1, ease: "easeOut" }}
      >
        <h1>Hey, I'm <span>Joel Pigem</span></h1>
        <h2>Building beautiful apps for web & mobile</h2>

        <p>
          <Typewriter
            words={[
              "Web Developer",
              "Mobile App Creator",
              "UI Enthusiast",
              "AI Explorer",
              "Problem Solver",
              "Tech Lover"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={2000}
            aria-label="Professional titles cycling"
          />
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn color" aria-label="See my work">See My Work</a>
          <a href="#footer" className="btn transparent" aria-label="Let's talk">Let's Talk</a>
          <a href="/CV_JoelPigem.pdf" download className="btn glass" aria-label="Download CV">Download CV</a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        aria-hidden="true"
      >
        &#8675;
      </motion.div>
    </section>
  );
};

export default Hero;
