import React from 'react'
import style from "../style/product.module.css"
import { Link } from "react-router-dom";

const Card = ({image, title, price, link}) => {
  return (
    <div className={style.permbajtja}>
   <div className={style.item}>
   <div
        className={style.cardImg}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
     <h1>{title}</h1>
     {price ? <p>${price}</p> : <></>}
     <Link to={link}>View</Link>
  </div>
  </div>
  )
}

export default Card