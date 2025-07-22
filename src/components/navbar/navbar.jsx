import React, { useEffect, useRef, useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* APLICA el ref AQUÍ para incluir tanto el menú como el botón hamburguesa */}
      <div className="navbar-container" ref={menuRef}>
        <div className="navbar-logo">
          <a href="#hero">Joel Pigem</a>
        </div>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About me</a>
          <a href="#projects" onClick={closeMenu}>My projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </div>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
