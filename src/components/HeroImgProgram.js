import "../assets/css/HeroImgProgram.css";
import React from 'react'

import Intro from "../assets/img/bg-program.jpg"
 
// import { Link } from "react-router-dom";


function HeroImgProgram() {
  return (
    <div>

        <div className="hero2">
          <div className="mask">
          <img className="intro-img" src={Intro} alt="introImg" />    
    
          </div>

      <div className="content">  
        <div className="search">
        <h2>Cari Program</h2>

        
        <form className="example">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
           
        </div>
    
         
          {/* <div>
              <Link to="/program" className="btn-cari" > Cari Program</Link>
          </div> */}



      </div>
    </div>
    </div>
  )
}

export default HeroImgProgram