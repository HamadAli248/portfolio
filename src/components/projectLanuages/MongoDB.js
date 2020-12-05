import React from "react";
import ProjectCard from "./ProjectCard";
import urlMongoDB from "../images/challangesLogo/urlMongoDB.png";
import urlWeather from "../images/challangesLogo/urlWeather.png";

export const MongoDb = () => (
  <div className="project-grid" id="project-grid-MongoDb">
    <ProjectCard
      imgmyUrl={urlWeather}
      cardText="Weather App"
      GithubbuttonText="https://github.com/HamadAli248/Weather-App"
    />
    <ProjectCard
      imgmyUrl={urlMongoDB}
      cardText="learning how to connect to MongoDB and adding users into the database"
      GithubbuttonText="https://github.com/HamadAli248/learning-MongoDB"
    />
  </div>
);
