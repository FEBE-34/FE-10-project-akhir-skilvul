import React from 'react'
import "../assets/css/Kategori.css";
import ProgramFavorite from './ProgramFavorite';



const Kategori = () => {
  return (
    <div>
      <div class="sidenav">
        <a href="/program">Kegiatan Aktif</a>
        <hr/>
        <a href="#">Status Pendaftaran</a>
        <hr/>

 
      </div>

      <div class="content-kegiatan">
        <ProgramFavorite/>
      </div>

 
  
        



    </div>
  )
}

export default Kategori