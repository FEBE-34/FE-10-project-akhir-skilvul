import React, { useCallback, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/Profile.css";
import Navbar from "../components/Navbar";

function InputFormData() {
  const url =
    "https://grup-project-be-34-production.up.railway.app/profile/datapribadi/";

  const [data, setData] = useState({
    nik: "",
    nama: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    agama: "",
  });

  function submit(e) {
    e.preventDefault();
    console.log(data);
    axios
      .post(
        url,
        {
          nama: data.nama,
          nik: data.nik,
          tempat_lahir: data.tempat_lahir,
          tanggal_lahir: data.tanggal_lahir,
          jenis_kelamin: data.jenis_kelamin,
          agama: data.agama,
        },
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
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
      <form action="" onSubmit={submit}>
        <div className="col-md-12">
          <div className="profile-content-formdata">
            <div class="row g-3">
              <h3 className="d-flex align-items-center mb-3">
                Input Data Pribadi
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
                  id="tempat_lahir"
                  value={data.tempat_lahir}
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
                  id="tanggal_lahir"
                  value={data.tanggal_lahir}
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
                  id="jenis_kelamin"
                  value={data.jenis_kelamin}
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
                  <option value="Kristen Protestan">Kristen Protestan</option>
                  <option value="Kristen Katolik">Kristen Katolik</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Buddha">Buddha</option>
                  <option value="Konghucu">Konghucu</option>
                </select>
              </div>
              <div className="col-md-12">
                <button type="submit" class="btn btn-primary">
                  <i className="glyphicon glyphicon-floppy-saved"></i>
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputFormData;
