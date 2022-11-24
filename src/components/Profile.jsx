import React from 'react'

import './homepage/bootstrap/css/bootstrap.min.css'

const Profile = () => {
  return (
    <body>
    <nav></nav>
    <section>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center ml-4 mt-5">
            <div className="flex-shrink-0">
              <img
                style={{border: "1px solid"}}
                src={require("./homepage/bootstrap/img/image.png")}
                width="100px"
                className="rounded-circle"
                alt="..."
              />
            </div>
            <div className="flex-shrink-0 ms-3">
              <h3>Zaid Abdillah</h3>
              <h6>zaidabdillah18@gmail.com</h6>
              <small>Penyandang Disabilitas</small><br />
              <br />
              <a href="#" className="btn btn-primary">Edit</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-4">
      <div
        style={{
          width: "500px",
          border: "1px solid",
          borderRadius: "10px",
          paddingLeft: "50px",
          paddingTop: "10px",
          paddingBottom: "10px"
        }}
        className="d-flex align-items-center"
      >
        <div className="flex-shrink-0">
          <img width="50px" src={require("./homepage/bootstrap/img/profile copy.png")} alt="..." />
        </div>
        <div className="flex-shrink-0 ms-3">
          <a
            href="./profile.html"
            style={{color: "black", fontSize: "30px", textDecoration:" none"}}
            >Profile</a>
        </div>
      </div>
      <div
        style={{
          width: "500px",
          border: "1px solid",
          borderRadius: "10px",
          paddingLeft: "50px",
          paddingTop: "10px",
          paddingBottom: "10px"
        }}
        className="d-flex align-items-center"
      >
        <div className="flex-shrink-0">
          <img width="50px" src={require("./homepage/bootstrap/img/docs.png")} alt="..." />
        </div>
        <div className="flex-shrink-0 ms-3">
          <a
            href="./formpendataan.html"
            style={{color: "black", fontSize: "30px", textDecoration: "none"}}
            >Data Pribadi</a>
        </div>
      </div>
      <div
        style={{
          width: "500px",
          border: "1px solid",
          borderRadius: "10px",
          paddingLeft: "50px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
        className="d-flex align-items-center"
      >
        <div className="flex-shrink-0">
          <img width="50px" src={require("./homepage/bootstrap/img/docs.png")} alt="..." />
        </div>
        <div className="flex-shrink-0 ms-3">
          <a
            href="#"
            style={{color: "black", fontSize: "30px", textDecoration: "none"}}
            >Lengkapi Dokumen</a>
        </div>
      </div>
      <div
        style={{
          width: "500px",
          border: "1px solid",
          borderRadius: "10px",
          paddingLeft: "50px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
        className="d-flex align-items-center"
      >
        <div className="flex-shrink-0">
          <img width="50px" src={require("./homepage/bootstrap/img/logout.png")} alt="..." />
        </div>
        <div className="flex-shrink-0 ms-3">
          <a
            href="#"
            style={{color: "black", fontSize: "30px", textDecoration: "none"}}
            onclick="window.location.href='index.html'"
            >Logout</a>
        </div>
      </div>
    </section>
  </body>
  )
}

export default Profile