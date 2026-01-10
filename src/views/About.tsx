import React from "react";
import "./About.css";
import Skill_item from "@/components/Skill_item";

export default function Content() {
  return (
    <div className="about-container">
      <h1 className="about-title">About me</h1>
      <div className="about-content">
        <div className="about-info">
          <img src="image.jpg" alt="profile" className="about-image" />
          <p className="about-description">
            Hi, I&apos;m Jonathan and I&apos;m 20 years old. I&apos;m currently
            studying a degree in Systems Engineering and Computer Science. I
            like everything related to Web development, which is why apart from
            university I learn technologies such as HTML, CSS, JavaScript,
            TYPESCRIPT, SQL, GIT, GITHUB, PYTHON and frameworks such as REACT,
            NEXT.JS and FASTAPI on my own. The language that I have used the
            most is Typescript.
          </p>
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
