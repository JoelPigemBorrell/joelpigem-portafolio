import React, { useState } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);
  if (!project) return null;

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>

        {/* Carrusel */}
        <div className="carousel">
          <button className="carousel-btn left" onClick={prevImage}>‹</button>
          <img src={project.images[currentImage]} alt="Project preview" className="carousel-img" />
          <button className="carousel-btn right" onClick={nextImage}>›</button>
        </div>

        <h2>{project.title}</h2>
        <p>{project.longDescription}</p>

        <div className="tech-stack">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
