import React, { Component } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactMeForm.module.css";

class ContactMeForm extends Component {
  sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "contact_service",
        "template_eykvmd7",
        e.target,
        "user_0SWmdYAliUrhx2PxiSdkk"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
          alert("message was not sent");
        }
      );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendEmail}>
          <h2>Send Message</h2>
          <div className={styles.inputBox}>
            <input label="Name" type="text" name="user_name" required />
            <span>Full Name</span>
          </div>
          <div className={styles.inputBox}>
            <input type="email" name="user_email" label="Email" required />
            <span>Email</span>
          </div>
          <div className={styles.inputBox}>
            <textarea
              label="Name"
              type="text"
              name="message"
              required
            ></textarea>
            <span>Type your message...</span>
          </div>
          <div className={styles.inputBox}>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    );
  }
}
export default ContactMeForm;
