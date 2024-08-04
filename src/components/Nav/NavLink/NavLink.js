import React from "react";

import { Link } from "react-scroll";

const NavLink = ({ text, path, onClick }) => {
  return (
    <li className="link">
      <Link
        className="anchor"
        to={path}
        activeClass="active"
        onClick={onClick}
        hashSpy={true}
        spy={true}
        smooth={true}
        delay={100}
        offset={-70}
        duration={500}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
