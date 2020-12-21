import React, { Component } from "react";
import Profile from "../../../images/GBuster.jpg";
import styles from "./Intro.module.css";

class Intro extends Component {
  render() {
    return (
      <div>
        <div className={styles.avatarImg} style={{ textAlign: "center" }}>
          <img src={Profile} alt="profile pic" style={{ height: "300px" }} />
        </div>
        <h2 style={{ paddingTop: "0.1em", color: "white" }}>Hamad Ali</h2>
        <h4 style={{ color: "grey" }}> Junior Software Engineer</h4>
      </div>
    );
  }
}
export default Intro;
