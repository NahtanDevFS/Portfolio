"use client";

import React from "react";
import "./Projects.css";
import Project from "@/components/Project";
import { projectsData } from "@/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";

const Projects = ({}) => {
  const { language, t } = useLanguage();
  const currentProjects = projectsData[language];
  return (
    <div className="projects-container">
      <h1 className="projects-title">{t.navbar.projects}</h1>
      {currentProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};

export default Projects;
