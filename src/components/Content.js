import React from "react";
import Title from "./Title";
import Description from "./Description";

const Content = props => {
  return (
    <div className="content">
      <Title name={props.name}></Title>
      <Description text={props.text}></Description>
    </div>
  );
};

export default Content;
