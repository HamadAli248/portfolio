import React from "react";
import ProjectCard from "./ProjectCard";
import MongoDB from "../../images/challengesLogo/MongoDB.png";
import Weather from "../../images/challengesLogo/Weather.png";
import Calculator from "../../images/challengesLogo/Calculator.png";
import BrickBreaker from "../../images/challengesLogo/brick-breaker.png";
import Booking from "../../images/challengesLogo/booking.jpeg";
import ChatBox from "../../images/challengesLogo/ChatBox.png";
import TDD from "../../images/challengesLogo/TDD.png";
import DataBase from "../../images/challengesLogo/DataBase.jpg";
import Instagram from "../../images/challengesLogo/Instagram.png";
import Tetris from "../../images/challengesLogo/Tetris.png";
import CodeEditor from "../../images/challengesLogo/CodeEditor.webp";
import Blog from "../../images/challengesLogo/Blog.png";
import Api from "../../images/challengesLogo/Api.png";
import Calculators from "../../images/challengesLogo/Calculator.png";
import Dice from "../../images/challengesLogo/Dice.jpg";
import Portfolio from "../../images/challengesLogo/Portfolio.jpg";
import KeyCode from "../../images/challengesLogo/KeyCode.png";
import styles from "./Common.module.css";

export const AllProjects = () => (
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

    <ProjectCard
      img={Tetris}
      cardText="Tetris Game"
      githubButtonText="https://github.com/HamadAli248/Tetris-Game"
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
    <ProjectCard
      img={Booking}
      cardText="Goup project of building Room Booking System application with Spring Boot and PostgreSQL database"
      gitHubButtonText="https://github.com/HamadAli248/RoomBookingSystem"
    />
    <ProjectCard
      img={BrickBreaker}
      cardText="Brick-Breaker"
      gitHubButtonText="https://github.com/HamadAli248/Brick-Breaker"
    />
    <ProjectCard
      img={Calculator}
      cardText="Mortgage Calculator calculating Monthly installments"
      gitHubButtonText="https://github.com/HamadAli248/MortgageCalculator-in-java"
    />
    <ProjectCard
      img={Calculator}
      cardText="Calculator built in java"
      gitHubButtonText="https://github.com/HamadAli248/calculator-in-java"
    />
    <ProjectCard
      img={TDD}
      cardText="Test driven development challenge from code wars more info on github Repo"
      gitHubButtonText="https://github.com/HamadAli248/Killer-Garage-Door-Challenge"
    />
    <ProjectCard
      img={ChatBox}
      cardText="Group project of building Chat box application"
      GithubbuttonText="https://github.com/HamadAli248/Chatbot"
    />
    <ProjectCard
      img={DataBase}
      cardText="Learning Databases and send,requesting data by APIs from postman"
      gitHubButtonText="https://github.com/HamadAli248/Databases-Demo"
    />

    <ProjectCard
      img={Weather}
      cardText="Weather App"
      gitHubButtonText="https://github.com/HamadAli248/Weather-App"
    />
    <ProjectCard
      img={MongoDB}
      cardText="learning how to connect to MongoDB and adding users into the database"
      gitHubButtonText="https://github.com/HamadAli248/learning-MongoDB"
    />
  </div>
);
