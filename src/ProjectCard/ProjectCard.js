import React, { useState } from "react";
import "./ProjectCard.css";

import Modal from "./Modal";
import Card from "./Card";

const ProjectCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const imageClicked = () => {
    setShowModal((showModal) => !showModal);
  };

  const {
    title,
    paragraph,
    techUsed,
    url,
    github,
    modalImage,
    imageDescription,
    picture,
  } = props;

  return (
    <div className="c-ProjectCard flex">
      <Card
        cardProperties={{
          title: title,
          paragraph: paragraph,
          techUsed: techUsed,
          url: url,
          github: github,
          modalImage: modalImage,
          picture: picture,
          imageClicked: imageClicked,
        }}
      />
      {/*Card Modal Opens On Click*/}
      <Modal
        showModal={showModal}
        modalContentInformation={{
          imageClicked: imageClicked,
          title: title,
          modalImage: modalImage,
          imageDescription: imageDescription,
          github: github,
          url: url,
        }}
      />
    </div>
  );
};

export default ProjectCard;
