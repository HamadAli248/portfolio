import React, { Component } from 'react';
import { Tabs, Tab , Grid , Cell,Layout,Content} from 'react-mdl';
import { ReactProjects } from './projectLanuages/ReactProjects';
import { VanillaJavaScript } from './projectLanuages/VanillaJavaScript';
import { BasicChallenges } from './projectLanuages/BasicChallenges';
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
    }
   
    
    render() {
        return(
                <div className="category-tabs">
                    <div id="tabs">
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>  
                            <Tab id="text" >All Projects</Tab>
                            <Tab id="text">Java</Tab>
                            <Tab id="text">React</Tab>
                            <Tab id="text">MongoDB</Tab>
                            <Tab id="text">Vanilla Javascript</Tab>
                            <Tab id="text">Basic Challenges </Tab>
                        </Tabs>
                    </div>
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


     
