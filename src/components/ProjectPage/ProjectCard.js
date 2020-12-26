import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./ProjectCard.module.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  title: {
    color: "black",
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.img}
          title={props.certTitle}
        />
      </CardActionArea>
      <CardContent>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {props.cardText}
        </Typography>
      </CardContent>
      <CardActions>
        <a className={styles.button} href={props.gitHubButtonText}>
          <Button colored>Git Hub Code</Button>{" "}
        </a>
        <a className={styles.button} href={props.liveButtonText}>
          <Button colored>{props.liveButtonDisplay}</Button>{" "}
        </a>
      </CardActions>
    </Card>
  );
}
