import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "../Pages/AboutMe";
import HomePage from "../Pages/HomePage";
import ContactMe from "../Pages/ContactMe";
import Blogs from "../Pages/Blogs";
import Blog from "./BlogPage/Blog";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/portfolio" component={HomePage} />
    <Route path="/blogs" component={Blogs} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contactme" component={ContactMe} />
    <Route path="/dockerizing-a-react-application" component={Blog} />
  </Switch>
);
export default Main;
