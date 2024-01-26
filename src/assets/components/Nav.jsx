import React from "react";

import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="nav-bar">
      <div className="left-section">
        <img className="trollface" src="./images/trollface.png" alt="" />
        <p className="left-text">Meme Generetor</p>
      </div>
    </nav>
  );
}
export default Nav;
