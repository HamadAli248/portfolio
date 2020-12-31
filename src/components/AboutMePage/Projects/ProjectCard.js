import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  return (
    <Card className={styles.root}>
      <CardActionArea>
        <CardMedia
          className={styles.imageDiv}
          component="img"
          alt="project logo"
          image={props.img}
          title={props.certTitle}
        />
      </CardActionArea>
      <CardContent>
        <Typography
          className={styles.title}
          gutterBottom
          variant="h5"
          component="h1"
        >
          {props.cardTitle}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          className={styles.text}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {props.cardText}
        </Typography>
      </CardContent>
      <CardActions>
        <a className={styles.button} href={props.gitHubButtonText}>
          <Button colored>Git Hub</Button>{" "}
        </a>
        <a className={styles.button} href={props.liveButtonText}>
          <Button colored>{props.liveButtonDisplay}</Button>{" "}
        </a>
      </CardActions>
    </Card>
  );
}
