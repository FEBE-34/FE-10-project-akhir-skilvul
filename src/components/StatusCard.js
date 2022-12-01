import "../assets/css/StatusPendaftaran.css"

import { NavLink, useNavigate } from "react-router-dom"

const StatusCard = (props) => {

const navigation = useNavigate();
const handleDetail = (id) => {
  navigation(`/programdetail/${id}`)

}
 
  return (

    <div className="status-card-container">
        
      
            <div className="status-card">
                <img src={props.imgsrc} alt="img" />           
                <h2 className="status-title">{props.title}</h2>
                <div className="status-details">
                    <p>{props.text}</p>
                    <div className="status-btns" onClick={()=> handleDetail(props.id)}>
                        <NavLink to={props.view} className="btn">View</NavLink>
                        
                    </div>
                    </div>
            </div>

    

            
  
        </div>
  )
}

export default StatusCard