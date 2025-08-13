import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Projects from './components/projects/projects';
import ExperienceEducation from './components/ExperienceEducation/experienceEducation';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ExperienceEducation />
      <Footer />
    </div>
  );
}
