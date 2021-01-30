import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";
import ContactResponse from "./ContactResponse";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          setLoading(false);
          console.log(result.text);
          setMessage("Your message was sent");
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          setMessage(
            "There was an error sending your message. Please try again later"
          );
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="c-Contact">
      <div className="container">
        <h3 className="c-Contact__title">Contact</h3>
        <ContactResponse message={message} loading={loading} />
        <div className="c-Contact__form">
          <ContactForm submitFunction={sendEmail} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
