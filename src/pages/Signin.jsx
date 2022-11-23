import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../assets/css/Sign.css";

function Signin() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="auth-box">
          <div className="auth-header">
            <div className="auth-header-logo">
              <img src={logo} alt="" className="auth-header-logo-img" />
            </div>
            <h1 className="auth-header-title">Welcome to Dis-Help</h1>
            <p className="auth-header-subtitle">Login terlebih dahulu.</p>
          </div>
          <div className="auth-body">
            <form action="" className="auth-form-validation">
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
              <div className="flex-end">
                <Link to={"/forgot-password"} className="link-end">
                  Forgot Password ?
                </Link>
              </div>
              <button type="submit" className="btn-submit">
                Login
              </button>
            </form>
            <p className="text-center">
              Tidak punya Akun ?
              <Link to={"/signup"} className="link-text-center">
                Buat Akun
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signin;
