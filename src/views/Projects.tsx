import React from 'react'
import './Projects.css'
import Project from '@/components/Project'
import Project_right from '@/components/Project_right'

const Projects = ({ 
 }) => {

  return (
    <div className='projects-container'>
      <h1 className='projects-title'>Projects</h1>
      <Project 
        name="Basic management system for an electronics business" 
        description="This project was made with the purpose to create a system with several views and functions in React and able to connect to an API that was made with Laravel that connects to a database in MYSQL. All of the technologies that I used are: " 
        src_img="sales-system.png"
         href_project=""
         href_repo="https://github.com/NahtanDevFS/sales_system-reactjs"
         img_tech1="html.png"
         img_tech2="css.png"
         img_tech3="js.png"
         img_tech4="react.png"
         img_tech5="php.png"
         img_tech6="laravel.png"
         img_tech7="mysql.png"/>
        {/*<Project_right 
        name="Project 2" 
        description="This is the description of project 1, here I will explain in summary what is the projects and the technologies that I used." 
        src_img="image.jpg"
         href_project=""
         href_repo="https://github.com/NahtanDevFS/Portfolio"
         img_tech1="html.png"
         img_tech2="css.png"
         img_tech3="js.png"
         img_tech4="react.png"
         img_tech5="php.png"
         img_tech6="laravel.png"
         img_tech7="mysql.png"/>*/}
    </div>
  )
}

export default Projects;
