import React from 'react';
import { Switch,Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contactme';
import Project from './projects';
import Resume from './resume';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/react-portfolio/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contactme" component={Contact} />
        <Route path="/projects" component={Project} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;
