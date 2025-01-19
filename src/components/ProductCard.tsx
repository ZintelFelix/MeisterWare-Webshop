import React from "react";
import { Product } from "../types/Product";
import "./ProductCard.css";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="product-card">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Quantity: {product.quantity}</p>
        <p className="price">${product.price.toFixed(2)}</p>
    </div>
);

export default ProductCard;
