import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, ratings } = props.product;
  return (
    <div className="product">
      <div className="image-container">
        <img src={img} alt={name} />
      </div>
      <h5>{name}</h5>
      <h5>Price: ${price}</h5>
      <h6>Ratings: {ratings}</h6>
      <button className="btn btn-success">Add to cart</button>
    </div>
  );
};

export default Product;
