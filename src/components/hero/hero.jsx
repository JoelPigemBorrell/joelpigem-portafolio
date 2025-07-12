import React, { useState, useEffect } from "react";
import './hero.css';
import photo from '../../assets/photoPersonal.jpg';



const TypingEffect = ({ text, speed = 50
  
 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};


const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
       <h1 className="fade-in-up">
          Hi, I'm <span>Joel Pigem</span>
        </h1>
        <h2 className="fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          Web & Mobile Developer
        </h2>
        <p className="fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <TypingEffect text="I create modern digital experiences using React, Angular, SwiftUI, AndroidStudio, PHP and more." />
        </p>
          <div className="hero-image">
            <img src={photo} alt="Joel Pigem" />
          </div>
        <div className="hero-buttons">
          <a href="#projects" className="btn color">View Projects</a>
          <a href="#contact" className="btn transparent">Contact Me</a>
        </div>
      </div>
      <div className="scroll-indicator">
      <span>&#8595;</span>
    </div>

    </section>
    
  );
};

export default Hero;
