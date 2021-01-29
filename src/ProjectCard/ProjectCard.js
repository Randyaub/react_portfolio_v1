import React, { useState } from "react";
import LinkButton from "../common/LinkButton";

import Modal from "../Modal/Modal";
import "./ProjectCard.css";
import TechUsed from "./TechUsed";
import CardImage from "./CardImage";
import CardDescription from "./CardDescription";

const ProjectCard = (props) => {
  const [modal, setModal] = useState(false);

  const imageClicked = () => {
    setModal((modal) => !modal);
  };

  return (
    <>
      <div className="card">
        <div>
          <CardImage image={props.picture} imageClicked={imageClicked} />
          <CardDescription title={props.title} paragraph={props.paragraph} />
        </div>
        <div className="card-lower">
          <TechUsed techUsed={props.techUsed} />
          <LinkButton buttonText={"GitHub "} url={props.github} />
          {props.url === "#" ? (
            ""
          ) : (
            <LinkButton buttonText={"Live Version "} url={props.url} />
          )}
        </div>
      </div>

      {/*Card Modal Opens On Click*/}
      <Modal
        modal={modal}
        buttonClicked={imageClicked}
        title={props.title}
        modalImage={props.modalImage}
        imageDescription={props.imageDescription}
        github={props.github}
        url={props.url}
      />
    </>
  );
};

export default ProjectCard;
