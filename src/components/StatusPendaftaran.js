
import "../assets/css/StatusPendaftaran.css"
import StatusCard from "./StatusCard"
import StatusData from "./StatusData"


import React from 'react'


const StatusPendaftaran = () => {
  return (
    <div className="status-card-container">
        <h1 className="status-heading">STATUS PENDAFTARAN</h1>
        <div className="status-container">
            {StatusData.map((val, ind) => {
                return(
                    <StatusCard
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

export default StatusPendaftaran
