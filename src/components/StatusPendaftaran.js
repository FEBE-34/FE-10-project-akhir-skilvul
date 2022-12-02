import "../assets/css/StatusPendaftaran.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const StatusPendaftaran = () => {
  const token = localStorage.getItem("token");
  const url =
    "https://febe-34-ayo-skilvul-production.up.railway.app/kegiatanpenyandang/lihat";
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.kegiatan);
        setData(res.data.kegiatan);
      });
  }, []);

  const arr =
    data &&
    data.map((data, index) => {
      return (
        <div className="status-container" key={index}>
          <div className="status-card-container">
            <div className="status-card">
              <img src={data.Program.gambar} alt="img" />
              <h2 className="status-title">{data.Program.nama}</h2>
              <div className="status-details">
                <p>{data.status}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  if (!token) {
    return <Navigate to={"/signin"} />;
  }
  return (
    <div className="status-card-container">
      <h1 className="status-heading">STATUS PENDAFTARAN</h1>
      {arr}
    </div>
  );
};

export default StatusPendaftaran;
