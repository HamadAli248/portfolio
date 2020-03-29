import React from 'react';
import ProjectCard from './projectCard';

let urlMongoDB ="https://www.pngkit.com/png/detail/383-3838914_mongo-db-design-mongodb-logo-mongodb.png"
let urlWeather ="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"

export const MongoDb = () =>   
                    <div className="project-grid" id="project-grid-MongoDb">
                    <ProjectCard
                    imgmyUrl = {urlWeather}
                    cardText="Weather App"                
                    GithubbuttonText="https://github.com/HamadAli248/Weather-App"
                    />  
                    <ProjectCard
                        imgmyUrl = {urlMongoDB}
                        cardText="learning how to connect to MongoDB and adding users into the database"                
                        GithubbuttonText="https://github.com/HamadAli248/learning-MongoDB"
                    />

                    </div>