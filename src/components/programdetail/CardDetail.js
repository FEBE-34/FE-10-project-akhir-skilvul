import React, { useEffect, useState } from "react";
import "../../assets/css/ProgramDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  FaPeopleCarry,
  FaUserAlt,
  FaSearchLocation,
  FaGlobe,
  FaClipboardList,
} from "react-icons/fa";

const CardDetail = () => {
  const param = useParams();
  const url = `https://grup-project-be-34-production.up.railway.app/programpenyandang/lihat/detail/${param.id}`;
  const [datadetail, setDatadetail] = useState();

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.kategori);
        setDatadetail(res.data.kategori);
      });
  }, []);
  return (
    <div className="container-program">
      <div className="title-program">
        <FaClipboardList
          style={{ width: "3vw", height: "auto", paddingRight: "1vw" }}
        ></FaClipboardList>
        <h1 style={{ fontSize: "250%" }}>Detail Program</h1>
      </div>
      <div className="subContainer-program">
        <div className="containerBanner-program">
          <img className="banner-program" src="" />
        </div>
        <h2 style={{ fontSize: "200%", marginBottom: "-2vh" }}>{}</h2>
        <p style={{ marginBottom: "-0.5vh" }}>{}</p>
        <br></br>
        <p style={{ color: "#8d8d8d" }}>{}</p>
        <hr style={{ borderTop: "3px solid #bbb" }}></hr>
        <h2>Deskripsi Kegiatan</h2>
        <p>{}</p>
        <hr style={{ borderTop: "3px solid #bbb" }}></hr>
        <h2>Kriteria Peserta</h2>
        <p>{}</p>
        <hr style={{ borderTop: "3px solid #bbb" }}></hr>
        <h2>Tentang Perusahaan</h2>
        <div style={{ display: "flex", gap: "2vw" }}>
          <img className="logo-program" src=""></img>
          <div style={{ flexDirection: "row", marginTop: "-2.5vh" }}>
            <p style={{ marginBottom: "-2vh" }}>
              <strong>{}</strong>
            </p>
            <p style={{ marginBottom: "3vh" }}>{}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "1.5vh",
              }}
            >
              <FaPeopleCarry></FaPeopleCarry>
              <p style={{ margin: "-0.5vh 1vw" }}>{}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "1.5vh",
              }}
            >
              <FaUserAlt></FaUserAlt>
              <p style={{ margin: "-0.5vh 1vw" }}>{}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "1.5vh",
              }}
            >
              <FaSearchLocation></FaSearchLocation>
              <p style={{ margin: "-0.5vh 1vw" }}>{}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "5vh",
              }}
            >
              <FaGlobe></FaGlobe>
              <p style={{ margin: "-0.5vh 1vw" }}>{}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
