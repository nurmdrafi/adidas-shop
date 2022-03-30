import React from "react";
import "./Product.css";

const Product = (props) => {

  const { title, image, price } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <h5>{title}</h5>
      <h5>Price: {price}</h5>
      {/* <h6>Ratings: {ratings}</h6> */}
      <button className="btn btn-success" onClick={() => handleAddToCart(props.product)}>Add to cart</button>
    </div>
  );
};

export default Product;
