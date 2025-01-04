'use client';

import React from 'react'
import './Project.css'

interface ProjectItemProps {
  src_img: string;
  name: string;
  description: string;
  href_project: string;
  href_repo: string;
  img_tech1: string;
  img_tech2: string;
  img_tech3: string;
  img_tech4: string;
  img_tech5: string;
  img_tech6: string;
  img_tech7: string;
}

const Project: React.FC<ProjectItemProps> = ({ 
  src_img, 
  name, 
  description, 
  href_project,
  href_repo,
  img_tech1,
  img_tech2,
  img_tech3,
  img_tech4,
  img_tech5,
  img_tech6,
  img_tech7
 }) => {

  const handleButtonClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className='projects-container'>
      <div className='projects-content'>
        <div className='projects-img-container'>
          <img src={src_img} alt='profile' className='projects-image'/>
        </div>
        <div className='projects-desc-container'>
          <h1 className='projects-desc-title'>{name}</h1>
          <p className='projects-description'>{description}</p>
          <div className='projects-tech-imgs-container'>
            <img src={img_tech1} className='projects-tech-img'/>
            <img src={img_tech2} className='projects-tech-img'/>
            <img src={img_tech3} className='projects-tech-img'/>
            <img src={img_tech4} className='projects-tech-img'/>
            <img src={img_tech5} className='projects-tech-img'/>
            <img src={img_tech6} className='projects-tech-img'/>
            <img src={img_tech7} className='projects-tech-img'/>
          </div>
          <div className='projects-buttons-container'>
            <button className='projects-button' onClick={() => handleButtonClick(href_project)}>View project</button>
            <button className='projects-button' onClick={() => handleButtonClick(href_repo)}>View code</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
