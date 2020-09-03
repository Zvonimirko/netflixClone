import React, { useEffect, useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={show ? "nav nav__black" : "nav"}>
      <img
        className="nav__logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="nav-logo"
      />
      <img
        className="nav__avatar"
        alt="nav-avatar"
        src="https://cdn.drawception.com/drawings/RWDTxl2nrF.png"
      ></img>
    </div>
  );
}

export default Navbar;
