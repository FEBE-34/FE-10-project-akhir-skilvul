import "../assets/css/ProgramCard.css"


import React from 'react'

import { NavLink } from "react-router-dom"

const ProgramCard = (props) => {
  return (
    <div className="program-card-container">
        
      
            <div className="program-card">
                <img src={props.imgsrc} alt="img" />           
                <h2 className="program-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">Daftar</NavLink>
                        
                    </div>
                    
                    </div>
            </div>

    

            
  
        </div>
  )
}

export default ProgramCard