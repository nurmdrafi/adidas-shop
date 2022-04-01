import React from "react";
import { FiDelete } from "react-icons/fi";
import "./Cart.css"

const Cart = ({ cart, handleDeleteItem }) => {
  return (
    <div className="cart">
      <small>{cart.title} x {cart.quantity}</small> <button onClick={() => handleDeleteItem(cart)}><FiDelete></FiDelete></button>
    </div>
  );
};

export default Cart;
