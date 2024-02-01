import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Filters from "../components/productpage/Filters";
import Section from "../components/homepage/SectionCard"
import { MainContext } from "../context/MainContext";

const Products = () => {
  const { products } = useContext(MainContext);

  const [category, setCategory] = useState("all");

  console.log(category);

  return (
    <>
        <Navbar />
    <Filters setState={setCategory} />
    {category === "all" ? (
      <Section array={products} />
    ) : (
      <Section
        array={products.filter((product) => product.category === category)}
      />
    )}

    <Footer />
  </>
  )
}

export default Products





// import React from "react";
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import style from "../style/product.module.css"
// import Image from "../assets/NEWARRIVALS.jpg"
// import Picture from "../assets/pic3.jpg"
// import { MainContext } from "../context/MainContext";
// import Filters from "../components/productpage/Filters";

// const Products = () => {
//   // const { products } = useContext(MainContext);





//   return (
//     <>
//     <Navbar></Navbar>
//    <img src={Image} alt="Img" className={style.ArrivalsImg} />
// <Filters></Filters>

// {/* <div className={style.articleTrending}>
//  <h3>TRENDING ITEMS</h3>
// </div> */}
// <div className={style.permbajtja}>
//    <div className={style.item}>
//     <img src= {Picture} alt={Image} />
//      <h1>Titulli</h1>
//      <p>Shenime</p>
//   </div>
//   <div className={style.item}>
//     <img src= {Picture} alt={Image} />
//      <h1>Titulli</h1>
//      <p>Shenime</p>
//   </div>
//   <div className={style.item}>
//     <img src= {Picture} alt={Image} />
//      <h1>Titulli</h1>
//      <p>Shenime</p>
//   </div>
//   <div className={style.item}>
//     <img src= {Picture} alt={Image} />
//      <h1>Titulli</h1>
//      <p>Shenime</p>
//   </div>
//   <div className={style.item}>
//     <img src= {Picture} alt={Image} />
//      <h1>Titulli</h1>
//      <p>Shenime</p>
//   </div>
//   <div className={style.item}>
//     <img src= {Picture} alt={Image} />
//      <h1>Titulli</h1>
//      <p>Shenime</p>
//   </div>
//   <div className={style.item}>
//     <img src= {Picture} alt={Image} />
//      <h1>Titulli</h1>
//      <p>Shenime</p>
//   </div>
//   <div className={style.item}>
//     <img src= {Picture} alt={Image} />
//      <h1>Titulli</h1>
//      <p>Shenime</p>
//   </div>
// </div>
// <Footer></Footer>
// </>
//   )
// }

// export default Products