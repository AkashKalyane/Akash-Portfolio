import React from "react";

import "./Heading.css";

function Heading({ text }) {
  return (
    <div className="heading-container">
      <h2 className="heading">{text}</h2>
      <span></span>
    </div>
  );
}

export default Heading;
