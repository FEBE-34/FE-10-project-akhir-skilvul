import React from 'react'
import "../assets/css/ProgramCard.css"
import ProgramCard from "./ProgramCard"
import ProgramCardData from "./ProgramCardData"

const Program = () => {
  return (
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