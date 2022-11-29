import React from "react";
import "../assets/css/Profile.css";

function ProfilePage() {
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <div>
      <Navbar />
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
                    <a href="#">
                      <i className="glyphicon glyphicon-user" />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="glyphicon glyphicon-cog" />
                      User Setting
                    </a>
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
              <div class="row">
                <h3 className="d-flex align-items-center mb-3">Data Pribadi</h3>
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">Sadewo</div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">NIK</h6>
                </div>
                <div className="col-sm-9 text-secondary">31232132</div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Tempat Lahir</h6>
                </div>
                <div className="col-sm-9 text-secondary">Jakarta</div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Tanggal Lahir</h6>
                </div>
                <div className="col-sm-9 text-secondary">08-11-01</div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Jenis Kelamin</h6>
                </div>
                <div className="col-sm-9 text-secondary">Laki-Laki</div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Agama</h6>
                </div>
                <div className="col-sm-9 text-secondary">Islam</div>
              </div>
              <hr />
              <div className="row">
                <h3 className="d-flex align-items-center mb-3">
                  Kontak Pribadi
                </h3>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">No HP</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">08121219219</div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Alamat</h6>
                  </div>
                  <div class="col-sm-9 text-dark">Jl. Menuju Bumi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
