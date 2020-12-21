import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "../Pages/AboutMe";
import Project from "../Pages/Projects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={AboutMe} />
    <Route exact path="/portfolio" component={AboutMe} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Project} />
  </Switch>
);
export default Main;
