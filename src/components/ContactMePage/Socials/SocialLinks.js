import React, { Component } from "react";
import styles from "./SocialLinks.module.css";

class SocialLinks extends Component {
  render() {
    return (
      <div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <div className={styles.text}>
            <h3>Manchester, UK</h3>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <a href="https://www.instagram.com/hamad_4li/">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
          <div className={styles.text}>
            <a href="https://www.instagram.com/hamad_4li/">
              <h3>hamad_4li</h3>
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <a href="https://www.linkedin.com/in/hamad-ali-5069b518a/">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
          <div className={styles.text}>
            <a href="https://www.linkedin.com/in/hamad-ali-5069b518a/">
              <h3>Hamad Ali</h3>
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <a href="https://github.com/HamadAli248">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
          </div>
          <div className={styles.text}>
            <a href="https://github.com/HamadAli248">
              <h3>HamadAli248</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default SocialLinks;
