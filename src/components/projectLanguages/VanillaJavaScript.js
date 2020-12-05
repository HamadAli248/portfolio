import React from "react";
import ProjectCard from "./ProjectCard";
import Calculator from "../images/challengesLogo/Calculator.png";
import Dice from "../images/challengesLogo/Dice.jpg";
import Portfolio from "../images/challengesLogo/Portfolio.jpg";
import KeyCode from "../images/challengesLogo/KeyCode.png";
import styles from "./Common.module.css";

export const VanillaJavaScript = () => (
  <div className={styles.projectGrid}>
    <ProjectCard
      img={Dice}
      cardText="First ever project built in Vanilla javascript, building a one and two player dice game."
      gitHubButtonText="https://github.com/HamadAli248/dicegame"
      liveButtonText="https://hamadali248.github.io/dicegame/"
      liveButtonDisplay="Live Demo"
    />
    <ProjectCard
      img={Calculator}
      cardText="Calculator"
      gitHubButtonText="https://github.com/HamadAli248/calculator"
      liveButtonText="https://hamadali248.github.io/calculator/"
      liveButtonDisplay="Live Demo"
    />
    <ProjectCard
      img={Portfolio}
      cardText="Basic Project of building my portfolio"
      gitHubButtonText="https://github.com/HamadAli248/basic-portfolio"
      liveButtonText="https://hamadali248.github.io/basic-portfolio/"
      liveButtonDisplay="Live Demo"
    />
    <ProjectCard
      img={KeyCode}
      cardText="Key-Code-Generator Created in week 3 of coding"
      gitHubButtonText="https://github.com/HamadAli248/Key-Code-Generator"
      liveButtonText="https://hamadali248.github.io/Key-Code-Generator/"
      liveButtonDisplay="Live Demo"
    />
  </div>
);
