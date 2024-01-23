import React from "react";
import { Link } from "react-router-dom";

const LinkCard = (props) => {
  const setImage = {
    backgroundImage: `url(${props.image})`,
  };
  return (
    <Link
      to={props.to}
      className={`${props.style} pointer-events-auto bg-cover rounded-2xl`}
      style={setImage}
    ></Link>
  );
};

export default LinkCard;
