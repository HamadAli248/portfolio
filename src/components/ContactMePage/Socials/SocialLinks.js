import React, { Component } from "react";
import styles from "./SocialLinks.module.css";

class SocialLinks extends Component {
  render() {
    return (
      <div>
        <div className={styles.box}>
          <div className={styles.icon}>
            <a href="https://www.youtube.com/channel/UCN_OcMzC6QvNVmyIPgwgBaA">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </div>
          <div className={styles.text}>
            <a href="https://www.youtube.com/channel/UCN_OcMzC6QvNVmyIPgwgBaA">
              <h3>Hamad Ali</h3>
            </a>
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
            <a href="https://twitter.com/Hamad_4li?s=03">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
          <div className={styles.text}>
            <a href="https://twitter.com/Hamad_4li?s=03">
              <h3>hamad_4li</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default SocialLinks;
