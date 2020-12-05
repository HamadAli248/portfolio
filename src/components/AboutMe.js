import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "./images/GBuster.jpg";
import Skills from "./Skills";
import { Certification } from "./Certifications";
import styles from "../components/AboutMe.module.css";

class About extends Component {
  render() {
    return (
      <div className={styles.aboutMePage}>
        <Grid>
          <Cell className={styles.mdlCell} col={4}>
            <div className={styles.avatarImg} style={{ textAlign: "center" }}>
              <img
                src={Profile}
                alt="profile pic"
                style={{ height: "300px" }}
              />
            </div>
            <h2 style={{ paddingTop: "0.1em", color: "white" }}>Hamad Ali</h2>
            <h4 style={{ color: "grey" }}> Junior Software Engineer</h4>
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
              <a href="mailto:hammadali248@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true" />
              </a>
              <a href="tel:00447424983269">
                <i className="fa fa-phone-square" aria-hidden="true" />
              </a>
            </div>
            <div className={styles.skillDiv}>
              <h2 style={{ color: "white" }}>Skills</h2>
              <div className={styles.skillsDiv}>
                <Skills className={styles.skill} skill="JAVA" progress={30} />
                <Skills
                  className={styles.skill}
                  skill="Spring Boot"
                  progress={30}
                />
                <Skills className={styles.skill} skill="TDD" progress={20} />
                <Skills
                  className={styles.skill}
                  skill="JavaScript"
                  progress={55}
                />
                <Skills className={styles.skill} skill="React" progress={45} />
                <Skills className={styles.skill} skill="AWS" progress={10} />
                <Skills
                  className={styles.skill}
                  skill="PostgreSQL"
                  progress={20}
                />
                <Skills className={styles.skill} skill="NodeJS" progress={15} />
                <Skills className={styles.skill} skill="HTML" progress={80} />
                <Skills className={styles.skill} skill="CSS" progress={80} />
              </div>
            </div>
          </Cell>
          <Cell className={styles.aboutMeRightCol} col={8}>
            <div className={styles.aboutMeDiv}>
              <h2>About Me</h2>
              <p>
                Currently I am on a 15 months Apprenticeship at{" "}
                <a href="https://www.dmwgroup.com/">
                  DMW Group a Credera Company
                </a>
                . Completed the first 12-week training at Code Nation,
                Manchester. Learning Front-End development including HTML5,
                CSS3, JavaScript, React, Back-End programming such as APIs,
                Node.JS, Mongo. DB, MySQL, Express, iOS Swift programming and
                using the terminal and command line,and using git hub. I've have
                also been learning Java and looking into
                Databases(PostgreSQL),Spring Boot and finally AWS.
                <br />
                <br />I am a sporty person, I enjoy playing Cricket, Football
                and going for a Run. I also enjoy watching Formula 1 and Boxing.
                Excited by facing new challenges and learning something new.I am
                Adventurous outgoing person who is career-driven and have the
                determination to succeed!
              </p>
            </div>

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Certifications</h2>
            <Certification />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default About;
