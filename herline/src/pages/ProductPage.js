import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { MainContext } from "../context/MainContext";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import style from "../style/productpage.module.css"

const ProductPage = () => {
  const { id } = useParams();

  const { getSingleProducts, singleProduct } = useContext(MainContext);

  useEffect(() => {
    getSingleProducts(id);
  }, []);

  console.log(singleProduct);
  return (
    <>
      {singleProduct.id != null ? (
        <>
          <Navbar></Navbar>
          <div className={style.ProductPage}>
            <div >
            <img
           className={style.ProductPhoto}
             src={singleProduct.image}
                 alt="Product"
/>

            </div>
            <div className={style.ProductDescription}>
              <h1>{singleProduct.title}</h1>
              <h2>{singleProduct.price}$</h2>
              <p>Select your size:</p>
              <div className={style.ProductSize}>
                <h3>S</h3>
                <h3>M</h3>
                <h3>L</h3>
                <h3>XL</h3>
              </div>
              <h4>Rating:{singleProduct.rating.rate}</h4>
              <button>ADD TO BASKET</button>

            </div>
          </div>
          <Footer></Footer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductPage;
