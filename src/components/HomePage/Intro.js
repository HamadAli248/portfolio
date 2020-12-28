import React, { Component } from "react";
import styles from "./Intro.module.css";
import { Link } from "react-router-dom";

class Intro extends Component {
  render() {
    return (
      <div className={styles.intro}>
        <div className={styles.contentDiv}>
          <h1>
            Hello!{" "}
            <span role="img" aria-label="handWave" className={styles.wave}>
              👋🏾
            </span>
          </h1>
          <h1> I'm Hamad Ali. </h1>
          <h1> I am a Junior Software Engineer </h1>
          <div className={styles.buttonDiv}>
            <button className={styles.btn}>
              <Link className={styles.link} to="/aboutme">
                About Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
