import "../assets/css/ProgramFavorite.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "../assets/css/ProgramCard.css";

const Program = () => {
  const token = localStorage.getItem("token");
  const url =
    "https://febe-34-ayo-skilvul-production.up.railway.app/programpenyandang/lihat";
  const [program, setPogram] = useState();

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // console.log(res);
        setPogram(res.data.program);
      });
  }, []);

  const arr =
    program &&
    program.map((program, index) => {
      return (
        <div className="program-favorite-container" key={index}>
          <div className="program-card">
            <img src={program.gambar} alt="img" />
            <h2 className="program-title">{program.nama}</h2>
            <div className="pro-details">
              <p>{program.deskripsi}</p>
              <div className="pro-btns">
                <Link to={`/programpenyandang/lihat/${program.id}`}>View</Link>
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
    <div className="program-card-container">
      <h1 className="program-heading">Program</h1>
      <div className="program-container">{arr}</div>
    </div>
  );
};

export default Program;
