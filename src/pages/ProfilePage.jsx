import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/Profile.css";
import Navbar from "../components/Navbar";

function ProfilePage() {
  const token = localStorage.getItem("token");
  console.log(token);

  const url = "https://637907f87419b414df88cddd.mockapi.io/profile";
  const [data, setData] = useState({
    nik: "",
    nama: "",
    tml: "",
    tgl: "",
    jk: "",
    agama: "",
    nohp: "",
    alamat: "",
    provinsi: "",
    kota: "",
    Kecamatan: "",
    kodepos: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        nik: data.nik,
        nama: data.nama,
        tml: data.tml,
        tgl: data.tgl,
        jk: data.jk,
        agama: data.agama,
        nohp: data.nohp,
        alamat: data.alamat,
        provinsi: data.provinsi,
        kota: data.kota,
        Kecamatan: data.Kecamatan,
        kodepos: data.kodepos,
      })
      .then((res) => {
        console.log("Data Berhasil disimpan");
        console.log(res.data);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  return (
    <div>
      <Navbar />
      <form action="" onSubmit={(e) => submit(e)}>
        <div className="container">
          <div className="row profile">
            <div className="col-md-3">
              <div className="profile-sidebar">
                <div className="profile-userpic">
                  <img
                    src="https://static.change.org/profile-img/default-user-profile.svg"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="profile-usertitle">
                  <div className="profile-usertitle-name">Sadewo</div>
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
                        Input Form Data
                      </Link>
                    </li>
                    <li>
                      <Link to={"/kontak-pribadi"}>
                        <i className="glyphicon glyphicon-file" />
                        Input Form Kontak Pribadi
                      </Link>
                    </li>
                    <li>
                      <Link to={"/upload-berkas"}>
                        <i className="glyphicon glyphicon-file" />
                        Upload Berkas
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <i className="glyphicon glyphicon-log-out" />
                        Logout
                      </a>
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
                    <input
                      type="text"
                      className="form-control"
                      id="nama"
                      value={data.nama}
                      onChange={(e) => handle(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      NIK
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nik"
                      value={data.nik}
                      onChange={(e) => handle(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Tempat Lahir
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tml"
                      value={data.tml}
                      onChange={(e) => handle(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Tanggal Lahir
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="tgl"
                      value={data.tgl}
                      onChange={(e) => handle(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Jenis Kelamin
                    </label>
                    <select
                      defaultValue={"DEFAULT"}
                      className="form-select form-select-lg md-6"
                      aria-label=".form-select-lg example"
                      id="jk"
                      value={data.jk}
                      onChange={(e) => handle(e)}
                    >
                      <option value={"DEFAULT"}>Pilih Jenis Kelamin</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Agama
                    </label>
                    <select
                      defaultValue={"DEFAULT"}
                      className="form-select form-select-lg md-6"
                      aria-label=".form-select-lg example"
                      id="agama"
                      name="agama"
                      value={data.agama}
                      onChange={(e) => handle(e)}
                    >
                      <option value={"DEFAULT"}>Pilih salah satu..</option>
                      <option value="Islam">Islam</option>
                      <option value="Kristen Protestan">
                        Kristen Protestan
                      </option>
                      <option value="Kristen Katolik">Kristen Katolik</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Buddha">Buddha</option>
                      <option value="Konghucu">Konghucu</option>
                    </select>
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
                    <input
                      type="text"
                      className="form-control"
                      id="nohp"
                      value={data.nama}
                      onChange={(e) => handle(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Alamat
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="alamat"
                      value={data.nik}
                      onChange={(e) => handle(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Provinsi
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="provinsi"
                      value={data.tml}
                      onChange={(e) => handle(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Kota
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="kota"
                      value={data.tgl}
                      onChange={(e) => handle(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Kecamatan
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="kecamatan"
                      value={data.tgl}
                      onChange={(e) => handle(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="" className="form-label">
                      Kode Pos
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="kodepos"
                      value={data.tgl}
                      onChange={(e) => handle(e)}
                    />
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
