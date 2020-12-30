import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./Certifications.module.css";

export default function CertificationCard(props) {
  return (
    <Card className={styles.cardDiv}>
      <CardActionArea className={styles.imageDiv}>
        <CardMedia
          component="img"
          alt="logo"
          image={props.img}
          title={props.certTitle}
        />
      </CardActionArea>
      <CardContent className={styles.titleDiv}>
        <Typography
          className={styles.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {props.certTitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          style={{ margin: "0 auto", padding: "20px" }}
          href={props.certURL}
          colored
        >
          {" "}
          View Certification
        </Button>
      </CardActions>
    </Card>
  );
}
