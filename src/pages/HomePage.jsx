import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import HeroImg from "../components/HeroImg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

function HomePage() {
  const token = localStorage.getItem("token");

  const url =
    "https://grup-project-be-34-production.up.railway.app/homepenyandang/lihat/";
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data.program);
      });
  }, []);

  const arr =
    data &&
    data.map((data, index) => {
      return (
        <div className="program-favorite-container" key={index}>
          <div className="program-card">
            <img src="" alt="img" />
            <h2 className="program-title">{data.nama}</h2>
            <div className="pro-details">
              <p>{data.deskripsi}</p>
              <div className="pro-btns">
                <Link to={`/programdetail/${data.id}`}>View</Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  if (!token) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <Navbar />
      <HeroImg />
      <div className="program-favorite-container">
        <h1 className="program-heading">Program Favorite</h1>
        <div className="program-container">{arr}</div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
