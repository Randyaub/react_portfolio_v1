import React from "react";

import Slider from "./Slider";
import "./ModalContent.css";

const ModalContent = (props) => {
  return (
    <div className="c-ModalContent">
      <Slider
        modalImage={props.modalImage}
        imageDescription={props.imageDescription}
      />
    </div>
  );
};

export default ModalContent;
