import "../assets/css/KegiatanAktif.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const KegiatanAktif = () => {
  const url =
    "https://grup-project-be-34-production.up.railway.app/kegiatanpenyandang/aktif";
  const [program, setPogram] = useState({ id: "" });

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.kegiatan[0]);
        setPogram(res.data.kegiatan[0]);
      });
  }, []);

  return (
    <>
      {program?.id && (
        <div className="kegiatan-card-container">
          <h1 className="kegiatan-heading">KEGIATAN AKTIF</h1>
          <div className="kegiatan-container">
            <div className="kegiatan-card-container">
              <div className="kegiatan-card">
                <img src={program.Program.gambar} alt="img" />
                <h2 className="kegiatan-title">{program.Program.nama}</h2>
                <div className="kegiatan-details">
                  <p>{program.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KegiatanAktif;
