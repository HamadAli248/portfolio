import React from 'react';
import ProjectCard from './projectCard';

let urlinsta = "https://s3.amazonaws.com/ionic-marketplace/instaclone-ionic-instagram-theme/icon.png";
let urlTetris="https://editorial.designtaxi.com/editorial-images/news-logo11062019/1.png";
let urlCodeEditor ="https://cdn4.iconfinder.com/data/icons/flaturici-set-2/512/code-512.png";
let urlBlog ="https://www.revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png";
let urlApi ="https://pngimage.net/wp-content/uploads/2018/05/api-logo-png-4.png";
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
    






