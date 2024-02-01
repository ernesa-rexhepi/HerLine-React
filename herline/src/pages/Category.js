import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/homepage/SectionCard";
import tech from "../assets/pic4.jpg";
import men from "../assets/heels2.jpg";
import women from "../assets/heels3.jpg";
import style from "../style/category.module.css";


const Categories = () => {
  const categories = [
    {
      title: "Electronics",
      image: tech,
      link: "/category/1",
    },
    {
      title: "Men's Clothing",
      image: men,
      link: "/category/2",
    },
    {
      title: "Women's Clothing",
      image: men,
      link: "/category/2",
    },
    {
      title: "Jewelery",
      image: women,
      link: "/category/3",
    },
  ];
  return (
    <>
  
      <Navbar />
      <div className={style.container}>
        <Section array={categories} />
      </div>
      <Footer />
    </>
  );
};

export default Categories;
