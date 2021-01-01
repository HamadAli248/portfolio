import React, { Component } from "react";
import emailjs from "emailjs-com";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render() {
    return (
      <div className={styles.contactForm}>
        <form
          className={styles.form}
          noValidate
          autoComplete="off"
          onSubmit={this.sendEmail}
        >
          <div className={styles.inputBox}>
            <input label="Name" type="text" name="user_name" />
            <span>Full Name</span>
          </div>
          <div className={styles.inputBox}>
            <input type="email" name="user_email" label="Email" />
            <span>Email</span>
          </div>
          <div className={styles.inputBox}>
            <textarea label="Name" type="text" name="user_name"></textarea>
            <span>Type your message ....</span>
          </div>
          <div className={styles.inputBox}>
            <input type="submit" value="Send" />
          </div>
          {/* <TextField
            style={{ margin: "10px", width: "100%" }}
            id="outlined-basic"
            label="Name"
            type="text"
            name="user_name"
            variant="outlined"
            required="required"
          />
          <TextField
            style={{ margin: "10px", width: "100%" }}
            id="outlined-basic"
            type="email"
            name="user_email"
            label="Email"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px", width: "100%" }}
            id="outlined-multiline-static"
            multiline
            rows={5}
            name="message"
            label="Message"
            variant="outlined"
          />
          <Button
            style={{
              margin: "0 auto",
              width: "10%",
              height: "6%",
            }}
            color="none"
            variant="contained"
            type="submit"
            value="graph"
            fullWidth
          >
            submit
          </Button> */}
        </form>
      </div>
    );
  }
}
export default ContactMeForm;
