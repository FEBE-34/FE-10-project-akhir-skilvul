import "../assets/css/ProgramFavorite.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/ProgramCard.css";

const Program = () => {
  const url =
    "https://grup-project-be-34-production.up.railway.app/programpenyandang/lihat";
  const [program, setPogram] = useState();

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
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
  return (
    <div className="program-card-container">
      <h1 className="program-heading">Program</h1>
      <div className="program-container">{arr}</div>
    </div>
  );
};

export default Program;
