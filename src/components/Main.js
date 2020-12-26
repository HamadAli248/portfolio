import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "../Pages/AboutMe";
import Project from "../Pages/Projects";
import HomePage from "../Pages/HomePage";
import ContactMe from "../Pages/ContactMe";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/portfolio" component={HomePage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Project} />
    <Route path="/contactme" component={ContactMe} />
  </Switch>
);
export default Main;
