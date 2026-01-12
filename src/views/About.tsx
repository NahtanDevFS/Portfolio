"use client";

import React from "react";
import "./About.css";
import { useLanguage } from "@/context/LanguageContext";
import Skill_item from "@/components/Skill_item";

export default function Content() {
  const { t } = useLanguage();

  return (
    <div className="about-container">
      <h1 className="about-title">{t.about.title}</h1>
      <div className="about-content">
        <div className="about-info">
          <img src="image.jpg" alt="profile" className="about-image" />
          <p className="about-description">{t.about.description}</p>
        </div>
        <div className="about-skills">
          <div className="about-skill-row1">
            <Skill_item src_img="html.png" name="HTML" />
            <Skill_item src_img="css.png" name="CSS" />
            <Skill_item src_img="js.png" name="JAVASCRIPT" />
          </div>
          <div className="about-skill-row2">
            <Skill_item src_img="react.png" name="REACT" />
            <Skill_item src_img="nextjs.png" name="NEXT.JS" />
            <Skill_item
              src_img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/960px-Typescript_logo_2020.svg.png"
              name="TYPESCRIPT"
            />
            <Skill_item src_img="git.png" name="GIT" />
          </div>
          <div className="about-skill-row3">
            <Skill_item
              src_img="https://umangsoftware.com/wp-content/uploads/2020/05/SQL-logo.png"
              name="SQL"
            />
            <Skill_item
              src_img="https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png"
              name="PYTHON"
            />
            <Skill_item
              src_img="https://cdn.worldvectorlogo.com/logos/fastapi.svg"
              name="FASTAPI"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
