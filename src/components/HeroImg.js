import "../assets/css/HeroImg.css";
import React from "react";
import Intro from "../assets/img/gambar1.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Intro} alt="introImg" />
      </div>

      <div className="content">
        <h1>Pilihlah Program Bantuan Untuk Masa Depan Mu</h1>
        <p>
          Kamu bisa memilih berbagai pilihan program dari Asian Youth
          Organization yang tersedia untukmu
        </p>
        <div>
          <Link to="/program" className="btn">
            Daftar Program
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
