import React from "react";
import "./ContactForm.css";

import FormInput from "../../common/FormInput";

const ContactForm = (props) => {
  return (
    <form onSubmit={props.submitFunction} className="c-ContactForm">
      <FormInput
        className={"c-ContactForm__input"}
        placeholder={"Name"}
        name={"name"}
        id={"name"}
        required={true}
      />
      <FormInput
        className={"c-ContactForm__input"}
        placeholder={"Enter Email"}
        name={"email"}
        type={"email"}
        id={"email"}
        required={true}
      />
      <textarea
        className={"c-ContactForm__input"}
        placeholder="Your Message"
        name="message"
        id="message"
        rows="10"
        required={true}
      />
      <div className="l-ContactForm__button">
        <button className="c-ContactForm__button" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
