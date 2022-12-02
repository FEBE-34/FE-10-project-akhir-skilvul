import axios from "axios";
import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import image from "../assets/img/background.jpg";
import CardDetail from "../components/programdetail/CardDetail";

function ProgramDetailPage() {
  const token = localStorage.getItem("token");
  const param = useParams();
  const url = `https://grup-project-be-34-production.up.railway.app/programpenyandang/lihat/detail/${param.id}`;
  const [redirect, setRedirect] = useState(false);
  function kirim() {
    axios
      .post(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res) {
          setRedirect(true);
        }
      });
  }
  return (
    <React.Fragment>
      {redirect && <Navigate to="/home" />}
      <div style={{ backgroundImage: `url(${image})`, padding: "5vh 0" }}>
        <CardDetail />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="buttonDaftar" onClick={kirim}>
            Daftar Sekarang!
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProgramDetailPage;
