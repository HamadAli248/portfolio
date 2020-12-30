import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "./Skills.module.css";

class SkillsBar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          color: "black",
          marginLeft: "1%",
          marginTop: "5px",
          fontFamily: "lato",
          fontSize: "25px",
          fontWeight: "30",
        }}
      >
        {this.props.skill}
        <LinearProgress
          className={styles.linearProgress}
          style={{
            height: "14px",
            margin: "auto",
            width: "60%",
            marginRight: "5px",
          }}
          variant="determinate"
          value={this.props.progress}
        />
      </div>
    );
  }
}
export default SkillsBar;
