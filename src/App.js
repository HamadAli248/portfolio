import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";
import { Link } from "react-router-dom";
import CV from "./Pages/HamadAliCV.pdf";
import AboutMe from "./Pages/AboutMe.js";

function App() {
  return (
    <div className="demo-big-content">
      {AboutMe}
      <Layout>
        <Header
          className="header-color"
          title={
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/portfolio/"
            >
              Hamad Ali
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to={CV} target="_blank">
              Resume
            </Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/portfolio/"
            >
              Hamad Ali
            </Link>
          }
        >
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to={CV} target="_blank">
              Resume
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"></div>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}
export default App;
