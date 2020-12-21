import React from "react";
import ProjectCard from "./ProjectCard";
import Calculator from "../../images/challengesLogo/Calculator.png";
import BrickBreaker from "../../images/challengesLogo/brick-breaker.png";
import Booking from "../../images/challengesLogo/booking.jpeg";
import ChatBox from "../../images/challengesLogo/ChatBox.png";
import TDD from "../../images/challengesLogo/TDD.png";
import DataBase from "../../images/challengesLogo/DataBase.jpg";
import styles from "./Common.module.css";

export const JavaProjects = () => (
  <div className={styles.projectGrid}>
    <ProjectCard
      img={Booking}
      cardText="Group project of building Room Booking System application with Spring Boot and PostgreSQL database"
      gitHubButtonText="https://github.com/HamadAli248/RoomBookingSystem"
    />
    <ProjectCard
      img={BrickBreaker}
      cardText="Brick-Breaker"
      gitHubButtonText="https://github.com/HamadAli248/Brick-Breaker"
    />
    <ProjectCard
      img={Calculator}
      cardText="Mortgage Calculator calculating monthly installments"
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
      gitHubButtonText="https://github.com/HamadAli248/Chatbot"
    />
    <ProjectCard
      img={DataBase}
      cardText="Learning Databases and send,requesting data by APIs from postman"
      gitHubButtonText="https://github.com/HamadAli248/Databases-Demo"
    />
  </div>
);
