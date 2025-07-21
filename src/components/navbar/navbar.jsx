import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Tu contenido de navegación */}
      <div className="navbar-container">
        <a href="#hero" className="logo">Joel Pigem</a>
        <a href="#about" className="logo">About me</a>
        <a href="#projects" className="logo">My projects</a>
        <a href="#skills" className="logo">Skills</a>
      </div>
    </nav>
  );
};

export default Navbar;
