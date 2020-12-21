import React, { Component } from "react";
import { Header, Navigation, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import CV from "../../Pages/HamadAliCV.pdf";
import styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Header
          className={styles.headerColor}
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
      </div>
    );
  }
}
export default Navbar;
