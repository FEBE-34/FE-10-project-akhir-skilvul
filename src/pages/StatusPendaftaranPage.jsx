import React from "react";
import StatusPendaftaran from "../components/StatusPendaftaran";
import image from "../assets/img/bg-status.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function StatusPendaftaranPage() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundImage: `url(${image})`, padding: "5vh 0" }}>
        <StatusPendaftaran />
      </div>
      <Footer />
    </>
  );
}

export default StatusPendaftaranPage;
