import React from 'react';
import './projectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const isFeatured = project.featured;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {isFeatured ? (
          /* Featured Stockeats header */
          <div className="modal-featured-header">
            <div className="modal-featured-icon">
              {project.logo
                ? <img src={project.logo} alt="Stockeats logo" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'inherit'}} />
                : '🥑'}
            </div>
            <div className="modal-featured-meta">
              <h2>{project.title}</h2>
              <p>{project.subtitle}</p>
            </div>
          </div>
        ) : null}

        <div className="modal-body">
          {!isFeatured && <h2 className="modal-title">{project.title}</h2>}

          <p className="modal-description">{project.longDescription}</p>

          <div className="modal-tech">
            {project.technologies.map((tech, i) => (
              <span key={i} className="modal-tech-tag">{tech}</span>
            ))}
          </div>

          {project.appStore && (
            <div className="modal-appstore-wrap">
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-appstore-btn"
              >
                🍎 Download on the App Store
              </a>
            </div>
          )}

          {project.images && project.images.length > 0 ? (
            <div className="modal-images">
              {project.images.map((img, i) => (
                <img key={i} src={img} alt={`${project.title} screenshot ${i + 1}`} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
