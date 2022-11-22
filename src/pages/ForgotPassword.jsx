import React from "react";
import { Link } from "react-router-dom";
import forgotpassword from "../assets/img/forgot-password.png";
import "../assets/css/Sign.css";

function ForgotPassword() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="auth-box">
          <div className="auth-header">
            <div className="auth-header-logo">
              <img
                src={forgotpassword}
                alt=""
                className="auth-header-logo-img"
              />
            </div>
            <h1 className="auth-header-title">Forgot Password</h1>
            <p className="auth-header-subtitle">Lupa Password</p>
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
              <button type="submit" className="btn-submit">
                Kirim
              </button>
              <Link to={"/signin"} className="btn-back-to-login">
                Back to Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ForgotPassword;
