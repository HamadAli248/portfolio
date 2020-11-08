import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    // code for skills (used in about me) ---- reduce repeated code
    return (
      <Grid>
        <Cell col={12}>
          {/* sill name : and precentage of knowledge */}
          <div style={{ display: "flex", color: "white" }}>
            {this.props.skill}{" "}
            <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={this.props.progress}
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}
export default Skills;
