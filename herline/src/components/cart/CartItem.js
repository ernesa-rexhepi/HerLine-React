import React, { useState } from "react";
import style from "../../style/cart.module.css"


const CartItem = ({ className, title, price, img }) => {
    const [quantity, setQuantity] = useState(1);
  return (
    <>
  
    <div className={style.CartContainer}>

        <table>
        <tr>
          <td>
            <div className={style.CartInfo}>
              <img src={img}  alt="ImgCart"></img>
              <div>
                <p>{title}</p>
                {/* <small>Price : $5000</small> */}
              </div>
            </div>
          </td>
          <td><input type="number"  min={1} id="amount" value={quantity} onChange={(e)=>{
            setQuantity(e.target.value)
          }}></input></td>
          <td>${price*quantity}</td>
      
        </tr>
      </table>
      </div>
      </>
      );
};

export default CartItem;