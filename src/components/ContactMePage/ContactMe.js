import React, { Component } from "react";
import styles from "./ContactMe.module.css";
import ContactMeForm from "./ContactForm/ContactMeForm";
import SocialLinks from "./Socials/SocialLinks";

class ContactMe extends Component {
  render() {
    return (
      <section className={styles.contact}>
        <div className={styles.myContent}>
          <h2>Contact me</h2>
          <p>Have a question or want to work together?</p>
        </div>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <SocialLinks />
          </div>
          <div className={styles.contactForm}>
            <ContactMeForm />
          </div>
        </div>
      </section>
    );
  }
}
export default ContactMe;
