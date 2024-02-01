import React from 'react'
import style from "../style/footer.module.css"
import logo from "../assets/logo (1).jpg"
import Twitter from "../assets/twitter.png"
import Facebook from "../assets/facebook.png"
import Linkedin from "../assets/linkedin.png"
import Instagram from "../assets/instagram.png"


const Footer = () => {
  return (
    <div className={style.footer}>
        <img src={logo} 
             className={style.footerLogo} 
             alt="logo"></img>
    <div className={style.footerMenu}>
        <a href="index.php">About</a>
        <a href="index.php">FAQ</a>
        <a href="index.php">Size Guide</a>
        <a href="index.php">Shipping</a>
        <a href="index.php">Payment</a>
    </div>

    <div className={style.socialNetworks}>
        <img src={Twitter} alt="Twitter"></img>
        <img src={Facebook} alt="Facebook"></img>
        <img src={Instagram} alt="Instagram"></img>
        <img src={Linkedin} alt="Linkedin"></img>
    </div>
    <div className={style.references}>
        <a href="index.php">@HerLine. All rights reserved</a>
    </div>
</div>

  )
}

export default Footer