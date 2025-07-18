import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/hero/hero';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Navbar from './components/navbar/navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
