import React, { useContext, useEffect, useState } from "react";
import style from "../../style/cart.module.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import { MainContext } from "../../context/MainContext";

const CartWrapper = () => {
  const navigate = useNavigate();

  const { getUserCart, cart, products } = useContext(MainContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == null) {
      navigate("/login");
    } else {
      const decodedToken = jwtDecode(token);
      getUserCart(decodedToken.sub);
    }

    // console.log(decodedToken.sub);
  }, []);

  const filteredProducts = products.filter((product) => {
    const cartItem = cart.find((cartItem) => cartItem.productId === product.id);

    return cartItem && cartItem.quantity > 0;
  });

  return (
    <div className={style.wrapper}>
      {products.length > 0 ? (
        filteredProducts.map((prod, i) => {
          return (
            <CartItem
              key={`i+${prod.title}`}
              className={style}
              price={prod.price}
              title={prod.title}
              img={prod.image}
              quantity={prod}
            />
          );
        })
      ) : (
        <></>
      )}
 <div className={style.TotalPrice}>
          <table>
            <tr>
              <td>Subtotal</td>
              <td>$000,00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$00,00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$000,00</td>
            </tr>
          </table>
        </div>
        </div>
  );
};

export default CartWrapper;