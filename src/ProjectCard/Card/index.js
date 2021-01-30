import React from "react";

import CardTech from "./CardTech";
import CardImage from "./CardImage";
import CardDescription from "./CardDescription";
import CardButtons from "./CardButtons";

const Card = (props) => {
  const {
    title,
    imageClicked,
    paragraph,
    techUsed,
    url,
    github,
    picture,
  } = props.cardProperties;

  return (
    <>
      <div>
        <CardImage image={picture} imageClicked={imageClicked} />
        <CardDescription title={title} paragraph={paragraph} />
      </div>
      <div>
        <CardTech techUsed={techUsed} />
        <CardButtons url={url} github={github} />
      </div>
    </>
  );
};

export default Card;
