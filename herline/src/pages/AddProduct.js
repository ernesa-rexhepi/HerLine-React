import React, { useContext, useState } from "react";
import style from "../style/addproduct.module.css";
import { MainContext } from "../context/MainContext";
import { toast } from "react-toastify";
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer"


const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [cat, setCat] = useState("");
  const { createProduct, wait } = useContext(MainContext);

  const [validEmail, setValidEmail] = useState(true);

  const checkValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValid = emailRegex.test(email);

    console.log(isValid);

    setValidEmail(isValid);

    if (isValid) {
      toast.success("Email is valid!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const checkPasword = (password) => {
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    const isPassValid = passwordRegex.test(password);

    console.log(password);

    console.log(isPassValid);
  };

  return (
    <>
    <Navbar></Navbar>
      <div className={style.form}>
        <div>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            checkValidation(e.target.value);
          }}
          style={
            validEmail
              ? { border: "1px solid black" }
              : { border: "1px solid red" }
          }
        /></div>
        <div><input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            checkPasword(e.target.value);
          }}
        />
        {/* {!validEmail ? <p>Emil is not valid</p> : <></>} */}</div>
 <div>       <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        /></div>
     <div>   <input
          type="number"
          min={1}
          placeholder="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        /></div>
   <div>     <textarea
          placeholder="description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea></div>
   <div>     <input
          type="text"
          placeholder="Image"
          onChange={(e) => {
            setImg(e.target.value);
          }}
        /></div>
<div>
        <input
          type="text"
          placeholder="Category"
          onChange={(e) => {
            setCat(e.target.value);
          }}
        /></div>
     <div>   <button
          onClick={() => {
            if (
              title !== "" &&
              price !== "" &&
              desc !== "" &&
              img !== "" &&
              cat !== ""
            ) {
              createProduct(title, price, desc, img, cat);
            } else {
              toast.warning("You cannot create empty product", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }
          }}
          disabled={wait}
        >
          Add Product
        </button></div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddProduct;
