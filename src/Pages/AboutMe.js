import React, { Component } from "react";
import { Certification } from "../components/AboutMePage/Certification/Certifications";
import Skills from "../components/AboutMePage/Skills/SkillComponent";
import Bio from "../components/AboutMePage/AboutMe/Bio";
import { Projects } from "../components/AboutMePage/Projects/Projects";

class About extends Component {
  render() {
    return (
      <div>
        <Bio />
        <Skills />
        <Projects />
        <Certification />
      </div>
    );
  }
}
export default About;
