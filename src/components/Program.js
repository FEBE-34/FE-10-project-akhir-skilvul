import React, { useEffect } from 'react'
import ProgramDetail from './ProgramDetail';

import './bootstrap/css/bootstrap.min.css';
import './bootstrap/fonts/font-awesome.min.css'
import "../assets/css/Program.css";


const Program = () => {
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
    <div>
        <div id="kegiatan">
        <div className="container">
            <h1>Kegiatan</h1>
            <div className="row">
            <div id="coba1" className="col-lg-3 col-md-3 col-sm-6 col-xs-6"></div>
            </div>
        </div>
        </div>

    </div>
    </body>
  )
}

export default Program