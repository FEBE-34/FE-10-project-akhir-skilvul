import React from 'react'
import KegiatanAktif from '../components/KegiatanAktif'
import image from '../assets/img/bg-ka.jpg'
// import { Link } from "react-router-dom"

function KegiatanAktifPage() {
  return (
    
      <div style={{backgroundImage: `url(${image})`,  padding:"5vh 0"}}>
      <KegiatanAktif />
        </div>

  
  )
}

export default KegiatanAktifPage