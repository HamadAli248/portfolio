import React, { Component } from "react";
import { Card, CardText, CardTitle, CardActions, Button } from "react-mdl";
import styles from "./ProjectCard.module.css";

class ProjectCard extends Component {
  render(props) {
    return (
      <Card
        className="project-grid-initial"
        shadow={8}
        style={{
          maxWidth: "310px",
          maxheight: "300px",
          margin: "auto",
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background: "url(" + this.props.img + ") center / cover",
            backgroundSize: "100%",
            maxwidth: "100%",
            maxheight: "100%",
          }}
        />
        <CardText className={styles.cardText}>{this.props.cardText}</CardText>
        <CardActions id="buttontab" border>
          <a className={styles.button} href={this.props.gitHubButtonText}>
            <Button colored>Git Hub Code</Button>{" "}
          </a>
          <a className={styles.button} href={this.props.liveButtonText}>
            <Button colored>{this.props.liveButtonDisplay}</Button>{" "}
          </a>
        </CardActions>
      </Card>
    );
  }
}

export default ProjectCard;
