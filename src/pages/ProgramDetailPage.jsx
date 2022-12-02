import axios from "axios";
import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import image from "../assets/img/background.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CardDetail from "../components/programdetail/CardDetail";

function ProgramDetailPage() {
  const token = localStorage.getItem("token");
  const param = useParams();
  const url = `https://febe-34-ayo-skilvul-production.up.railway.app/programpenyandang/lihat/detail/${param.id}`;
  const [redirect, setRedirect] = useState(false);
  function kirim() {
    axios
      .post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res) {
          console.log(res);
          setRedirect(true);
        }
      });
  }
  if (!token) {
    return <Navigate to={"/signin"} />;
  }
  return (
    <React.Fragment>
      {redirect && <Navigate to="/statuspendaftaran" />}
      <Navbar />
      <div style={{ backgroundImage: `url(${image})`, padding: "5vh 0" }}>
        <CardDetail />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="buttonDaftar" onClick={kirim}>
            Daftar Sekarang!
          </button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default ProgramDetailPage;
