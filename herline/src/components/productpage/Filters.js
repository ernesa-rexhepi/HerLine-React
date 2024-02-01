import React, { useContext } from "react";
import style from "../../style/product.module.css";
import { MainContext } from "../../context/MainContext";

const Filters = ({ setState }) => {
  const { categories } = useContext(MainContext);
  return (
    <div className={style.filtersWrapper}>
      <h3
        key={`all`}
        onClick={() => {
          setState("all");
        }}
      >
        all
      </h3>
      {categories.map((category, i) => {
        return (
          <h3
            key={`${i}${category}`}
            onClick={() => {
              setState(category);
            }}
          >
            {category}
          </h3>
        );
      })}
    </div>
  );
};

export default Filters;
