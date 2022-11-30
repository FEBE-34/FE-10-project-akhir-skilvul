import React from 'react'
import ProgramDetail from '../components/programdetail/ProgramDetail'
import image from '../assets/img/background.jpg'

function ProgramDetailPage(){
    return (
      <div style={{backgroundImage: `url(${image})`,  padding:"5vh 0"}}>
        <ProgramDetail/>
        <div style={{display:"flex", justifyContent:"center"}}>
          <button className='buttonDaftar'>Daftar Sekarang!</button>
        </div>
      </div>
    // <ProgramDetail/>
    )
  }
  
  export default ProgramDetailPage