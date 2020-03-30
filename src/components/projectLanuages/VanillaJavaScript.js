import React from 'react';
import ProjectCard from './projectCard';

let urlDice="https://cdn1.vectorstock.com/i/1000x1000/34/10/dice-line-icon-gambling-outline-logo-vector-19733410.jpg";
let urlPortfolio="https://www.happydesigner.co.uk/wp-content/uploads/2010/06/PortfolioMarketing-logo-1024x491.jpg";
let urlKeyCode = "https://img.icons8.com/pastel-glyph/2x/automotive-generator.png"
let urlcalculator="https://coopervision.ca/sites/coopervision.ca/files/tc-calculator-icon.png?timestamp=1493161192";


export const VanillaJavaScript = () =>   
                    <div className="project-grid" id="project-grid-VanillaJavaScript">
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
                        livebuttonText="https://hamadali248.github.io/portfolio/"
                        livebuttondisplay="Live Demo"
                    />
                    <ProjectCard
                        imgmyUrl = {urlKeyCode}
                        cardText="Key-Code-Generator Created in week 3 of coding"                
                        GithubbuttonText="https://github.com/HamadAli248/Key-Code-Generator"
                        livebuttonText="https://hamadali248.github.io/Key-Code-Generator/"
                        livebuttondisplay="Live Demo"
                    />

                    </div>