import React from "react";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

const Project = ({ project }) => {
  if (!project) return null;

  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <ul className="project-tech-list">
        {project.tech.map((tech, index) => (
          <li key={index} className="project-tech-item">{tech}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
          <Github size={20} />
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
  );
};

export default Project;
