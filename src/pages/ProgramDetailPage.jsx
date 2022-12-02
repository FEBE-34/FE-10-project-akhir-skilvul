import React from "react";
import { useParams } from "react-router-dom";
import image from "../assets/img/background.jpg";
import CardDetail from "../components/programdetail/CardDetail";

function ProgramDetailPage() {
  const token = localStorage.getItem("token");
  return (
    <div style={{ backgroundImage: `url(${image})`, padding: "5vh 0" }}>
      <CardDetail />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="buttonDaftar">Daftar Sekarang!</button>
      </div>
    </div>
  );
}

export default ProgramDetailPage;
