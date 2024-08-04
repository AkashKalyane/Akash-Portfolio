import React from "react";

function MenuIcon({ menuOpen, handleClick }) {
  return (
    <div
      className={"menu-icon " + (menuOpen && "menuActive")}
      onClick={handleClick}
    >
      <span className={"line1 " + (menuOpen && "menuActive")}></span>
      <span className={"line2 " + (menuOpen && "menuActive")}></span>
      <span className={"line3 " + (menuOpen && "menuActive")}></span>
    </div>
  );
}

export default MenuIcon;
