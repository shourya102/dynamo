import React from "react";

const Card = (props) => {
  return (
    <div
      className={`${props.className} flex flex-col rounded-2xl border border-skin-border-2 space-y-2 bg-skin-base-3 p-6 w-full`}
    >
      {props.children}
    </div>
  );
};

export default Card;
