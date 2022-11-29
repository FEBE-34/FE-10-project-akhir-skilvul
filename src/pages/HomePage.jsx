import React from "react";
import { Navigate, Link } from "react-router-dom";
import HeroImg from "../components/HeroImg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgramFavorite from "../components/ProgramFavorite";

function HomePage() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/signin"} />;
  }
  return (
    <div>
      <Navbar />
      <HeroImg />
      <ProgramFavorite />
      <Footer />
    </div>
  );
}

export default HomePage;
