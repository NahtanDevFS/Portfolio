"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import "./Navbar.css";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const handleMenuClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="navbar-container">
      <h1 className="navbar-name">Jonathan</h1>
      <div
        id="navbar-links"
        className={clicked ? "#navbar-links active" : "#navbar-links"}
      >
        <a href="#home">{t.navbar.home}</a>
        <a href="#about">{t.navbar.about}</a>
        <a href="#projects">{t.navbar.projects}</a>
        <a href="#contact">{t.navbar.contact}</a>
        <button onClick={toggleLanguage} className="language-button">
          {language === "en" ? "ES" : "EN"}
        </button>
      </div>
      <div className="navbar-mobile">
        <img
          className={clicked ? "menu-closed" : "menu-open"}
          src="menu-portfolio.png"
          alt="menu"
          id="img-menu"
          onClick={handleMenuClick}
        />
        <img
          className={clicked ? "menu-open" : "menu-closed"}
          src="X-portfolio.png"
          alt="close"
          onClick={handleMenuClick}
        />
      </div>
    </div>
  );
}
