import "../assets/css/HeroImg.css";
import React from 'react'
import Intro from "../assets/img/gambar1.PNG"
import p1 from "../assets/img/gambar1.jpg"
import p2 from "../assets/img/gambar2.jpg"
import p3 from "../assets/img/gambar3.png"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
   <>
    <div className="hero">
        <div className="mask">
        <img className="intro-img" src={Intro} alt="introImg" />    
   
        </div>

      <div className="content">      
          <h1>Pilihlah Program Bantuan Untuk Masa Depan Mu</h1>
          <p>Kamu bisa memilih berbagai pilihan program dari Asian Youth Organization yang tersedia untukmu</p>
          <div>
              <Link to="/program" className="btn" > Daftar Program</Link>
          </div>



      </div>
    </div>

    <div className="container program">
        <h1>Pilih Program</h1>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <img className="img-circle" src={p1} width="200px" />
            <h3>Bantuan Makanan</h3>
            <p className="text-center">
                <strong>Dis-Help</strong> Memiliki program donasi berupa Makanan
                untuk yang membutuhkan.
            </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <img className="img-circle" src={p2} width="200px" />
            <h3>Bantuan Pakaian</h3>
            <p className="text-center">
                <strong>Dis-Help</strong> Memiliki program donasi berupa Pakaian
                untuk yang membutuhkan.
            </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <img className="img-circle" src={p2} width="200px" />
            <h3>Bantuan Uang</h3>
            <p className="text-center">
                <strong>Dis-Help</strong> Memiliki program donasi berupa Uang untuk
                yang membutuhkan.
            </p>
            </div>
        </div>
        </div>
  </>

  )
}

export default HeroImg