import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "../assets/css/Profile.css";
import Navbar from "../components/Navbar";

function ProfilePage() {
  const url =
    "https://grup-project-be-34-production.up.railway.app/profile/allpenyandang";
  const [data, setData] = useState([]);
  const [tgl, setTgl] = useState([]);
  const [gambar, setGambar] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("Ini datanya", res);
        setData(res.data.data[0]);
        const tanggal = new Date(res.data.data[0].tanggal_lahir);
        const hari = new Date(tanggal).getDate();
        const bulan = new Date(tanggal).getMonth();
        const tahun = new Date(tanggal).getFullYear();
        const formattgl = hari + " / " + bulan + " / " + tahun;
        setTgl(formattgl);
        setGambar(res.data.data[0].UploadBerka);
      });
  }, []);

  const keluar = () => {
    localStorage.removeItem("token");
  };

  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <Navbar />
      <form>
        <div className="container">
          <div className="row profile">
            <div className="col-md-2">
              <div className="profile-sidebar">
                <div className="profile-userpic">
                  <img
                    src={gambar.file_dokter}
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="profile-usertitle">
                  <div className="profile-usertitle-name">{data.nama}</div>
                  <div className="profile-usertitle-job">Sadewo@gmail.com</div>
                </div>
                <div className="profile-usermenu">
                  <ul className="nav">
                    <li className="active">
                      <Link to={"/profile"}>
                        <i className="glyphicon glyphicon-home" />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to={"/form-data"}>
                        <i className="glyphicon glyphicon-file" />
                        Data Pribadi
                      </Link>
                    </li>
                    <li>
                      <Link to={"/kontak-pribadi"}>
                        <i className="glyphicon glyphicon-file" />
                        Kontak Pribadi
                      </Link>
                    </li>
                    <li>
                      <Link to={"/upload-berkas"}>
                        <i className="glyphicon glyphicon-file" />
                        Upload Berkas
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} onClick={keluar}>
                        <i className="glyphicon glyphicon-log-out"></i>
                        Keluar
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="profile-content">
                <div class="row g-3">
                  <h3 className="d-flex align-items-center mb-3">
                    Data Pribadi
                  </h3>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Nama
                    </label>
                    <label htmlFor="" className="form-control">
                      {data.nama}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      NIK
                    </label>
                    <label htmlFor="" className="form-control">
                      {data.nik}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Tempat Lahir
                    </label>
                    <label htmlFor="" className="form-control">
                      {data.tempat_lahir}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Tanggal Lahir
                    </label>
                    <label htmlFor="" className="form-control">
                      {tgl}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Jenis Kelamin
                    </label>
                    <label htmlFor="" className="form-control">
                      {data.jenis_kelamin}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Agama
                    </label>
                    <label htmlFor="" className="form-control">
                      {data.agama}
                    </label>
                  </div>
                </div>
                <div class="row g-3">
                  <h3 className="d-flex align-items-center mb-3">
                    Kontak Pribadi
                  </h3>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      No HandPhone
                    </label>
                    <input type="text" className="form-control" disabled />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Alamat
                    </label>
                    <input type="text" className="form-control" disabled />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Provinsi
                    </label>
                    <input type="text" className="form-control" disabled />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Kota
                    </label>
                    <input type="text" className="form-control" disabled />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Kecamatan
                    </label>
                    <input type="text" className="form-control" disabled />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Kode Pos
                    </label>
                    <input type="text" className="form-control" disabled />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;
