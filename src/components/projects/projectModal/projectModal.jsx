import React from 'react';
import './projectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-fullscreen" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>

        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.longDescription}</p>

        <div className="tech-stack">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="image-grid">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt={`Screenshot ${index + 1}`} className="grid-image" />
          ))}
        </div>

        {project.links && (
          <div className="modal-links">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">Ver demo</a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
