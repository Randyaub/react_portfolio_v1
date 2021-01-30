import React from "react";
import "./ContactResponse.css";

import Loading from "../../common/Loading";

const ContactResponse = (props) => {
  return (
    <div className="c-ContactResponse">
      {props.loading === true && <Loading />}
      <h4>{props.message}</h4>
    </div>
  );
};

export default ContactResponse;
