import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

export default function BlogsHomePage(props) {
  return (
    <Card className={styles.blogCard}>
      <CardActionArea>
        <CardMedia
          className={styles.imageDiv}
          component="img"
          alt="image"
          image={props.img}
          title={props.title}
        />
      </CardActionArea>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.cardText}>{props.cardText}</p>
      <Link className={styles.link} to={props.link}>
        <button>Read More</button>
      </Link>
    </Card>
  );
}
