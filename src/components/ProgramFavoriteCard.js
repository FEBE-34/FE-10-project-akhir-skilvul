import "../assets/css/ProgramFavorite.css"
// import React, { useEffect } from 'react'

import { NavLink, useNavigate } from "react-router-dom"

const ProgramFavoriteCard = (props) => {
  const navigation = useNavigate();
  const handleDetail = (id) => {
    navigation(`/programdetail/${id}`)

  }
  // const URL = "https://grup-project-be-34-production.up.railway.app/homepenyandang/lihat/";


  // useEffect(() => {
  //   axios.get(URL).then(res => {
  //     console.log(res)
  //   })
  // })
  return (
    <div className="program-favorite-container">
        
      
            <div className="program-card">
                <img src={props.imgsrc} alt="img" />           
                <h2 className="program-title">{props.title}</h2>
                <div className="pro-details">
                    <p style={{lineHeight:"0px"}}><strong>Deskripsi:</strong></p>
                    <hr style={{borderBottom: "1px solid black"}}></hr>
                    <p>{props.text}</p>
                    
                    <div className="pro-btns" onClick={()=> handleDetail(props.id)}>
                        <NavLink to={props.view} className="btn">Lebih Lanjut</NavLink>
                        
                    </div>
                    
                    </div>
            </div>

    

            
  
        </div>
 
  )
}

export default ProgramFavoriteCard
