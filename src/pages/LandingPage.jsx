import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Landingpage.css";
import logo from "../assets/img/logo.png";

function LandingPage() {
  return (
    <div>
      <div className="row">
        <div className="konten1">
          <img src={logo} alt="banner" width="500px" />
        </div>
        <div className="konten2">
          <h1>Dis-Help</h1>
          <p>
            Kami Membantu Para Disabilitas dan Non-Disabilitas untuk mencari
            Pekerjaan dan Program Edukasi
          </p>
          <button>
            <Link className="link-landing" to={"/signin"}>
              Daftar Sekarang
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
