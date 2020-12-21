import React, { Component } from "react";
import styles from "./Skills.module.css";
import Skills from "./SkillBar";

class SkillComponent extends Component {
  render() {
    return (
      <div className={styles.skillDiv}>
        <h2 style={{ color: "white" }}>Skills</h2>
        <div className={styles.skillsDiv}>
          <Skills className={styles.skill} skill="JAVA" progress={30} />
          <Skills className={styles.skill} skill="Spring Boot" progress={30} />
          <Skills className={styles.skill} skill="TDD" progress={20} />
          <Skills className={styles.skill} skill="JavaScript" progress={55} />
          <Skills className={styles.skill} skill="React" progress={45} />
          <Skills className={styles.skill} skill="AWS" progress={10} />
          <Skills className={styles.skill} skill="PostgreSQL" progress={20} />
          <Skills className={styles.skill} skill="NodeJS" progress={15} />
          <Skills className={styles.skill} skill="HTML" progress={80} />
          <Skills className={styles.skill} skill="CSS" progress={80} />
        </div>
      </div>
    );
  }
}
export default SkillComponent;
