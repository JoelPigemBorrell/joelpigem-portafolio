import React from 'react';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaSwift, FaPhp,
  FaJava, FaWordpress
} from "react-icons/fa";
import {
  SiTypescript, SiFirebase, SiJavascript, SiAngular, SiKotlin, SiAndroidstudio
} from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md"; // para UIKit y SwiftUI genéricos

import './Skills.css';

const skillCategories = {
  "Frontend": ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Angular"],
  "Backend": ["Node.js", "PHP", "Firebase"],
  "Mobile": ["Swift", "SwiftUI", "UIKit", "Kotlin", "Android Studio", "Java"],
  "CMS / Tools": ["WordPress", "Git"]
};

const skillIcons = {
  HTML: <FaHtml5 color="#e34c26" />,
  CSS: <FaCss3Alt color="#264de4" />,
  JavaScript: <SiJavascript color="#f7df1e" />,
  React: <FaReact color="#61dafb" />,
  TypeScript: <SiTypescript color="#3178c6" />,
  Angular: <SiAngular color="#dd0031" />,
  "Node.js": <FaNodeJs color="#68a063" />,
  PHP: <FaPhp color="#8892be" />,
  Firebase: <SiFirebase color="#ffcb2b" />,
  Swift: <FaSwift color="#fa7343" />,
  SwiftUI: <MdDeveloperMode color="#0f62fe" />,
  UIKit: <MdDeveloperMode color="#4b4b4b" />,
  Kotlin: <SiKotlin color="#7f52ff" />,
  "Android Studio": <SiAndroidstudio color="#3ddc84" />,
  Java: <FaJava color="#007396" />,
  WordPress: <FaWordpress color="#21759b" />,
  Git: <FaGitAlt color="#f1502f" />
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skill-groups">
        {Object.entries(skillCategories).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul className="skills-list">
              {items.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skillIcons[skill] && <span className="icon">{skillIcons[skill]}</span>}
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
