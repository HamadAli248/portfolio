import React from "react";
import ProjectCard from "./ProjectCard";
import Weather from "../../../images/challengesLogo/Weather.png";
import Calculator from "../../../images/challengesLogo/Calculator.png";
import Booking from "../../../images/challengesLogo/booking.jpeg";
import Tetris from "../../../images/challengesLogo/Tetris.png";
import Calculators from "../../../images/challengesLogo/Calculator.png";
import Dice from "../../../images/challengesLogo/Dice.jpg";
import styles from "./Common.module.css";

export const Projects = () => (
  <div>
    <h1
      style={{
        color: "black",
        fontFamily: "lato",
        fontSize: "45px",
        fontWeight: "30",
      }}
    >
      Projects
    </h1>
    <div className={styles.projectGrid}>
      <ProjectCard
        img={Dice}
        cardText="First ever project built in Vanilla javascript, building a one and two player dice game."
        gitHubButtonText="https://github.com/HamadAli248/dicegame"
        liveButtonText="https://hamadali248.github.io/dicegame/"
        liveButtonDisplay="Live Demo"
      />
      <ProjectCard
        img={Calculators}
        cardText="Calculator"
        gitHubButtonText="https://github.com/HamadAli248/calculator"
        liveButtonText="https://hamadali248.github.io/calculator/"
        liveButtonDisplay="Live Demo"
      />
      <ProjectCard
        img={Tetris}
        cardText="Tetris Game"
        githubButtonText="https://github.com/HamadAli248/Tetris-Game"
        liveButtonText="https://hamadali248.github.io/Tetris-Game/"
        liveButtonDisplay="Live Demo"
      />
      <ProjectCard
        img={Booking}
        cardText="Group project of building Room Booking System application with Spring Boot and PostgreSQL database"
        gitHubButtonText="https://github.com/HamadAli248/RoomBookingSystem"
      />
      <ProjectCard
        img={Calculator}
        cardText="Mortgage Calculator calculating Monthly installments"
        gitHubButtonText="https://github.com/HamadAli248/MortgageCalculator-in-java"
      />
      <ProjectCard
        img={Weather}
        cardText="Weather App"
        gitHubButtonText="https://github.com/HamadAli248/Weather-App"
      />
    </div>
  </div>
);
