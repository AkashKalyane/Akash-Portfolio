import React from "react";

import Heading from "../Heading/Heading";

import Image from "../../images/calculator.png";
import githubRepo from "../../images/github-repo.svg";
import externalLink from "../../images/external-link.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section
      data-aos="fade-left"
      className="portfolio"
      name="portfolio"
      id="portfolio"
    >
      <Heading text={"Portfolio"} />
      <div className="row">
        <div className="column">
          <img src={Image} alt="project_image" />
          <div className="overlay">
            <div className="left">
              <h3>Calculator</h3>
              <p>Modern UI/UX / Light/Dark Mode</p>
            </div>
            <div className="right">
              <span className="icon" onClick={() => window.open("")}>
                <img src={githubRepo} alt="" />
              </span>
              <span
                className="icon"
                onClick={() =>
                  window.open(
                    "https://akashkalyane.github.io/Akash-Portfolio/calculator"
                  )
                }
                title="Live view"
              >
                <img src={externalLink} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
