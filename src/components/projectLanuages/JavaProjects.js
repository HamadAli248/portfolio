import React from "react";
import ProjectCard from "./ProjectCard";
import urlCalculator from "../images/challangesLogo/urlCalculator.png";
import urlBrickbreaker from "../images/challangesLogo/brick-breaker.png";
import Booking from "../images/challangesLogo/booking.jpeg";
import urlChatbox from "../images/challangesLogo/urlChatbox.png";
import urlTDD from "../images/challangesLogo/urlTDD.png";
import urlDataBase from "../images/challangesLogo/urlDataBase.jpg";
export const JavaProjects = () => (
  <div className="project-grid" id="project-grid-JavaProjects">
    <ProjectCard
      imgmyUrl={Booking}
      cardText="Goup project of building Room Booking System application with Spring Boot and PostgreSQL database"
      GithubbuttonText="https://github.com/HamadAli248/RoomBookingSystem"
    />
    <ProjectCard
      imgmyUrl={urlBrickbreaker}
      cardText="Brick-Breaker"
      GithubbuttonText="https://github.com/HamadAli248/Brick-Breaker"
    />
    <ProjectCard
      imgmyUrl={urlCalculator}
      cardText="Mortgage Calculator calculating Monthlly installments"
      GithubbuttonText="https://github.com/HamadAli248/MortgageCalculator-in-java"
    />
    <ProjectCard
      imgmyUrl={urlCalculator}
      cardText="Calculator built in java"
      GithubbuttonText="https://github.com/HamadAli248/calculator-in-java"
    />
    <ProjectCard
      imgmyUrl={urlTDD}
      cardText="Test driven development challenge from code wars more info on github Repo"
      GithubbuttonText="https://github.com/HamadAli248/Killer-Garage-Door-Challenge"
    />
    <ProjectCard
      imgmyUrl={urlChatbox}
      cardText="Group project of building Chat box application"
      GithubbuttonText="https://github.com/HamadAli248/Chatbot"
    />
    <ProjectCard
      imgmyUrl={urlDataBase}
      cardText="Learning Databases and send,requesting data by APIs from postman"
      GithubbuttonText="https://github.com/HamadAli248/Databases-Demo"
    />
  </div>
);
