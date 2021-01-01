import React, { Component } from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
      <div className={styles.formDiv}>
        <h1>Contact me</h1>
        <p>Have A question or want to work together?</p>
        <form
          className={styles.form}
          noValidate
          autoComplete="off"
          onSubmit={this.sendEmail}
        >
          <TextField
            style={{ margin: "10px", width: "100%" }}
            id="outlined-basic"
            label="Name"
            type="text"
            name="user_name"
            variant="outlined"
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
              width: "4%",
              height: "2%",
            }}
            color="none"
            variant="contained"
            type="submit"
            value="graph"
            fullWidth
          >
            submit
          </Button>
        </form>
      </div>
    );
  }
}
export default ContactMeForm;
