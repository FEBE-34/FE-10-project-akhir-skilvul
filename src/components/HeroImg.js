import "../assets/css/HeroImg.css";
import React, { useEffect, useState } from "react";
import Intro from "../assets/img/gambar1.png";
import { Link } from "react-router-dom";
import axios from "axios";

const HeroImg = () => {
  const url =
    "https://grup-project-be-34-production.up.railway.app/homepenyandang/lihat/";
  const [kategori, setKategori] = useState();

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setKategori(res.data.kategori);
      });
  }, []);

  const arr =
    kategori &&
    kategori.map((data, index) => {
      return (
        <div className="column" key={index}>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <img
              className="img-circle"
              src={data.gambar}
              width="200px"
              alt="Gambar"
            />
            <h3>{data.nama}</h3>
            <p className="text-center">{data.deskripsi}</p>
          </div>
        </div>
      );
    });
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img className="intro-img" src={Intro} alt="introImg" />
        </div>
        <div className="content">
          <h1>Pilihlah Program Bantuan Untuk Masa Depan Mu</h1>
          <p>
            Kamu bisa memilih berbagai pilihan program dari Asian Youth
            Organization yang tersedia untukmu
          </p>
          <div>
            <Link to="/program" className="btn">
              Daftar Program
            </Link>
          </div>
        </div>
      </div>
      <div className="container program">
        <h1>Kategori Program</h1>
        {arr}
      </div>
    </>
  );
};

export default HeroImg;
