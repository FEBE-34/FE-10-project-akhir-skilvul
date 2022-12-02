import React from "react";
import { Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import HeroImgProgram from "../components/HeroImgProgram";
import Navbar from "../components/Navbar";
import Program from "../components/Program";

function ProgramPage() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/signin"} />;
  }
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
