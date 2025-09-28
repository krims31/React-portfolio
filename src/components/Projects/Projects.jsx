import React from "react";
import Project from "./Project";
import { projects } from "../../data/projects";
import "./Projects.css";

const ProjectsList = () => {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <Project key={index} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
