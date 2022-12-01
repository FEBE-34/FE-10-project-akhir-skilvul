import React, { useState } from "react";
import { Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
// import { FiChevronDown } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import logo from "../assets/img/logo.png";
import "../assets/css/Navbar.css";
import Dropdown  from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";



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
        <Link to={"/program"}>
          <li>Program</li>
        </Link> 
        <Link to={"/kegiatanaktif"}>
          <li>Kegiatan Aktif</li>
        </Link>
        <Link to={"/statuspendaftaran"}>
          <li>Status Pendaftaran</li>
        </Link>
{/* 
        <Dropdown>
        <DropdownToggle  id="dropdown-basic">
        <li> Kegiatan<i class="fa fa-caret-down"> </i></li>
        
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem href="/kegiatanaktif">Kegiatan Aktif</DropdownItem>
          
          <DropdownItem href="/statuspendaftaran">Status Pendaftaran</DropdownItem>
          
        </DropdownMenu>
      </Dropdown> */}

        {/* <button class="dropbtn"><li>Kegiatan
        <i class="fa fa-caret-down"></i></li>
        </button>
        <div class="dropdown-content"> */}
            {/* <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
        {/* </div> */}
      {/* </div>  */}
        {/* <Link to={"/kegiatan"}>
          <li>Kegiatan</li>
        </Link>      */}
      
     
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
