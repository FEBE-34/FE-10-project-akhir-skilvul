import React from 'react'
import StatusPendaftaran from '../components/StatusPendaftaran'
import image from '../assets/img/bg-status.jpg'


function StatusPendaftaranPage() {
  return (
    <div style={{backgroundImage: `url(${image})`,  padding:"5vh 0"}}>
        <StatusPendaftaran/>
        </div>
     
  )
}

export default StatusPendaftaranPage