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
      <Link to={"/home"}>
        <img src={logo} className="logo" />
      </Link>
      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <Link to={"/program"}>
          <li>Program</li>
        </Link>
        <Link to={"/kegiatanaktif"}>
          <li>Kegiatan Aktif</li>
        </Link>
        <Link to={"/statuspendaftaran"}>
          <li>Status Pendaftaran</li>
        </Link>
        <Link to={"/Profile"}>
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
