import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "../assets/css/Profile.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProfilePage() {
  const url =
    "https://grup-project-be-34-production.up.railway.app/profile/allpenyandang";
  const [datapenyandang, setDatapenyandang] = useState([]);
  const [kontakpribadi, setKontakpribadi] = useState([]);
  const [tgl, setTgl] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("Ini datanya", res.data.DataPenyandang[0].tanggal_lahir);
        setDatapenyandang(res.data.DataPenyandang[0]);
        setKontakpribadi(res.data.KontakPribadi[0]);
        const tanggal = new Date(res.data.DataPenyandang[0].tanggal_lahir);
        const hari = new Date(tanggal).getDate();
        const bulan = new Date(tanggal).getMonth();
        const tahun = new Date(tanggal).getFullYear();
        const formattgl = hari + " - " + bulan + " - " + tahun;
        setTgl(formattgl);
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
                    src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="profile-usertitle">
                  <div className="profile-usertitle-name">
                    {datapenyandang.nama}
                  </div>
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
                      {datapenyandang.nama}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      NIK
                    </label>
                    <label htmlFor="" className="form-control">
                      {datapenyandang.nik}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Tempat Lahir
                    </label>
                    <label htmlFor="" className="form-control">
                      {datapenyandang.tempat_lahir}
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
                      {datapenyandang.jenis_kelamin}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Agama
                    </label>
                    <label htmlFor="" className="form-control">
                      {datapenyandang.agama}
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
                    <label htmlFor="" className="form-control">
                      {kontakpribadi.no_hp}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Alamat
                    </label>
                    <label htmlFor="" className="form-control">
                      {kontakpribadi.alamat}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Provinsi
                    </label>
                    <label htmlFor="" className="form-control">
                      {kontakpribadi.provinsi}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Kota
                    </label>
                    <label htmlFor="" className="form-control">
                      {kontakpribadi.kota}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Kecamatan
                    </label>
                    <label htmlFor="" className="form-control">
                      {kontakpribadi.kecamatan}
                    </label>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Kode Pos
                    </label>
                    <label htmlFor="" className="form-control">
                      {kontakpribadi.kode_pos}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default ProfilePage;
