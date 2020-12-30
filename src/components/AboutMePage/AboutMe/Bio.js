import React, { Component } from "react";
import Profile from "../../../images/GBuster.jpg";
import styles from "./Bio.module.css";
import { Link } from "react-router-dom";

class Bio extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.item} id={styles.profileImage}>
          <img
            src={Profile}
            alt="profile pic"
            style={{
              height: "300px",
              borderRadius: "100%",
              marginTop: "5%",
              border: "7px solid #555",
            }}
          />
        </div>
        <div className={styles.item} id={styles.bio}>
          <p>
            Currently I am on a 15 months Apprenticeship at{" "}
            <a href="https://www.dmwgroup.com/">DMW Group a Credera Company</a>
            <br />
            I have a huge passion for Frontend development.
            <br />
            <Link to="/contactme">Lets Build something</Link>
          </p>
        </div>
      </div>
    );
  }
}
export default Bio;
