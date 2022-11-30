
import HeroImg from '../components/HeroImg'
import ProgramFavorite from '../components/ProgramFavorite'
import axios from "axios";
import React, { useEffect } from 'react'




function HomePage() {
  const URL = "https://grup-project-be-34-production.up.railway.app/homepenyandang/lihat/";


  useEffect(() => {
    axios.get(URL).then(res => {
      console.log(res)
    })
  })
  return (
    <div>
    <HeroImg />
 
    <ProgramFavorite />

  
    </div>
  )
}

export default HomePage