import React, { useState } from "react";
import style from "../style/navbar.module.css";
import logo from "../assets/logo (1).jpg";
import { Link } from "react-router-dom";
import { MdShoppingCart, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className={`${style.navbar}`}>
      <div className={`${style.wrapper} ${style.nav}`}>
        <Link to="/">
          <img src={logo} alt="Logo" className={style.navLogo} />
        </Link>

        <div className={style.navLinks}>

          <Link to="/products" className={style.links}>
            Products
          </Link>
          <Link to="/about" className={style.links}>
            About
          </Link>
          <Link to="/addproduct" className={style.links}>
            Add Product
          </Link>
          <Link to="/login" className={style.links}>
            Log in
          </Link>
          <Link to="/cart">
            <MdShoppingCart size={30} />
          </Link>
          {!mobile ? (
            <MdMenu
              size={30}
              onClick={() => {
                setMobile(!mobile);
              }}
              className={style.openCloseIcons}
            />
          ) : (
            <MdClose
              size={30}
              onClick={() => {
                setMobile(!mobile);
              }}
              className={style.openCloseIcons}
            />
          )}
        </div>
      </div>
      {mobile ? (
        <div className={style.mobileNavbar}>
          <Link to="/">
            <img src={logo} alt="Logo" className={style.navLogo} />
          </Link>
          <Link to="/products" className={style.mobileLinks}>
            Products
          </Link>
          <Link to="/about" className={style.mobileLinks}>
            About
          </Link>
          <Link to="/contact-us" className={style.mobileLinks}>
            Contact Us
          </Link>
          <Link to="/login" className={style.links}>
            Log in
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
