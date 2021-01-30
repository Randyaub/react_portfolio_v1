import React from "react";

const FormInput = (props) => {
  return (
    <input
      className={props.className}
      placeholder={props.placeholder}
      type={props.type ? props.type : "text"}
      name={props.name}
      required={props.required ? props.required : ""}
      autoComplete={props.autoComplete ? props.autoComplete : "off"}
    />
  );
};

export default FormInput;
