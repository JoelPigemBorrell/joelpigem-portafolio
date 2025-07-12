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
const projectsData = [
  {
    id: 1,
    title: "AI Car Price Advisor",
    description: "Web app built with React and TensorFlow to estimate used car prices.",
    longDescription: `AI Car Price Advisor is a web application that helps users estimate the value of a used car based on multiple parameters like brand, year, fuel type, mileage, and more. Built with React for the frontend and TensorFlow.js for the machine learning model, the app provides instant predictions using a trained regression model. It features a clean UI, responsive design, and real-time feedback to assist buyers and sellers in making informed decisions.`,
    images: [
      photoCarPrediction1, 
      photoCarPrediction2, 
      photoCarPrediction3, 
      photoCarPrediction4
    ],
    technologies: ["React", "TensorFlow"],
  },
  {
    id: 2,
    title: "SpotMap",
    description: "Android app to discover and share popular local spots.",
    longDescription: `SpotMap is a native Android app developed with Kotlin that allows users to explore and share points of interest. Users can view places on a map or in a list, and submit new locations. If a spot reaches a certain number of likes, it automatically gets featured on the map. This encourages community participation and discovery of unique, trending places nearby.`,
    images: [
      map,
      list,
      valideatepoints,
      addnewpoints,
      login
    ],
    technologies: ["Kotlin", "Android Studio", "Mapbox API", "Firebase"],
  },
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
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
