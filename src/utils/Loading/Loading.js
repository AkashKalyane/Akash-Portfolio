import React from "react";
import ReactDOM from "react-dom";

import "./Loading.css";

function Loading() {
  return ReactDOM.createPortal(
    <>
      
      <div className="loading-center">
        <div className="dots"></div>
        <div className="content">
        Wait for it.
      </div>
      </div>
    </>,
    document.getElementById("loading-modal")
  );
}

export default Loading;
