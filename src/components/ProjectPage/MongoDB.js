import React from "react";
import ProjectCard from "./ProjectCard";
import MongoDB from "../../images/challengesLogo/MongoDB.png";
import Weather from "../../images/challengesLogo/Weather.png";
import styles from "./Common.module.css";

export const MongoDb = () => (
  <div className={styles.projectGrid}>
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
