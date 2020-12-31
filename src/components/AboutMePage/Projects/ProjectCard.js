import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styles from "./ProjectCard.module.css";

export function ProjectCard(props) {
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
        <button className={styles.btn}>
          <a className={styles.link} href={props.gitHubButtonText}>
            Git Hub
          </a>
        </button>
        <button className={styles.btn}>
          <a className={styles.link} href={props.liveButtonText}>
            {props.liveButtonDisplay}
          </a>
        </button>
      </CardActions>
    </Card>
  );
}
export function NoDemoProjectCard(props) {
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
        <button className={styles.btn}>
          <a className={styles.link} href={props.gitHubButtonText}>
            Git Hub
          </a>
        </button>
      </CardActions>
    </Card>
  );
}
