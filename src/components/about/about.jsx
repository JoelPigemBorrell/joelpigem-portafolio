import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container fade-in-up">
        <h2>About Me</h2>
        <p>
          I'm a passionate <span className="highlight">Full-Stack Developer</span> with experience in both web and mobile development. I love building modern, responsive, and user-friendly applications.
        </p>
        <p>
          My current tech stack includes <span className="highlight">React</span>, <span className="highlight">Angular</span>, <span className="highlight">Swift</span>, <span className="highlight">PHP</span>, and more. I'm always eager to learn and face new challenges that help me grow.
        </p>
      </div>
    </section>
  );
};

export default About;
