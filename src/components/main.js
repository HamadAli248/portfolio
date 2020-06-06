import React from 'react';
import { Switch,Route } from 'react-router-dom';
import AboutMe from './aboutme';
import Project from './projects';
import Resume from './resume';


const Main = () => (

    // main to add all the rouding to different paths from the URL
    <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/react-portfolio" component={AboutMe} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Project} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;
