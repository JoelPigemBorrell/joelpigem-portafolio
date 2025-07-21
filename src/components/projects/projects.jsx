import React, { useState } from 'react';
import './projects.css';
import ProjectModal from './projectModal/projectModal';
import photoCarPrediction1 from '../../assets/Information1.png'
import photoCarPrediction2 from '../../assets/Information2.png'
import photoCarPrediction3 from '../../assets/Car.png'
import photoCarPrediction4 from '../../assets/model.png'
import login from "../../assets/login.png";
import map from "../../assets/map.png";
import list from "../../assets/list.png";
import addnewpoints from "../../assets/addnewpoints.png";
import valideatepoints from "../../assets/validatepoints.png";
import cv1 from "../../assets/cv1.png";
import cv2 from "../../assets/cv2.png";
import daily1 from "../../assets/daily1.png";
import daily2 from "../../assets/daily2.png";
import daily3 from "../../assets/daily3.png";
import daily4 from "../../assets/daily4.png";
import daily5 from "../../assets/daily5.png";
import daily6 from "../../assets/daily6.png";
import daily7 from "../../assets/daily7.png";

const projectsData = [
  {
    id: 1,
    title: "DailyChallenges",
    description: "A daily habits and challenges app designed to boost consistency.",
    longDescription: `DailyChallenges is a mobile app that delivers 5 daily challenges such as "wake up early" or "drink water". By completing these tasks, users earn points and level up. The app motivates users to build and maintain healthy habits every day.`,
    images: [daily1, daily2, daily3, daily4, daily5, daily6, daily7],
    technologies: ["React Native", "Firebase", "Lottie", "React Navigation"],
  },
  {
    id: 2,
    title: "AI Car Price Advisor",
    description: "A web app using AI to accurately estimate used car prices.",
    longDescription: `AI Car Price Advisor is a React-based web application that predicts the market value of used cars using a regression model developed with TensorFlow. It leverages real-world data to provide price estimates based on car make, model year, fuel type, and other key factors.`,
    images: [photoCarPrediction1, photoCarPrediction2, photoCarPrediction3, photoCarPrediction4],
    technologies: ["React", "TensorFlow", "Firebase"],
  },
  {
    id: 3,
    title: "CVOnlineCreator",
    description: "An intuitive web tool for creating professional resumes.",
    longDescription: `CVOnlineCreator is a web platform that enables users to build polished, modern resumes using customizable templates. It features live preview, PDF export, and responsive design, making resume creation fast and easy for job seekers.`,
    images: [cv1, cv2],
    technologies: ["React", "Bootstrap", "html2pdf", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "SpotMap",
    description: "An Android app for discovering and sharing popular spots.",
    longDescription: `SpotMap allows users to explore, add, and vote on popular locations through an interactive map interface. Developed in Kotlin with Firebase backend, the app highlights trending spots based on community votes to help users find the best places nearby.`,
    images: [map, list, valideatepoints, addnewpoints, login],
    technologies: ["Kotlin", "Firebase", "Mapbox", "Android Studio"],
  },
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <p className="projects-info">
        Click on any project card below to see more detailed information, images, and technologies used.
      </p>
      <div className="projects-container">
        {projectsData.map(project => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.images[0]} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
