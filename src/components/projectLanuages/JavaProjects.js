import React from 'react';
import ProjectCard from './projectCard';


let urlCalculator="https://coopervision.ca/sites/coopervision.ca/files/tc-calculator-icon.png?timestamp=1493161192"
let urlBrickbreaker = "https://img.favpng.com/10/16/14/brik-extreme-brick-breaking-brik-brick-breaker-super-brick-break-3d-brick-game-png-favpng-4dm5ngz0729B9TCeakTsuETef.jpg";
let urlDataBase="https://img.favpng.com/21/8/2/database-logo-png-favpng-AHZwNuJZ7YW8VpjPxL9xsx9wN.jpg";
let urlBooking="https://www.systembookings.com/wp-content/uploads/2017/05/System-Bookings-Contact-us-let-us-help-you-build-your-booking-system.png";

export const JavaProjects = () =>   
                    <div className="project-grid">
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
                        imgmyUrl = {urlDataBase}
                        cardText="Learning Databases and send,requesting data by APIs from postman"                
                        GithubbuttonText="https://github.com/HamadAli248/Databases-Demo"
                    />

                    </div>