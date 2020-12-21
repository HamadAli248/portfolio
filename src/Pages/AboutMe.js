import React, { Component } from "react";
// import { Grid, Cell } from "react-mdl";
import { Certification } from "../components/AboutMePage/Certification/Certifications";
import styles from "../components/AboutMePage/AboutMe/AboutMe.module.css";
import Intro from "../components/AboutMePage/AboutMe/Intro";
import SocialLinks from "../components/AboutMePage/Socials/SocialLinks";
import Skills from "../components/AboutMePage/Skills/SkillComponent";
import Bio from "../components/AboutMePage/AboutMe/Bio";

class About extends Component {
  render() {
    return (
      <div className={styles.aboutMePage}>
        {/* <Grid>
          <Cell className={styles.mdlCell} col={4}> */}
        <Intro />
        <SocialLinks />
        <Skills />
        {/* </Cell> */}
        {/* <Cell className={styles.aboutMeRightCol} col={8}> */}
        <Bio />
        <hr style={{ borderTop: "3px solid #e22947" }} />
        <Certification />
        {/* </Cell>
        </Grid> */}
      </div>
    );
  }
}
export default About;
