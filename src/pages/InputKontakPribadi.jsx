import React, { useState } from "react";
import axios from "axios";
import "../assets/css/Profile.css";
import { Navigate } from "react-router-dom";

function InputKontakPribadi() {
  const token = localStorage.getItem("token");
  const url =
    "https://grup-project-be-34-production.up.railway.app/profile/datapribadi/kontakpribadi/";

  const [data, setData] = useState({
    no_hp: "",
    alamat: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    desa: "",
    kode_pos: "",
  });

  function submit(e) {
    e.preventDefault();
    console.log(data);
    axios
      .post(
        url,
        {
          no_hp: data.no_hp,
          alamat: data.alamat,
          provinsi: data.provinsi,
          kota: data.kota,
          kecamatan: data.kecamatan,
          desa: data.desa,
          kode_pos: data.kode_pos,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  if (!token) {
    return <Navigate to={"/signin"} />;
  }

  return (
    <div>
      <form action="" onSubmit={submit}>
        <div className="col-md-12">
          <div className="profile-content-formdata">
            <div class="row g-3">
              <h3 className="d-flex align-items-center mb-3">
                Input Kontak Pribadi
              </h3>
              <div className="col-md-6">
                <label htmlFor="" className="form-label">
                  No HandPhone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="no_hp"
                  value={data.no_hp}
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
                  value={data.alamat}
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
                  value={data.provinsi}
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
                  value={data.kota}
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
                  value={data.kecamatan}
                  onChange={(e) => handle(e)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="" className="form-label">
                  Desa
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desa"
                  value={data.desa}
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
                  id="kode_pos"
                  value={data.kode_pos}
                  onChange={(e) => handle(e)}
                />
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

export default InputKontakPribadi;
