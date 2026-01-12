"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import "./Home.css";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="home-container">
      <div className="home-title">
        <h1>
          {t.home.greeting}
          <span>{t.home.name}</span>
        </h1>
        <br></br>
        <div className="home-paragraph">{t.home.role}</div>
      </div>
    </div>
  );
}
