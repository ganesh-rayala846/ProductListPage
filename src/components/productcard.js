import React from 'react';
import './productlist.css'
const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} />
    <h4>{product.title}</h4>
    <p>₹{product.price}</p>
    <p>{product.description.slice(0, 50)}...</p>
    <div>⭐ {product.rating?.rate ?? 4.0}</div>
  </div>
);

export default ProductCard;