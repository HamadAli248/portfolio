import React, { Component } from "react";
import ContactMeForm from "../components/ContactMePage/ContactForm/ContactMeForm";
import SocialLinks from "../components/ContactMePage/Socials/SocialLinks";

class ContactMe extends Component {
  render() {
    return (
      <div>
        <ContactMeForm />
        <SocialLinks />
      </div>
    );
  }
}
export default ContactMe;
