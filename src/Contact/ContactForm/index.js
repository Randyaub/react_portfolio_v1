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
        autoComplete={"nope"}
      />
      <FormInput
        className={"c-ContactForm__input"}
        placeholder={"Enter Email"}
        name={"email"}
        id={"email"}
        required={true}
        autoComplete={"nope"}
      />
      <textarea
        className={"c-ContactForm__input"}
        placeholder="Your Message"
        name="message"
        id="message"
        rows="10"
        required
        autoComplete="off"
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
