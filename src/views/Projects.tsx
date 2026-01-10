import React from "react";
import "./Projects.css";
import Project from "@/components/Project";
//import Project_right from "@/components/Project_right";

const Projects = ({}) => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <Project
        name="Management system for a car repair shop business"
        description="Development of a comprehensive platform for inventory and sales management in a real commercial environment for an auto parts workshop and sales company; I designed a complex inventory system segmented by product type (units, bulk/liquids), a real-time sales dashboard, robust authentication system and route protection for different users. All of the technologies that I used are: "
        src_img="taller_franco_dashboard.jpg"
        href_project="https://taller-franco.vercel.app/"
        href_repo="https://github.com/NahtanDevFS/taller_franco.git"
        img_tech1="html.png"
        img_tech2="css.png"
        img_tech3="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/960px-Typescript_logo_2020.svg.png"
        img_tech4="nextjs.png"
        img_tech5="postgresql.png"
        img_tech6="supabase.webp"
        img_tech7="git.png"
      />
    </div>
  );
};

export default Projects;
