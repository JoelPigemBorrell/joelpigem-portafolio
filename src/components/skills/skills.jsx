import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaSwift, FaPhp, FaJava, FaWordpress,
} from 'react-icons/fa';
import {
  SiTypescript, SiFirebase, SiJavascript, SiAngular, SiKotlin, SiAndroidstudio, SiSwift,
} from 'react-icons/si';
import { MdDeveloperMode } from 'react-icons/md';
import './skills.css';

const categories = [
  {
    label: 'iOS & Mobile',
    primary: true,
    skills: [
      { name: 'SwiftUI', icon: <SiSwift color="#fa7343" />, highlight: true },
      { name: 'Swift', icon: <FaSwift color="#fa7343" />, highlight: true },
      { name: 'UIKit', icon: <MdDeveloperMode color="#fa7343" />, highlight: true },
      { name: 'Xcode', icon: <MdDeveloperMode color="#1c7bef" /> },
      { name: 'Kotlin', icon: <SiKotlin color="#7f52ff" /> },
      { name: 'Android Studio', icon: <SiAndroidstudio color="#3ddc84" /> },
      { name: 'Java', icon: <FaJava color="#007396" /> },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact color="#61dafb" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
      { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" /> },
      { name: 'Angular', icon: <SiAngular color="#dd0031" /> },
      { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
      { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
    ],
  },
  {
    label: 'Backend & Cloud',
    skills: [
      { name: 'Firebase', icon: <SiFirebase color="#ffcb2b" /> },
      { name: 'Node.js', icon: <FaNodeJs color="#68a063" /> },
      { name: 'PHP', icon: <FaPhp color="#8892be" /> },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt color="#f1502f" /> },
      { name: 'WordPress', icon: <FaWordpress color="#21759b" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-inner">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">My tech stack</h2>
          <p className="section-subtitle">
            iOS & SwiftUI first — with the fullstack range to build anything.
          </p>
        </motion.div>

        <div className="skills-categories">
          {categories.map((cat, ci) => (
            <React.Fragment key={cat.label}>
              <motion.div
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
              >
                <div className={`skill-category-label${cat.primary ? ' primary' : ''}`}>
                  <h3>{cat.label}</h3>
                </div>
                <div className="skill-pills">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className={`skill-pill${skill.highlight ? ' highlighted' : ''}`}>
                      <span className="skill-pill-icon">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
              {ci < categories.length - 1 && <div className="skills-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
