import React from 'react'
import style from "../../style/home.module.css"
import Image from "../../assets/pink.jpg"


const HomePageMain = () => {
  return (

    <div className={style.HomeContainer}>
    <div className={style.HomeDescription}>
          <h1>Give yourself new clothes!</h1>
         <p>LIFE IS SHORT </p><p>Make every outfit count</p>
        
        </div>
    <div className={style.HomePicture}>
        <img src={Image} alt="HomeImage"></img>
 </div>
   </div>

  )
}

export default HomePageMain