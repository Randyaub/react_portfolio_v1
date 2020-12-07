import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

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
    <section id="contact">
      <div className="container">
        <h3 className="contact-title">Contact</h3>
        <div className="contact-message">
          {loading === true && (
            <div className="loading">
              <img src="loading.svg" alt="loading"></img>
            </div>
          )}
          <h4>{message}</h4>
        </div>
        <div className="wrap">
          <form onSubmit={sendEmail} className="contact">
            <div>
              <input
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <input
                placeholder="Enter Email"
                type="email"
                name="email"
                id="email"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                name="message"
                id="message"
                rows="10"
                required
                autoComplete="off"
              />
            </div>
            <div className="submit-button">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
