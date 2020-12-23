import React, { Component } from "react";
import { Certification } from "../components/AboutMePage/Certification/Certifications";
import SocialLinks from "../components/AboutMePage/Socials/SocialLinks";
import Skills from "../components/AboutMePage/Skills/SkillComponent";
import Bio from "../components/AboutMePage/AboutMe/Bio";

class About extends Component {
  render() {
    return (
      <div>
        <Bio />
        <Skills />
        <hr style={{ borderTop: "3px solid #e22947" }} />
        <Certification />
        <SocialLinks />
      </div>
    );
  }
}
export default About;
