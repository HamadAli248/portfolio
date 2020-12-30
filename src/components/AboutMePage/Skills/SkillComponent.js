import React, { Component } from "react";
import Skills from "./SkillBar";
import styles from "./Skills.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

class SkillComponent extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.item} id={styles.skillsDiv}>
          <h2
            style={{
              color: "black",
              fontFamily: "lato",
              fontSize: "45px",
              fontWeight: "30",
            }}
          >
            Skills
          </h2>
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
        <div className={styles.item} id={styles.experienceDiv}>
          <h2
            style={{
              color: "black",
              fontFamily: "lato",
              fontSize: "45px",
              fontWeight: "30",
            }}
          >
            Experience
          </h2>
          <div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="July 2019 - Sept 2019"
                contentStyle={{
                  backgroundColor: "lightgrey",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">Code Nation</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Manchester, UK
                </h4>
                <p> Software Developer Student</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Oct 2019 - present"
                contentStyle={{ backgroundColor: "lightgrey" }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">DMW Group</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Manchester, UK
                </h4>
                <p>Apprentice Software Engineer</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    );
  }
}
export default SkillComponent;
