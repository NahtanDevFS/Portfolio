import React from "react";
import "./Projects.css";
import Project from "@/components/Project";
import { projectsData } from "@/data/projectsData";

const Projects = ({}) => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      {projectsData.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};

export default Projects;
