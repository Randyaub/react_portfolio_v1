import React from "react";

import "./Modal.css";
import ModalButtons from "./ModalButtons";
import ModalContent from "./ModalContent";
import ModalTitle from "./ModalTitle";

const Modal = (props) => {
  const {
    title,
    modalImage,
    imageDescription,
    url,
    github,
    imageClicked,
  } = props.modalContentInformation;

  return (
    <div
      className={`c-Modal__background ${
        props.showModal === true && "c-Modal-active"
      }`}
    >
      <div className="c-Modal">
        <ModalTitle title={title} imageClicked={imageClicked} />
        <ModalContent
          modalImage={modalImage}
          imageDescription={imageDescription}
        />
        <ModalButtons url={url} github={github} />
      </div>
    </div>
  );
};

export default Modal;
