import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../assets/css/Sign.css";

function Signup() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="auth-box">
          <div className="auth-header">
            <div className="auth-header-logo">
              <img src={logo} alt="" className="auth-header-logo-img" />
            </div>
            <h1 className="auth-header-title">Create Account</h1>
            <p className="auth-header-subtitle">Buat Akun</p>
          </div>
          <div className="auth-body">
            <form action="" className="auth-form-validation">
              <div className="input-field">
                <label htmlFor="" className="input-label">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="input-control"
                  name="nama"
                  id="nama"
                  placeholder="Muhammad Sadewo Wicaksono"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="" className="input-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="input-control"
                  name="email"
                  id="email"
                  placeholder="contoh@gmail.com"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="" className="input-label">
                  Password
                </label>
                <input
                  type="password"
                  className="input-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="" className="input-label">
                  Posisi
                </label>
                <select name="" id="" className="select-control">
                  <option value="Pilih Posisi">Pilih Posisi</option>
                  <option value="Peyandang Disabilitas LSM">
                    Non-Disabilitas
                  </option>
                  <option value="Peyandang Disabilitas LSM">
                    Peyandang Disabilitas LSM
                  </option>
                  <option value="Peyandang Disabilitas NON-LSM">
                    Peyandang Disabilitas NON-LSM
                  </option>
                </select>
              </div>
              <button type="submit" className="btn-submit">
                Buat Akun
              </button>
            </form>
            <p className="text-center">
              Sudah Punya Akun ?
              <Link to={"/signin"} className="link-text-center">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signup;
