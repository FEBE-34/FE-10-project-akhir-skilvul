import "../assets/css/ProgramCard.css"


import React, { useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
// import axios from "axios";

const ProgramCard = (props) => {

  const navigation = useNavigate();
  const handleDetail = (id) => {
    navigation(`/programdetail/${id}`)

  }
 
  return (
    <div className="kegiatan-card-container">
        
      
            <div className="kegiatan-card">
                <img src={props.imgsrc} alt="img" />           
                <h2 className="kegiatan-title">{props.title}</h2>
                <div className="kegiatan-details">
                    <p>{props.text}</p>
                    <div className="kegiatan-btns" onClick={()=> handleDetail(props.id)}>
                        <NavLink to={props.view} className="btn">View</NavLink>
                        
                    </div>
                    </div>
            </div>

    

            
  
        </div>
  )
}

export default ProgramCard