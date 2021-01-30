import React from "react";

const GoToContactButton = (props) => {
  return (
    <div onClick={props.goToContact} id="goToContacts">
      {" "}
      CONTACT{" "}
    </div>
  );
};

export default GoToContactButton;
