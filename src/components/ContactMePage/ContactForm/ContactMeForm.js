import React, { Component } from "react";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "black" }}>Contact me</h1>
        <form noValidate autoComplete="off" onSubmit={this.sendEmail}>
          <TextField
            style={{ margin: "10px", width: "80%" }}
            id="outlined-basic"
            label="Name"
            type="text"
            name="user_name"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px", width: "80%" }}
            id="outlined-basic"
            type="email"
            name="user_email"
            label="Email"
            variant="outlined"
          />
          <TextField
            style={{ margin: "10px", width: "80%" }}
            id="outlined-multiline-static"
            multiline
            rows={4}
            name="message"
            label="Message"
            variant="outlined"
          />
          <Button
            style={{ margin: "10px", width: "80%" }}
            color="primary"
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
