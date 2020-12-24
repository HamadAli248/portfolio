import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

class SkillsBar extends Component {
  render() {
    return (
      <div style={{ display: "flex", color: "black" }}>
        {this.props.skill}{" "}
        <BorderLinearProgress
          style={{ margin: "auto", width: "75%" }}
          variant="determinate"
          value={this.props.progress}
        />
      </div>
    );
  }
}
export default SkillsBar;
