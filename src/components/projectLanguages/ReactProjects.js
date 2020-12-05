import React from "react";
import ProjectCard from "./ProjectCard";
import Instagram from "../images/challengesLogo/Instagram.png";
import Tetris from "../images/challengesLogo/Tetris.png";
import CodeEditor from "../images/challengesLogo/CodeEditor.webp";
import Blog from "../images/challengesLogo/Blog.png";
import Api from "../images/challengesLogo/Api.png";
import styles from "./Common.module.css";

export const ReactProjects = () => (
  <div className={styles.projectGrid}>
    <ProjectCard
      img={Tetris}
      cardText="Tetris Game"
      gitHubButtonText="https://github.com/HamadAli248/Tetris-Game"
      liveButtonText="https://hamadali248.github.io/Tetris-Game/"
      liveButtonDisplay="Live Demo"
    />
    <ProjectCard
      img={Instagram}
      cardText="This was a group project working with react and building a copy of Instagram"
      gitHubButtonText="https://github.com/HamadAli248/insta"
      liveButtonText="https://nicky7mp.github.io/instagram_clone/"
      liveButtonDisplay="Live Demo"
    />
    <ProjectCard
      img={CodeEditor}
      cardText="This was a group project working with react and building a Code Editor"
      gitHubButtonText="https://github.com/HamadAli248/cn-editor"
    />
    <ProjectCard
      img={Blog}
      cardText="Blog page Front-End with React"
      gitHubButtonText="https://github.com/HamadAli248/Blog-Page"
    />
    <ProjectCard
      img={Api}
      cardText="Learning API with react"
      gitHubButtonText="https://github.com/HamadAli248/React-And-Api"
    />
  </div>
);
