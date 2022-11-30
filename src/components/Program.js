import React, { useEffect, useState } from 'react'
import "../assets/css/ProgramCard.css"
// import ProgramCard from "./ProgramCard"
// import ProgramCardData from "./ProgramCardData"

const Program = () => {
    // const [programs, setPrograms] = useState([]);



    // const getPrograms = async () => {
    //     const response = await fetch("https://grup-project-be-34-production.up.railway.app/homepenyandang/lihat");
    //     const FinalData = await response.json();
    //     setPrograms(FinalData)
    // }



    // useEffect(() => {
    //     getPrograms();
    // }, [])

  return (

//     <div className="container">
               
//                 {
//                     programs.map((curElem) => {
//                         return (

//                             <div className="card_item" key={curElem.id}>
//                                 <div className="card_inner">
//                                     <img src={curElem.avatar_url} alt="" />
//                                     <div className="userName">{curElem.login}</div>
//                                     <div className="userUrl">{curElem.url}</div>
//                                     <div className="detail-box">

//                                         <div className="gitDetail"><span>Articles</span>23</div>
//                                         <div className="gitDetail"><span>Following</span>45</div>
//                                         <div className="gitDetail"><span>Followers</span>11</div>
//                                     </div>
//                                     <button className="seeMore">See More</button>
//                                 </div>

//                             </div>
//                         )
//                     })
//                 }

//             </div>    
//   )
//             }
                  
 
    <div className="program-card-container">
    <h1 className="program-heading">Program</h1>
    <div className="program-container">           
        {ProgramCardData.map((val, ind) => {
            return(
                <ProgramCard
                key={ind}
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

export default Program