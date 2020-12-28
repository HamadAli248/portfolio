import React, { Component } from "react";
import Skills from "./SkillBar";
import styles from "./Skills.module.css";

class SkillComponent extends Component {
  render() {
    return (
      <div className={styles.skillsDiv}>
        <h2 style={{ color: "black", textAlign: "left" }}>Skills</h2>
        <div>
          <Skills skill="JAVA" progress={30} />
          <Skills skill="Spring Boot" progress={30} />
          <Skills skill="TDD" progress={20} />
          <Skills skill="JavaScript" progress={55} />
          <Skills skill="React" progress={45} />
          <Skills skill="AWS" progress={10} />
          <Skills skill="PostgreSQL" progress={20} />
          <Skills skill="NodeJS" progress={15} />
          <Skills skill="HTML" progress={80} />
          <Skills skill="CSS" progress={80} />
        </div>
      </div>
    );
  }
}
export default SkillComponent;
