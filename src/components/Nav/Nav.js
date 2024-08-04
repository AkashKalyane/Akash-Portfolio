import React from "react";

import { motion } from "framer-motion";
// import { animateScroll as scroll } from "react-scroll";
import NavLink from "./NavLink/NavLink";

import MenuIcon from "../Menu/MenuIcon/MenuIcon";

import "./Nav.css";

function Nav({ menuOpen, setMenuOpen }) {
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={"nav-wrapper " + (menuOpen && "menuActive")}>
      <motion.div
        className="nav-container"
        id="navbar"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <NavLink
          path="home"
          text={
            <span className={"logo " + (menuOpen && "menuActive")}>
              &lt; AK /&gt;
            </span>
          }
          onClick={(e) => e.preventDefault()}
        ></NavLink>
        <MenuIcon menuOpen={menuOpen} handleClick={handleClick} />
      </motion.div>
    </div>
  );
}

export default Nav;
