import React, { useState, useEffect } from "react";
import "./Typewriter.css"; // Import the CSS file

function Typewriter({ text, typingDelay }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingDelay);
      return () => clearTimeout(timeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);
      }, 1500);
      return () => clearTimeout(pauseTimeout);
    }
  }, [currentIndex, text, typingDelay]);

  return (
    <span className="typewriter">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
}

export default Typewriter;
