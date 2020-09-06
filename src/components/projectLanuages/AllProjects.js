import React from 'react';
import ProjectCard from './projectCard';
import urlMongoDB from '../images/challangesLogo/urlMongoDB.png';
import urlWeather from '../images/challangesLogo/urlWeather.png';
import urlCalculator from '../images/challangesLogo/urlCalculator.png';
import urlBrickbreaker from '../images/challangesLogo/brick-breaker.png';
import urlBooking from '../images/challangesLogo/booking.jpeg';
import urlChatbox from '../images/challangesLogo/urlChatbox.png';
import urlTDD from '../images/challangesLogo/urlTDD.png';
import urlDataBase from '../images/challangesLogo/urlDataBase.jpg';
import urlinsta from '../images/challangesLogo/urlinsta.png';
import urlTetris from '../images/challangesLogo/urlTetris.png';
import urlCodeEditor from '../images/challangesLogo/urlCodeEditor.webp';
import urlBlog from '../images/challangesLogo/urlBlog.png';
import urlApi from '../images/challangesLogo/urlApi.png';
import urlcalculator from '../images/challangesLogo/urlCalculator.png';
import urlDice from '../images/challangesLogo/urlDice.jpg';
import urlPortfolio from '../images/challangesLogo/urlPortfolio.jpg';
import urlKeyCode from '../images/challangesLogo/urlKeyCode.png';

export const AllProjects = () =>   
                    <div className="project-grid" id="project-grid-MongoDb">
                         <ProjectCard
                    imgmyUrl = {urlDice}
                    cardText="First ever project built in Vanilla javascript, building a one and two player dice game."                
                    GithubbuttonText="https://github.com/HamadAli248/dicegame"
                    livebuttonText="https://hamadali248.github.io/dicegame/"
                    livebuttondisplay="Live Demo"
                    />  
                    <ProjectCard
                        imgmyUrl = {urlcalculator}
                        cardText="Calculator"                
                        GithubbuttonText="https://github.com/HamadAli248/calculator"
                        livebuttonText="https://hamadali248.github.io/calculator/"
                        livebuttondisplay="Live Demo"
                    />
                    <ProjectCard
                        imgmyUrl = {urlPortfolio}
                        cardText="Basic Project of building my portfolio"                
                        GithubbuttonText="https://github.com/HamadAli248/portfolio"
                        livebuttonText="https://hamadali248.github.io/basic-portfolio/"
                        livebuttondisplay="Live Demo"
                    />
                    <ProjectCard
                        imgmyUrl = {urlKeyCode}
                        cardText="Key-Code-Generator Created in week 3 of coding"                
                        GithubbuttonText="https://github.com/HamadAli248/Key-Code-Generator"
                        livebuttonText="https://hamadali248.github.io/Key-Code-Generator/"
                        livebuttondisplay="Live Demo"
                    />

                        <ProjectCard
                        imgmyUrl = {urlTetris}
                        cardText="Tetris Game"                
                        GithubbuttonText="https://github.com/HamadAli248/Tetris-Game"
                        livebuttonText="https://hamadali248.github.io/Tetris-Game/"
                        livebuttondisplay="Live Demo"
                    />
                    <ProjectCard
                        imgmyUrl = {urlinsta}
                        cardText="This was a group project working with react and building a copy of Instagram"                
                        GithubbuttonText="https://github.com/HamadAli248/insta"
                        livebuttonText="https://nicky7mp.github.io/instagram_clone/"
                        livebuttondisplay="Live Demo"
                    />
                    <ProjectCard
                        imgmyUrl = {urlCodeEditor}
                        cardText="This was a group project working with react and building a Code Editor"                
                        GithubbuttonText="https://github.com/HamadAli248/cn-editor"
                    />
                    <ProjectCard
                        imgmyUrl = {urlBlog}
                        cardText="Blog page Front-End with React"                
                        GithubbuttonText="https://github.com/HamadAli248/Blog-Page"
                    />
                    <ProjectCard
                        imgmyUrl = {urlApi}
                        cardText="Learning API with react"                
                        GithubbuttonText="https://github.com/HamadAli248/React-And-Api"
                    />
                      <ProjectCard
                    imgmyUrl = {urlBooking}
                    cardText="Goup project of building Room Booking System application with Spring Boot and PostgreSQL database"                
                    GithubbuttonText="https://github.com/HamadAli248/RoomBookingSystem"
                    />  
                    <ProjectCard
                    imgmyUrl = {urlBrickbreaker}
                    cardText="Brick-Breaker"                
                    GithubbuttonText="https://github.com/HamadAli248/Brick-Breaker"
                    />  
                    <ProjectCard
                        imgmyUrl = {urlCalculator}
                        cardText="Mortgage Calculator calculating Monthlly installments"                
                        GithubbuttonText="https://github.com/HamadAli248/MortgageCalculator-in-java"
                        
                    />
                    <ProjectCard
                        imgmyUrl = {urlCalculator}
                        cardText="Calculator built in java"                
                        GithubbuttonText="https://github.com/HamadAli248/calculator-in-java"
                    />
                     <ProjectCard
                        imgmyUrl = {urlTDD}
                        cardText="Test driven development challenge from code wars more info on github Repo"                
                        GithubbuttonText="https://github.com/HamadAli248/Killer-Garage-Door-Challenge"
                    />
                     <ProjectCard
                        imgmyUrl = {urlChatbox}
                        cardText="Group project of building Chat box application"                
                        GithubbuttonText="https://github.com/HamadAli248/Chatbot"
                    />
                    <ProjectCard
                        imgmyUrl = {urlDataBase}
                        cardText="Learning Databases and send,requesting data by APIs from postman"                
                        GithubbuttonText="https://github.com/HamadAli248/Databases-Demo"
                    />

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