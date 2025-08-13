import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container fade-in-up">
         <h2 className="about-title">About Me</h2>
        
        <p className="about-intro">
          I’m a passionate <span className="highlight">Full-Stack Developer</span> specialized in crafting modern, responsive, and user-friendly applications for both 
          <span className="highlight"> web</span> and <span className="highlight">mobile</span>.
        </p>

        <p className="about-body">
          My current toolkit includes <span className="highlight">React</span>, <span className="highlight">Angular</span>, <span className="highlight">Swift</span>, 
          <span className="highlight"> PHP</span>, and more — allowing me to build scalable solutions from the ground up.
        </p>

        <p className="about-body">
          I thrive on exploring new technologies, solving challenges, and turning ideas into impactful digital products. 
          Beyond coding, I draw inspiration from <span className="highlight">technology trends</span>, 
          <span className="highlight"> design</span>, and <span className="highlight">automotive innovation</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
