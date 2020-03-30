import React from 'react';
import ProjectCard from './projectCard';
let urlCashMachine = "https://static.thenounproject.com/png/2077124-200.png";
let urlJavalogo = "https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png";
let urlDataBase="https://img.favpng.com/21/8/2/database-logo-png-favpng-AHZwNuJZ7YW8VpjPxL9xsx9wN.jpg";
let urlChatbox ="https://www.nicepng.com/png/detail/53-537477_chat-box-logo-chat-box-clip-art.png";
let urlTDD="https://marsner.com/wp-content/uploads/test-driven-development-TDD.png";

export const BasicChallengesInJava = () =>
                <div className="project-grid" id="project-grid-BasicChallengesInJava">
                     <ProjectCard
                        imgmyUrl = {urlDataBase}
                        cardText="Learning Databases and sending,requesting data from java to postgreSQL "                
                        GithubbuttonText="https://github.com/HamadAli248/databases"
                        
                    />
                    <ProjectCard
                        imgmyUrl = {urlCashMachine}
                        cardText="Cash machine 2 made through having multiple classes"                
                        GithubbuttonText="https://github.com/HamadAli248/cashMachine2"
                    />
                    <ProjectCard
                        imgmyUrl = {urlCashMachine}
                        cardText="Cash machine in java"                
                        GithubbuttonText="https://github.com/HamadAli248/CashMachine"
                    />
                    <ProjectCard
                        imgmyUrl = {urlTDD}
                        cardText="Learning Test Driven Development basic by building a calculator by writing tests First and then writing code to pass the tests"                
                        GithubbuttonText="https://github.com/HamadAli248/Test-Driven-Development-basic-Learning"
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
                        imgmyUrl = {urlJavalogo}
                        cardText="Learning java"                
                        GithubbuttonText="https://github.com/HamadAli248/java-practice"
                    />
                     <ProjectCard
                        imgmyUrl = {urlJavalogo}
                        cardText="rice-Bag-Challenge"                
                        GithubbuttonText="https://github.com/HamadAli248/rice-Bag-Challenge"
                    />
                     <ProjectCard
                        imgmyUrl = {urlJavalogo}
                        cardText="Learning java syntax"                
                        GithubbuttonText="https://github.com/HamadAli248/java"
                    />
                    <ProjectCard
                        imgmyUrl = {urlJavalogo}
                        cardText="OOP-in-java in week 1 of learning java"                
                        GithubbuttonText="https://github.com/HamadAli248/OOP-in-java"
                    />
                    <ProjectCard
                        imgmyUrl = {urlJavalogo}
                        cardText="Function-Challenges from week 1 f leaning java"                
                        GithubbuttonText="https://github.com/HamadAli248/Functions-challenges-in-java"
                    />
                    <ProjectCard
                        imgmyUrl = {urlJavalogo}
                        cardText="Presentation on some basic Java functionality"                
                        GithubbuttonText="https://github.com/HamadAli248/JavaPresentation"                     
                    />
                    <ProjectCard
                        imgmyUrl = {urlJavalogo}
                        cardText="If-else-Challenges from week 1 of leaning java"                
                        GithubbuttonText="https://github.com/HamadAli248/IfElse-challenges-in-java"
                    />
                    <ProjectCard
                        imgmyUrl = {urlJavalogo}
                        cardText="Variable-Challenges from week 1 of leaning java"                
                        GithubbuttonText="https://github.com/HamadAli248/Variables-Challenges-Java"
                    />
                    <ProjectCard
                        imgmyUrl = {urlJavalogo}
                        cardText="FizzBuzz-Challenge-In-Java in week 1 of learning java"                
                        GithubbuttonText="https://github.com/HamadAli248/FizzBuzz-Challenge-In-Java"                     
                    />
                </div>