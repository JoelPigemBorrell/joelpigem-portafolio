import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './projects.css';
import ProjectModal from './projectModal/projectModal';
import stockeatsLogo from '../../assets/LogoStockEats.png';
import stockeats1 from '../../assets/1.png';
import stockeats2 from '../../assets/2.png';
import stockeats3 from '../../assets/3.png';
import stockeats4 from '../../assets/4.png';
import stockeats5 from '../../assets/5.png';
import photoCarPrediction1 from '../../assets/car1.png';
import photoCarPrediction2 from '../../assets/car2.png';
import photoCarPrediction3 from '../../assets/car3.png';
import login from '../../assets/login.png';
import map from '../../assets/map.png';
import list from '../../assets/list.png';
import addnewpoints from '../../assets/addnewpoints.png';
import validatepoints from '../../assets/validatepoints.png';
import cv1 from '../../assets/cv1.png';
import cv2 from '../../assets/cv2.png';
import daily1 from '../../assets/daily1.png';
import daily2 from '../../assets/daily2.png';
import daily3 from '../../assets/daily3.png';
import daily4 from '../../assets/daily4.png';
import daily5 from '../../assets/daily5.png';
import daily6 from '../../assets/daily6.png';
import daily7 from '../../assets/daily7.png';

const stockeats = {
  id: 0,
  title: 'Stockeats',
  subtitle: 'Smart Food Manager',
  description:
    'My biggest project — a native iOS app live on the App Store. Manage your pantry intelligently, track expiration dates, and reduce food waste with smart suggestions and notifications.',
  longDescription: `Stockeats is my most ambitious project to date — a fully native iOS app published on the App Store. It helps users manage their pantry, track expiration dates, and reduce food waste with smart notifications and recipe suggestions based on available ingredients.\n\nBuilt entirely in SwiftUI following Apple's Human Interface Guidelines, it features a clean and intuitive interface, Core Data persistence, and seamless UX. Getting an app approved and live on the App Store was one of my proudest achievements — from idea to production.`,
  technologies: ['SwiftUI', 'Swift', 'Core Data', 'UIKit', 'Xcode', 'App Store'],
  images: [stockeats1, stockeats2, stockeats3, stockeats4, stockeats5],
  logo: stockeatsLogo,
  appStore: 'https://apps.apple.com/es/app/stockeats-smart-food-manager/id6758019923',
  featured: true,
};

const projectsData = [
  {
    id: 1,
    title: 'DailyChallenges',
    description: 'Daily habits & challenges app — complete 5 tasks/day, earn points and level up.',
    longDescription: `DailyChallenges is a mobile app that delivers 5 daily challenges such as "wake up early" or "drink water". By completing these tasks, users earn points and level up. The app motivates users to build and maintain healthy habits every day.`,
    images: [daily1, daily2, daily3, daily4, daily5, daily6, daily7],
    technologies: ['React Native', 'Firebase', 'Lottie', 'React Navigation'],
  },
  {
    id: 2,
    title: 'AI Car Price Advisor',
    description: 'Web app using a TensorFlow regression model to estimate used car prices.',
    longDescription: `AI Car Price Advisor is a React-based web application that predicts the market value of used cars using a regression model developed with TensorFlow. It leverages real-world data to provide price estimates based on car make, model year, fuel type, and other key factors.`,
    images: [photoCarPrediction1, photoCarPrediction2, photoCarPrediction3],
    technologies: ['React', 'TensorFlow', 'Firebase'],
  },
  {
    id: 3,
    title: 'CVOnlineCreator',
    description: 'Intuitive web tool for creating professional resumes with live preview & PDF export.',
    longDescription: `CVOnlineCreator is a web platform that enables users to build polished, modern resumes using customizable templates. It features live preview, PDF export, and responsive design, making resume creation fast and easy for job seekers.`,
    images: [cv1, cv2],
    technologies: ['React', 'Bootstrap', 'html2pdf', 'Tailwind CSS'],
  },
  {
    id: 4,
    title: 'SpotMap',
    description: 'Android app for discovering & sharing popular spots with community voting.',
    longDescription: `SpotMap allows users to explore, add, and vote on popular locations through an interactive map interface. Developed in Kotlin with Firebase backend, the app highlights trending spots based on community votes to help users find the best places nearby.`,
    images: [map, list, validatepoints, addnewpoints, login],
    technologies: ['Kotlin', 'Firebase', 'Mapbox', 'Android Studio'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I've built</h2>
          <p className="section-subtitle">
            From App Store native apps to fullstack web platforms — here's a selection of my work.
          </p>
        </motion.div>
      </div>

      {/* Featured — Stockeats */}
      <motion.div
        className="featured-project"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        onClick={() => setSelectedProject(stockeats)}
      >
        <div className="featured-project-content">
          <div className="featured-badge">⭐ Featured Project</div>
          <h3>{stockeats.title}</h3>
          <p className="featured-subtitle">{stockeats.subtitle}</p>
          <p>{stockeats.description}</p>
          <div className="featured-tech">
            {stockeats.technologies.map(t => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
          <div className="featured-actions">
            <a
              href={stockeats.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-appstore"
              onClick={e => e.stopPropagation()}
            >
              🍎 App Store
            </a>
            <button className="btn-details" onClick={() => setSelectedProject(stockeats)}>
              View details →
            </button>
          </div>
        </div>
        <div className="featured-visual">
          <img src={stockeats.logo} alt="Stockeats logo" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'inherit'}} />
        </div>
      </motion.div>

      {/* Other projects grid */}
      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <motion.div
            key={project.id}
            className="project-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onClick={() => setSelectedProject(project)}
          >
            {project.images[0] && (
              <img
                src={project.images[0]}
                alt={project.title}
                className="project-card-img"
              />
            )}
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card-tech">
                {project.technologies.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
