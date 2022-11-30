import "../assets/css/ProgramCard.css"


import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"

const ProgramCard = (props) => {
  const navigation = useNavigate();
  const handleDetail = (id) => {
    navigation(`/programdetail/${id}`)

  }
  return (
    <div className="program-card-container">
        
      
            <div className="program-card">
                <img src={props.imgsrc} alt="img" />           
                <h2 className="program-title">{props.title}</h2>
                <div className="program-details">
                    <p>{props.text}</p>
                    <div className="program-btns" onClick={()=> handleDetail(props.id)}>
                        <NavLink to={props.view} className="btn">View</NavLink>
                        
                    </div>
                    </div>
            </div>

    

            
  
        </div>
  )
}

export default ProgramCard