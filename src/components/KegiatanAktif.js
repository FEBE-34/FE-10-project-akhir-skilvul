
import "../assets/css/KegiatanAktif.css"
import KegiatanAktifCard from "./KegiatanAktifCard"
import KegiatanData from "./KegiatanAktifData "
import React from 'react'

const KegiatanAktif = () => {
  return (
    <div className="kegiatan-card-container">
        <h1 className="kegiatan-heading">KEGIATAN AKTIF</h1>
        <div className="kegiatan-container">
            {KegiatanData.map((val, ind) => {
                return(
                    <KegiatanAktifCard
                    key={ind}
                    id={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text} 
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default KegiatanAktif