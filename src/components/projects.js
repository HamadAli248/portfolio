import React, { Component } from 'react';
import { Tabs, Tab , Grid , Cell } from 'react-mdl';
import ProjectCard from './projectCard';



class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }
    
    toggleCategories(){
        if(this.state.activeTab === 0){
        let urlinsta = "https://s3.amazonaws.com/ionic-marketplace/instaclone-ionic-instagram-theme/icon.png";
        let urlcalculator="https://coopervision.ca/sites/coopervision.ca/files/tc-calculator-icon.png?timestamp=1493161192"
        let urlTetris="https://editorial.designtaxi.com/editorial-images/news-logo11062019/1.png"
        let urlDice="https://cdn1.vectorstock.com/i/1000x1000/34/10/dice-line-icon-gambling-outline-logo-vector-19733410.jpg"
        
        return(
            <div className="project-grid">
            <ProjectCard
                myUrl = {urlinsta}
                cardText="This was a group project working with react and building a copy of Instagram"                
                GithubbuttonText="Github"
                livebuttonText="Live Demo"
            />
            <ProjectCard
                myUrl = {urlcalculator}
                cardText="Calculator built in React"                
                GithubbuttonText="Github"
                livebuttonText="Live Demo"
            />
            <ProjectCard
                myUrl = {urlTetris}
                cardText="Tetris game built in react"                
                GithubbuttonText="Github"
                livebuttonText="Live Demo"
            />
            
            <ProjectCard
                myUrl = {urlDice}
                cardText="First ever project built in Vanilla javascript, building a one and two player dice game."                
                GithubbuttonText="Github"
                livebuttonText="Live Demo"
            />
            </div>
        )
    }else if(this.state.activeTab === 1){
        let urlinsta = "https://s3.amazonaws.com/ionic-marketplace/instaclone-ionic-instagram-theme/icon.png";
        let urlcalculator="https://coopervision.ca/sites/coopervision.ca/files/tc-calculator-icon.png?timestamp=1493161192"
        let urlTetris="https://editorial.designtaxi.com/editorial-images/news-logo11062019/1.png"

        return(
            <div className="project-grid">
                <ProjectCard
                myUrl = {urlinsta}
                cardText="This was a group project working with react and building a copy of Instagram"                
                GithubbuttonText="Github"
                livebuttonText="Live Demo"
            />
            <ProjectCard
                myUrl = {urlcalculator}
                cardText="Calculator built in React"                
                GithubbuttonText="Github"
                livebuttonText="Live Demo"
            />
            <ProjectCard
                myUrl = {urlTetris}
                cardText="Tetris game built in react"                
                GithubbuttonText="Github"
                livebuttonText="Live Demo"
            />
            </div>
            
        )
    }else if(this.state.activeTab === 2){
        let urlDice="https://cdn1.vectorstock.com/i/1000x1000/34/10/dice-line-icon-gambling-outline-logo-vector-19733410.jpg"
        return(
            <div className="project-grid">
              <ProjectCard
                myUrl = {urlDice}
                cardText="First ever project built in Vanilla javascript, building a one and two player dice game."                
                GithubbuttonText="Github"
                livebuttonText="Live Demo"
               />  
            </div>
            
        )
    };
    }
    
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                <Tab>All Projects</Tab>
                <Tab>React</Tab>
                <Tab>Vanilla Javascript</Tab>
                </Tabs>
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}
export default Projects;


     
