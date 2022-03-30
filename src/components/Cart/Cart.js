import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <p>{cart.title}</p> <span>{cart.quantity}</span>
    </div>
  );
};

export default Cart;
