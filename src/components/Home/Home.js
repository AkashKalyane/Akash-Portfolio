import React from "react";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import man from "../../images/dev.svg";
import Typewriter from "../../utils/TypeWriter/Typewriter";

import "./Home.css";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

function Home() {
  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h2>Believe in yourself, always.</h2>
        <h1>I’m Akash</h1>
        <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          I am a &nbsp;
          <Typewriter text="Web Developer" typingDelay={200} />
        </p>
        <Link
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          <button
            className="home-button"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1hr8HhNPGvkDunUne9jZee_0IVXvLmCxZ/view?usp=sharing"
              )
            }
          >
            Open Resume
          </button>
        </Link>
      </motion.div>
      <motion.div
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={man} alt="Developer" />
      </motion.div>
    </section>
  );
}

export default Home;
