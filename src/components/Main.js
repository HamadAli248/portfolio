import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "../Pages/AboutMe";
import Project from "../Pages/Projects";
import HomePage from "../Pages/HomePage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/portfolio" component={AboutMe} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Project} />
  </Switch>
);
export default Main;
