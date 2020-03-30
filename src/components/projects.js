import React, { Component } from 'react';
import { Tabs, Tab , Grid , Cell } from 'react-mdl';

import { ReactProjects } from './projectLanuages/ReactProjects';
import { VanillaJavaScript } from './projectLanuages/VanillaJavaScript';
import { BasicChallenges } from './projectLanuages/BasicChallenges';
import { BasicChallengesInJava } from './projectLanuages/BasicChallangesInJava';
import {JavaProjects } from './projectLanuages/JavaProjects';
import { MongoDb } from './projectLanuages/MongoDB';


class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }
       
    toggleCategories(){
            if(this.state.activeTab === 0){
                return(
                    <div className="all-projects">
                        <ReactProjects />
                        <JavaProjects/>
                        <VanillaJavaScript />
                        <MongoDb/>
                    </div>
                )
            }else if(this.state.activeTab === 1){
                return(
                <JavaProjects/>              
                )     
            }else if(this.state.activeTab === 2){
                return(
                    < ReactProjects />
                )
            }else if(this.state.activeTab === 3){
                return(
                    <MongoDb/>
                )
            }
            else if(this.state.activeTab === 4){
                return(
                    <VanillaJavaScript />
                )
            }else if(this.state.activeTab === 5){
                return(
                    <BasicChallenges />               
                )
            }
            else if(this.state.activeTab === 6){
                return(
                <BasicChallengesInJava />
                )
            }
    }
   
    
    render() {
        
        return(
            <div>
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                    <Tab>All Projects</Tab>
                    <Tab>Java</Tab>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Vanilla Javascript</Tab>
                    <Tab>Basic Challenges Javascript</Tab>
                    <Tab>Basic Challenges Java</Tab>
                    </Tabs>
                        <Grid >
                            <Cell col={12}>
                                <div className="content">{this.toggleCategories()}</div>
                            </Cell>
                        </Grid>
                </div>
                {/* <div className="category-tabs-select">
                    <select activeoption={this.state.activeoption} onChange={(optionId) => this.setState({activeoption:optionId})}>
                        <option>All Projects</option>
                        <option>Java</option>
                        <option>React</option>
                        <option>MongoDB</option>
                        <option>Vanilla Javascript</option>
                        <option>Basic Challenges Javascript</option>
                        <option>Basic Challenges Java</option> 
                    </select>
                    <Grid >
                            <Cell col={12}>
                                <div className="content">{this.toggleCategories()}</div>
                            </Cell>
                        </Grid>
                </div> */}
            </div>
            )
    }        
}
export default Projects;


     
