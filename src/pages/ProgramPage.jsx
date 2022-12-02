import React from "react";
import Footer from "../components/Footer";
import HeroImgProgram from "../components/HeroImgProgram";
import Navbar from "../components/Navbar";
import Program from "../components/Program";

function ProgramPage() {
  const token = localStorage.getItem("token");
  return (
    <div>
      <Navbar />
      <HeroImgProgram />
      <Program />
      <Footer />
    </div>
  );
}

export default ProgramPage;
