import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Profile from "./images/GBuster.jpg";
import Skills from "./skills";
import { Certification } from "./certifications";

class About extends Component {
  render() {
    return (
      // About me page
      <div id="aboutMePage">
        <Grid>
          {/* splitting the page into 2 sections(will be in grid so it splits into 4:8) */}

          <Cell col={4}>
            {/* content of left side of the page */}

            {/* Picture,Name and JobTitle */}
            <div className="avatar-img" style={{ textAlign: "center" }}>
              <img
                src={Profile}
                alt="profile pic"
                style={{ height: "300px" }}
              />
            </div>
            <h2 style={{ paddingTop: "0.1em", color: "white" }}>Hamad Ali</h2>
            <h4 style={{ color: "grey" }}> Junior Software Engineer</h4>
            {/* Links for Socail Media */}
            <div className="social-links">
              {/*Linkin*/}
              <a
                href="https://www.linkedin.com/in/hamad-ali-5069b518a/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/*Github*/}
              <a
                href="https://github.com/HamadAli248"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/*instagram*/}
              <a
                href="https://www.instagram.com/hamad_4li/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              {/*Email*/}
              <a href="mailto:hammadali248@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true" />
              </a>
              {/*Phonel*/}
              <a href="tel:00447424983269">
                <i className="fa fa-phone-square" aria-hidden="true" />
              </a>
            </div>

            {/* Botom left of page of all the skills and {percentage of knowledge} code writen in skills.js file */}

            <div id="skills-div">
              <h2 style={{ color: "white" }}>Skills</h2>
              <div id="skill-div">
                <Skills className="skill" skill="JAVA" progress={30} />
                <Skills className="skill" skill="Spring Boot" progress={30} />
                <Skills className="skill" skill="TDD" progress={20} />
                <Skills className="skill" skill="JavaScript" progress={55} />
                <Skills className="skill" skill="React" progress={45} />
                <Skills className="skill" skill="AWS" progress={10} />
                <Skills className="skill" skill="PostgreSQL" progress={20} />
                <Skills className="skill" skill="NodeJS" progress={15} />
                <Skills className="skill" skill="HTML" progress={80} />
                <Skills className="skill" skill="CSS" progress={80} />
              </div>
            </div>
          </Cell>

          {/* content of right side of the page */}
          <Cell className="aboutme-right-col" col={8}>
            {/* About me section top right */}

            <div id="aboutme-div">
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

            {/* Bottom right with all the Certifications */}

            <h2>Certifications</h2>
            <Certification />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default About;
