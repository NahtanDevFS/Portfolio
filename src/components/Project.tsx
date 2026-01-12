"use client";

import React, { useState } from "react";
import "./Project.css";

interface ProjectItemProps {
  images: string[];
  name: string;
  description: string;
  href_project: string;
  href_repo: string;
  technologies: Technology[];
  viewProjects: string;
  viewRepo: string;
}

interface Technology {
  name: string;
  iconUrl: string;
}

const Project: React.FC<ProjectItemProps> = ({
  images,
  name,
  description,
  href_project,
  href_repo,
  technologies,
  viewProjects,
  viewRepo,
}) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImage = () => {
    setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-img-container">
          <div className="projects-img-carousel">
            <button onClick={prevImage}>{"<"}</button>
            <img
              src={images[currentImg]}
              alt={`${name} screenshot`}
              className="projects-image"
            />
            <button onClick={nextImage}>{">"}</button>
          </div>
        </div>
        <div className="projects-desc-container">
          <h1 className="projects-desc-title">{name}</h1>
          <p className="projects-description">{description}</p>
          <div className="projects-tech-imgs-container">
            {technologies.map((tech) => (
              <img
                key={tech.name}
                src={tech.iconUrl}
                alt={tech.name}
                className="projects-tech-img"
              />
            ))}
          </div>
          <div className="projects-buttons-container">
            <button
              className="projects-button"
              onClick={() => handleButtonClick(href_project)}
            >
              {viewProjects}
            </button>
            <button
              className="projects-button"
              onClick={() => handleButtonClick(href_repo)}
            >
              {viewRepo}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
