import React, { Component } from "react";
import styles from "./SocialLinks.module.css";

class SocialLinks extends Component {
  render() {
    return (
      <div className={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/in/hamad-ali-5069b518a/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/HamadAli248"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-github-square" aria-hidden="true" />
        </a>
        <a
          href="https://www.instagram.com/hamad_4li/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
      </div>
    );
  }
}
export default SocialLinks;
