import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "./Skills.module.css";

class SkillsBar extends Component {
  render() {
    return (
      <div style={{ display: "flex", color: "black", marginLeft: "1%" }}>
        {this.props.skill}
        <LinearProgress
          className={styles.linearProgress}
          style={{
            height: "14px",
            margin: "auto",
            width: "70%",
            borderRadius: "3px",
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
