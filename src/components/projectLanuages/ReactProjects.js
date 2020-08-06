import React from 'react';
import ProjectCard from './projectCard';
import urlinsta from '../images/challangesLogo/urlinsta.png'
import urlTetris from '../images/challangesLogo/urlTetris.png'
import urlCodeEditor from '../images/challangesLogo/urlCodeEditor.webp'
import urlBlog from '../images/challangesLogo/urlBlog.png'
import urlApi from '../images/challangesLogo/urlApi.png'

export const ReactProjects = () =>
                <div className="project-grid" id="project-grid-ReactProjects">
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
                </div>
    






