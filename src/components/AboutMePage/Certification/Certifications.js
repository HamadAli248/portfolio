import React from "react";
import CertificationCard from "./CertificationCard";
import FreeCodeCamp from "../../../images/certificationsLogo/FreeCodeCamp.png";
import MicrosoftExam480 from "../../../images/certificationsLogo/MicrosoftExam480.png";
import AWS from "../../../images/certificationsLogo/AWS.png";
import AwsCCP from "../../../images/certifications/AWS Certified Cloud Practitioner certificate.pdf";
import BCS from "../../../images/certificationsLogo/BCSLOGO.jpg";
import BCSCert from "../../../images/certifications/bcs-methodologies.pdf";
import styles from "./Certifications.module.css";

export const Certification = () => (
  <div className={styles.certificationDiv}>
    <h2 className={styles.divTitle}>Certifications</h2>
    <div className={styles.certificationGrid}>
      <CertificationCard
        img={AWS}
        certTitle="AWS Certified Cloud Practitioner"
        certURL={AwsCCP}
      />
      <CertificationCard
        img={BCS}
        certTitle="BCS Level 4 Diploma in Software Development Methodologies"
        certURL={BCSCert}
      />
      <CertificationCard
        img={MicrosoftExam480}
        certTitle="Microsoft Exam 480: Programming in HTML5 with JavaScript and CSS3"
        certURL="https://www.youracclaim.com/badges/9637458f-d1c1-4746-a31d-72cf99cfa647/public_url"
      />
      <CertificationCard
        img={FreeCodeCamp}
        certTitle="Responsive Web Design"
        certURL="https://www.freecodecamp.org/certification/fcc8eef0fcb-973d-4c54-bba3-c0fc28b43bb7/responsive-web-design"
      />
      <CertificationCard
        img={FreeCodeCamp}
        certTitle="JavaScript Algorithms and Data Structures"
        certURL="https://www.freecodecamp.org/certification/fcc8eef0fcb-973d-4c54-bba3-c0fc28b43bb7/javascript-algorithms-and-data-structures"
      />
    </div>
  </div>
);
