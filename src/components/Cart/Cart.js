import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <p>{cart.name}</p> <span>{cart.quantity}</span>
    </div>
  );
};

export default Cart;
