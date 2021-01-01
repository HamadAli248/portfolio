import React, { Component } from "react";
import styles from "./SocialLinks.module.css";

class SocialLinks extends Component {
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.icon}>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </div>
        <div className={styles.text}>
          <h3>Address</h3>
          <p>Manchester, UK</p>
        </div>
        <div className={styles.icon}>
          <a href="https://www.instagram.com/hamad_4li/">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <div className={styles.text}>
          <h3>Instagram</h3>
          <p>hamad_4li</p>
        </div>
        <div className={styles.icon}>
          <a href="https://www.linkedin.com/in/hamad-ali-5069b518a/">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <div className={styles.text}>
          <h3>Linkedin</h3>
          <p>Hamad Ali</p>
        </div>
        <div className={styles.icon}>
          <a href="https://github.com/HamadAli248">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </div>
        <div className={styles.text}>
          <h3>GitHub</h3>
          <p>HamadAli248</p>
        </div>
      </div>
    );
  }
}
export default SocialLinks;
