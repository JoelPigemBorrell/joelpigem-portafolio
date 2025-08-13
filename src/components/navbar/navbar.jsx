import React, { useEffect, useRef, useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner" ref={menuRef}>
        <div className="navbar-logo">
          <a href="#hero">Joel Pigem<span className="dot">.</span></a>
        </div>

        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#footer" onClick={closeMenu} className="nav-cta">Contact</a>
        </div>

        <div
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
