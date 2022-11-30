import React from 'react'
import DataProgram from "../ProgramFavoriteCardData"
import CardDetail from './CardDetail'
import { useParams } from 'react-router-dom'

const ProgramDetail = () => {
    const {id} = useParams();
    return (
        <div>
            {DataProgram.filter((key)=> key.id === +id).map((item, ind)=>{
            return (
                <CardDetail
                 key={ind}
                 id={item.id}
                 imgsrc={item.imgsrc}
                 title={item.title}
                 website={item.website}
                 period={item.period}
                 text={item.text}
                 requirement={item.requirement}
                 company={item.company}></CardDetail>
            )
        })}</div>
    )
}

export default ProgramDetail