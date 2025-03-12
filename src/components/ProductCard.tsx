import React from "react";
import { Product } from "../types/Product";
import "./ProductCard.css";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="product-card">
        {/* Produktbild */}
        <img src={product.imageUrl} alt={product.name} className="product-image" />

        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="category">{product.category}</p>

        {/* Sternebewertung */}
        <div className="rating">
            {"⭐".repeat(Math.round(product.rating))} ({product.reviewCount})
        </div>

        <p className="price">${product.price.toFixed(2)}</p>

        <button>Add to Cart</button>
    </div>
);

export default ProductCard;
