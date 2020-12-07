import React, { useState } from "react";

import Modal from "../Modal/Modal";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const [modal, setModal] = useState(false);

  const buttonClicked = () => {
    setModal((modal) => !modal);
  };

  return (
    <div className="card">
      <div>
        <Modal
          modal={modal}
          buttonClicked={buttonClicked}
          title={props.title}
          modalImage={props.modalImage}
          imageDescription={props.imageDescription}
          github=""
          url={props.url}
        />
        <div
          className="card-image"
          style={{ backgroundImage: `url(${props.picture})` }}
        >
          <button onClick={buttonClicked} className="card-btn">
            LEARN MORE
          </button>
          <i class="fas fa-expand card-expand-icon"></i>
          <div className="image-overlay"></div>
        </div>
        <h1 className="card-title">{props.title}</h1>
        <div className="card-paragraph">{props.paragraph}</div>
      </div>
      <div className="card-buttons">
        <div>
          <ul className="tech-used">
            {props.techUsed.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <button>
            <a
              href={props.github}
              className="button-links"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
          {props.url === "#" ? (
            ""
          ) : (
            <button>
              <a
                href={props.url}
                className="button-links"
                target="_blank"
                rel="noreferrer"
              >
                Live Version
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
