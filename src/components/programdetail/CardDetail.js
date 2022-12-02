import React, { Fragment, useEffect, useState } from "react";
import "../../assets/css/ProgramDetail.css";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import {
  FaPeopleCarry,
  FaUserAlt,
  FaSearchLocation,
  FaGlobe,
  FaClipboardList,
} from "react-icons/fa";

const CardDetail = () => {
  const token = localStorage.getItem("token");
  const param = useParams();
  const url = `https://grup-project-be-34-production.up.railway.app/programpenyandang/lihat/detail/${param.id}`;
  const [datadetail, setDatadetail] = useState({ nama: "" });
  const [tglmulai, setTglmulai] = useState([]);
  const [tglselesai, setTglselesai] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.kategori[0]);
        setDatadetail(res.data.kategori[0]);
        const tanggal_mulai = new Date(res.data.kategori[0].tanggal_mulai);
        const hari_mulai = new Date(tanggal_mulai).getDate();
        const bulan_mulai = new Date(tanggal_mulai).getMonth();
        const tahun_mulai = new Date(tanggal_mulai).getFullYear();
        const formtgl_mulai =
          hari_mulai + " - " + bulan_mulai + " - " + tahun_mulai;
        setTglmulai(formtgl_mulai);
        const tanggal_selesai = new Date(res.data.kategori[0].tanggal_selesai);
        const hari_selesai = new Date(tanggal_selesai).getDate();
        const bulan_selesai = new Date(tanggal_selesai).getMonth();
        const tahun_selesai = new Date(tanggal_selesai).getFullYear();
        const formtgl_selesai =
          hari_selesai + " - " + bulan_selesai + " - " + tahun_selesai;
        setTglselesai(formtgl_selesai);
      });
  }, []);

  if (!token) {
    return <Navigate to={"/signin"} />;
  }

  return (
    <>
      {datadetail?.nama && (
        <div className="container-program">
          <div className="title-program">
            <FaClipboardList
              style={{ width: "3vw", height: "auto", paddingRight: "1vw" }}
            ></FaClipboardList>
            <h1 style={{ fontSize: "250%" }}>Detail Program</h1>
          </div>
          <div className="subContainer-program">
            <div className="containerBanner-program">
              <img
                className="banner-program"
                src={datadetail.gambar}
                alt="Gambar"
              />
            </div>
            <h2 style={{ fontSize: "200%", marginBottom: "-2vh" }}>
              {datadetail.nama}
            </h2>
            <p style={{ marginBottom: "-0.5vh" }}>
              {datadetail.DataMitra.nama_mitra}
            </p>
            <br></br>
            <p style={{ color: "#8d8d8d" }}>{tglmulai + " -- " + tglselesai}</p>
            <hr style={{ borderTop: "3px solid #bbb" }}></hr>
            <h2>Deskripsi Kegiatan</h2>
            <p>{datadetail.deskripsi}</p>
            <hr style={{ borderTop: "3px solid #bbb" }}></hr>
            <h2>Kriteria Peserta</h2>
            <p>{datadetail.informasi_tambahan}</p>
            <hr style={{ borderTop: "3px solid #bbb" }}></hr>
            <h2>Tentang Perusahaan</h2>
            <div style={{ display: "flex", gap: "2vw" }}>
              <img
                className="logo-program"
                src={datadetail.gambar}
                alt="Gambar"
              ></img>
              <div style={{ flexDirection: "row", marginTop: "-2.5vh" }}>
                <p style={{ marginBottom: "-2vh" }}>
                  <strong>{datadetail.nama_perusahaan}</strong>
                </p>
                <p style={{ marginBottom: "3vh" }}>{datadetail.nama_mitra}</p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "1.5vh",
                  }}
                >
                  <FaPeopleCarry></FaPeopleCarry>
                  <p style={{ margin: "-0.5vh 1vw" }}>
                    {datadetail.DataMitra.bidang}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "1.5vh",
                  }}
                >
                  <FaUserAlt></FaUserAlt>
                  <p style={{ margin: "-0.5vh 1vw" }}>
                    {datadetail.DataMitra.jumlah_anggota}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "1.5vh",
                  }}
                >
                  <FaSearchLocation></FaSearchLocation>
                  <p style={{ margin: "-0.5vh 1vw" }}>
                    {datadetail.DataMitra.alamat}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5vh",
                  }}
                >
                  <FaGlobe></FaGlobe>
                  <p style={{ margin: "-0.5vh 1vw" }}>
                    {datadetail.DataMitra.nama_mitra}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetail;
