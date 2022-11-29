import axios from "axios";
import React, { useState } from "react";
import logo from "../assets/img/reset-password.png"

function ResetPassword() {
    const [password, setPassword] = useState("");
    const [errorpassword, setErrorPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [errorconfirmpassword, setErrorConfirmPassword] = useState("");
    const [alert, setAlert] = useState("");
    const url = "https://grup-project-be-34-production.up.railway.app/user/resetpassword";

    const changePassword = (e) =>{
        const value = e.target.value
        setPassword(value)
        if(!value){
            setErrorPassword('Password Tidak Boleh Kosong')
        }else{
            setErrorPassword('')
        }
    }

    const changeConfirmPassowrd = (e) => {
        const value = e.target.value
        setConfirmPassword(value)
        if(!value){
            setErrorConfirmPassword('Confirm Password Tidak Boleh Kosong')
        } else if (password !== value) {
            setErrorConfirmPassword('Password Tidak Sama')
        } else {
            setErrorConfirmPassword('')
        }
    }

    const simpan = (e) => {
        const data = {
            password: password,
        }
        axios.put(url, data).then(res => {
          if(res) {
            console.log("Data Tersimpan", res);
            setPassword('')
            setConfirmPassword('')
            setAlert('Password Berhasil diGanti')
          }
        })
    }

    return (
    <React.Fragment>
      <div className="wrapper">
        <div className="auth-box">
          <div className="auth-header">
            <div className="auth-header-logo">
              <img src={logo} alt="" className="auth-header-logo-img" />
            </div>
            <h1 className="auth-header-title">Reset Password</h1>
          </div>
          <div className="auth-body">
            <form action="" className="auth-form-validation">
              {
                alert && (
                  <div className="alert alert-primary">
                    {alert}
                  </div>
                )
              }
                <div className="input-field">
                <label htmlFor="" className="input-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="input-control"
                  name="password"
                  id="password"
                  value={password}
                  onChange={changePassword}
                  placeholder="Password Baru"
                  autoComplete="off"
                />
                {errorpassword && (
                  <p className="text-danger">{errorpassword}</p>
              )}
              </div>
              <div className="input-field">
                <label htmlFor="" className="input-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="input-control"
                  name="password"
                  id="password"
                  value={confirmpassword}
                  onChange={changeConfirmPassowrd}
                  placeholder="Ulangin Password"
                  autoComplete="off"
                />
                {errorconfirmpassword && (
                  <p className="text-danger">{errorconfirmpassword}</p>
              )}
              </div>
              <button type="submit" className="btn-submit" onClick={simpan}>
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ResetPassword