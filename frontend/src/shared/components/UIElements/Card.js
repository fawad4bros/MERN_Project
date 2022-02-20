import React from "react";

import "./Card.css";

function Card(props) {
  console.log(props);
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
}

export default Card;
