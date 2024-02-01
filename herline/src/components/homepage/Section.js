import React from 'react'
import style from "../../style/section.module.css"
import Pic1 from "../../assets/pic1.jpg"
import Pic2 from "../../assets/pic3.jpg"
import Pic3 from "../../assets/pic4.jpg"
import Pic4 from "../../assets/pic2.jpg"
import Heels1 from "../../assets/heels1.jpg"
import Heels2 from "../../assets/heels2.jpg"
import Heels3 from "../../assets/heels3.jpg"
import Heels4 from "../../assets/heels4.jpg"

const Section = () => {
  return (
    <>
      <h2 className={style.title}>Latest Products</h2>
      <div className={style.col}>
        <div className={style.prd1}>
          <img src={Pic1} alt="Pic"></img>
          <h4>Pink Polka Dot Dress</h4>

        </div>
        <div className={style.prd1}>
          <img src={Pic2} alt="Pic"></img>
          <h4>V-neck Mini Dress</h4>

        </div>
        <div className={style.prd1}>
          <img src={Pic3} alt="Pic"></img>
          <h4>Bottom Ruffle Dress</h4>

        </div>
        <div className={style.prd1}>
          <img src={Pic4} alt="Pic"></img>
          <h4>Shirt Dress</h4>

        </div>
      </div>

      <div className={style.col2}>
        <div className={style.prd1}>
          <img src={Heels1} alt="Heels"></img>
          <h4>Hot Pink Block Sandals</h4>

        </div>
        <div className={style.prd1}>
          <img src={Heels2} alt="Heels"></img>
          <h4>Block Heeled Sandals</h4>

        </div>
        <div className={style.prd1}>
          <img src={Heels3} alt="Heels" ></img>
          <h4>Baby Pink  Stiletto</h4>

        </div>
        <div className={style.prd1}>
          <img src={Heels4} alt="Heels" ></img>
          <h4>Pink Square Toe Heels</h4>

        </div>
      </div>

    </>
  )
}

export default Section