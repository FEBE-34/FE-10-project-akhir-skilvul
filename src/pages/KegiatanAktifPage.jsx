import React from "react";
import KegiatanAktif from "../components/KegiatanAktif";
import image from "../assets/img/bg-ka.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom"

function KegiatanAktifPage() {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ backgroundImage: `url(${image})`, padding: "5vh 0" }}>
        <KegiatanAktif />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default KegiatanAktifPage;
