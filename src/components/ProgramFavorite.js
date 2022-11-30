import "../assets/css/ProgramFavorite.css"
import ProgramFavoriteCard from "./ProgramFavoriteCard"
import ProgramFavoriteCardData from "./ProgramFavoriteCardData"



import React from 'react'


const ProgramFavorite = () => {
 
  return (
    <div className="program-favorite-container">
        <h1 className="program-heading">Program Favorite</h1>
        <div className="program-container">
            {ProgramFavoriteCardData.map((val, ind) => {
                return(
                    <ProgramFavoriteCard
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

export default ProgramFavorite
