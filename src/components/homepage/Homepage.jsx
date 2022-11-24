import React, { useEffect } from 'react'
import { Routes, Route, Link} from 'react-router-dom';

import './bootstrap/css/bootstrap.min.css';
import './bootstrap/fonts/font-awesome.min.css'
import './bootstrap/css/home.css'

import ProgramDetail from './ProgramDetail';


const Homepage = () => {
    useEffect(() => {
        let tampungusername = document.getElementById("nama");
        let ambilUsername = localStorage.getItem("Username");
        tampungusername.innerText = ambilUsername;
    async function tampilHome() {
      // let ambilID = localStorage.getItem("ID");
      // let ambildata = JSON.parse(ambilID)
    
      let response = await fetch(
        "https://634cc344f5d2cc648e940bb2.mockapi.io/program",
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    
      const data = await response.json();
      console.log(data);
      let ambilemail = localStorage.getItem("Username");
      // let dataemail = JSON.parse(ambilemail)
      data.forEach((element) => {
        //  let idprofile =  element.id ===  ambildata;
        //  console.log(idprofile)
        //    if( element.id ===  ambilID){
        const tampung = document.getElementById("coba1");
        tampung.innerHTML = `
              
              <div class="thumbnail">
              <img src="${require('./bootstrap/img/gambar4.jpg')}">
            
            <div class="caption">
              <h3>${element.nama}</h3>
              <h6>Kitabisa.com</h6>
              <p class="text-justify">${element.deskripsi}</p>
              <p>Kantor
                Jl. Raya Cilandak Kko No.31, RT.14/RW.8, Ragunan, Ps. Minggu</p>
                <span></span>
                <small>${element.tanggal_mulai} - ${element.tanggal_selesai}  (1 bulan)</small> <br>
                <a href="/programdetail" class="btn btn-primary">READ MORE</a>
            </div>
            </div>`;
        //    }
      });
    }
    tampilHome();
    })
  return (
    <body>
        <nav className="navbar-default navbar static-top"> 
        <div className="container" id="navbar">
            <div className="navbar-header">
            <a href="./home.html" className="navbar-brand navbar-link"></a>
            <img src={require("./bootstrap/img/logo.png")} width="100px" />
            <button className="navbar-toogle collapse" data-target="#navcol-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            </div>
            <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav navbar-right">
                <li role="presentation">
                <a href="./home.html">Beranda</a>
                </li>
                <li role="presentation">
                <a href="#">Program</a>
                </li>
                <li role="presentation">
                <a href="#">Kegiatan</a>
                </li>
                <li role="presentation">
                <a href="akun.html">Akun</a>
                </li>
                <li role="presentation">
                <a id="nama" href="#">Deni</a>
                </li>
                <li><a href="/profile"><img src={require("./bootstrap/img/profile.png")} width="50px" /></a></li>
            </ul>
            </div>
        </div>
        </nav>


        <div id="background">
        <div className="jumbotron" style={{textAlign:"left"}}>
            <h1>Pilihlah Program Bantuan Untuk Masa Depan Mu</h1>
            <p>
            Kamu bisa memilih berbagai pilihan program dari Asian Youth
            Organization yang tersedia untukmu
            </p>
        </div>
        </div>

        <div id="home">
        <div className="isi">
            <div className="container atas">
            <h1>DIS-HELP</h1>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <i className="glyphicon glyphicon-map-marker"></i>
                <h3>STRATEGIC</h3>
                <p className="text-justify">
                    <strong>Dis-Help</strong> Memiliki beberapa Program Unggulan,
                    seperti Program Donasi Uang, Makanan dan Pakaian.
                </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <i className="glyphicon glyphicon-globe"></i>
                <h3>SCOPE</h3>
                <p className="text-justify">
                    <strong>Dis-Help</strong> Memiliki Ruang Lingkup se-ASEAN,
                    tetapi yang diutamakan adalah Indonesia.
                </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <i className="glyphicon glyphicon-briefcase"></i>
                <h3>TARGET</h3>
                <p className="text-justify">
                    <strong>Dis-Help</strong> Memiliki Target untuk orang Penyandang
                    Disabilitas.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="container program">
        <h1>Pilih Program</h1>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <img className="img-circle" src={require("./bootstrap/img/gambar1.jpg")} width="200px" />
            <h3>Bantuan Makanan</h3>
            <p className="text-center">
                <strong>Dis-Help</strong> Memiliki program donasi berupa Makanan
                untuk yang membutuhkan.
            </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <img className="img-circle" src={require("./bootstrap/img/gambar2.jpg")} width="200px" />
            <h3>Bantuan Pakaian</h3>
            <p className="text-center">
                <strong>Dis-Help</strong> Memiliki program donasi berupa Pakaian
                untuk yang membutuhkan.
            </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <img className="img-circle" src={require("./bootstrap/img/gambar3.png")} width="200px" />
            <h3>Bantuan Uang</h3>
            <p className="text-center">
                <strong>Dis-Help</strong> Memiliki program donasi berupa Uang untuk
                yang membutuhkan.
            </p>
            </div>
        </div>
        </div>

        <div id="kegiatan">
        <div className="container">
            <h1>Kegiatan</h1>
            <div className="row">
            <div id="coba1" className="col-lg-3 col-md-3 col-sm-6 col-xs-6"></div>
            </div>
        </div>
        </div>

        <div id="about">
        <div className="container footer">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1><img src={require("./bootstrap/img/logo.png")} width="180px" /></h1>
            <h2>About Us</h2>
            <p>
                Dis-Help adalah sebuah Organisasi yang bertujuan untuk membantu
                orang Penyandang Disabilitas di ASEAN khususnya di Indonesia.
            </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h2>Feedback</h2>
            <div className="input-group input-group-lg">
                <input type="text" className="form-control" placeholder="Your Email" />
                <div className="input-group-btn">
                <button className="btn btn-primary" type="submit">Send</button>
                </div>
            </div>
            <div id="icon">
                <i className="fa fa-instagram"></i>
                <i className="fa fa-facebook-official"></i>
                <i className="fa fa-twitter-square"></i>
                <i className="fa fa-youtube-play"></i>
            </div>
            </div>
        </div>
        </div>

        <div id="kaki">
            <div className="container">
                <h5 className="text-center">DIS-HELP. © 2022</h5>
            </div>
        </div>

    </body>
  )
}

export default Homepage