import React from "react";
import ProjectCard from "./ProjectCard";
import urlcalculator from "../images/challangesLogo/urlCalculator.png";
import urlDice from "../images/challangesLogo/urlDice.jpg";
import urlPortfolio from "../images/challangesLogo/urlPortfolio.jpg";
import urlKeyCode from "../images/challangesLogo/urlKeyCode.png";
import styles from "./Common.module.css";

export const VanillaJavaScript = () => (
  <div className={styles.projectGrid}>
    <ProjectCard
      imgmyUrl={urlDice}
      cardText="First ever project built in Vanilla javascript, building a one and two player dice game."
      GithubbuttonText="https://github.com/HamadAli248/dicegame"
      livebuttonText="https://hamadali248.github.io/dicegame/"
      livebuttondisplay="Live Demo"
    />
    <ProjectCard
      imgmyUrl={urlcalculator}
      cardText="Calculator"
      GithubbuttonText="https://github.com/HamadAli248/calculator"
      livebuttonText="https://hamadali248.github.io/calculator/"
      livebuttondisplay="Live Demo"
    />
    <ProjectCard
      imgmyUrl={urlPortfolio}
      cardText="Basic Project of building my portfolio"
      GithubbuttonText="https://github.com/HamadAli248/basic-portfolio"
      livebuttonText="https://hamadali248.github.io/basic-portfolio/"
      livebuttondisplay="Live Demo"
    />
    <ProjectCard
      imgmyUrl={urlKeyCode}
      cardText="Key-Code-Generator Created in week 3 of coding"
      GithubbuttonText="https://github.com/HamadAli248/Key-Code-Generator"
      livebuttonText="https://hamadali248.github.io/Key-Code-Generator/"
      livebuttondisplay="Live Demo"
    />
  </div>
);
