import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../assets/css/Navbar.css";

function Navbar() {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img src={logo} className="logo" />
      </Link>
      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <Link to={"/profile"}>
          <li>Profile</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
