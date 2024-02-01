import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CartWrapper  from '../components/cart/CartWrapper'

const Cart = () => {

  return (
    <>
      <Navbar />
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        </table>
<CartWrapper />

<Footer />
    </>
  )
}


export default Cart