import React from 'react'
import '../../assets/css/ProgramDetail.css'
import { FaPeopleCarry, FaUserAlt, FaSearchLocation, FaGlobe, FaClipboardList } from "react-icons/fa";

const CardDetail = (props) => {
  return (
    <div className='container-program'>
        <div className='title-program'>
            <FaClipboardList style={{width:"3vw", height:"auto", paddingRight:"1vw"}}></FaClipboardList>
            <h1 style={{fontSize:"250%"}}>Detail Program</h1>
        </div>
        <div className='subContainer-program'>
            <div className='containerBanner-program'>
                <img className='banner-program' src={props.imgsrc} />
            </div>
        <h2 style={{fontSize:"200%", marginBottom:"-2vh"}}>{props.title}</h2>
        <p style={{marginBottom:"-0.5vh"}}>{props.website}</p><br></br>
        <p style={{color:"#8d8d8d"}}>{props.period}</p> 
        <hr style={{borderTop: "3px solid #bbb"}}></hr>
        <h2>Deskripsi Kegiatan</h2>
        <p>{props.text}</p>
        <hr style={{borderTop: "3px solid #bbb"}}></hr>
        <h2>Kriteria Peserta</h2>
        <p>{props.requirement}</p>
        <hr style={{borderTop: "3px solid #bbb"}}></hr>
        <h2>Tentang Perusahaan</h2>
        <div style={{display:"flex", gap:"2vw"}}>
            <img className='logo-program' src={props.imgsrc}></img>
            <div style={{flexDirection:"row", marginTop:"-2.5vh"}}>
            <p style={{marginBottom:"-2vh"}}><strong>{props.company.name}</strong></p>
            <p style={{marginBottom:"3vh"}}>{props.company.alias}</p>

            <div style={{display:"flex",flexDirection:"row", marginBottom:"1.5vh"}}>
                <FaPeopleCarry></FaPeopleCarry>
                <p style={{margin:"-0.5vh 1vw"}}>{props.company.category}</p>
            </div>
            <div style={{display:"flex",flexDirection:"row", marginBottom:"1.5vh"}}>
                <FaUserAlt></FaUserAlt>
                <p style={{margin:"-0.5vh 1vw"}}>{props.company.employee}</p>
            </div>
            <div style={{display:"flex",flexDirection:"row", marginBottom:"1.5vh"}}>
                <FaSearchLocation></FaSearchLocation>
                <p style={{margin:"-0.5vh 1vw"}}>{props.company.address}</p>
            </div>
            <div style={{display:"flex",flexDirection:"row", marginBottom:"5vh"}}>
                <FaGlobe></FaGlobe>
                <p style={{margin:"-0.5vh 1vw"}}>{props.website}</p>
            </div></div>
        </div>
    </div>
    </div>
  )
}

export default CardDetail