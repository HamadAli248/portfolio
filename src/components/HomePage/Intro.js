import React, { Component } from "react";
import styles from "./Intro.module.css";
import Button from "@material-ui/core/Button";
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
          <h2> I'm Hamad Ali.</h2>
          <h2> I am a Junior Software Engineer </h2>
          <div className={styles.buttonDiv}>
            <Button variant="outlined" color="inherit" size="medium">
              <Link className={styles.link} to="/aboutme">
                About Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
