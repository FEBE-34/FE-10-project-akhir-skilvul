import React from "react";
import "../assets/css/Footer.css";
import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img src={logo} className="footer-logo" />
        <p className="footer-links">
          <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contact</a>|
          <a href="#">Blog</a>
        </p>
        <p className="footer-company-name">
          Copyright © 2022 <strong>Dis-Help</strong> All rights reserved
        </p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker" />
          <p>Indonesia</p>
        </div>
        <div>
          <i className="fa fa-phone" />
          <p>+62 828282882</p>
        </div>
        <div>
          <i className="fa fa-envelope" />
          <p>
            <a href="">Dis-Help@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>Tentang Dis-Help</span>
          <strong>Dis-Help</strong> adalah sebuah Organisasi dibawah Youth Asean
          Organization. Dis-Help berperan sebagai pemberi Program Edukasi dan
          Lapangan Pekerjaan bagi para Penyandang Disabilitas dan
          Non-Disabilitas.
        </p>
        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
