import React from "react";
import { Product } from "../types/Product";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="category">{product.category}</p>
            <div className="rating">{"⭐".repeat(Math.round(product.rating))} ({product.reviewCount})</div>
            <p className="price">€{product.price.toFixed(2)}</p>
            <button onClick={() => addToCart({id: product.id,name: product.name, description: product.description,price: product.price,quantity: 1,imageUrl: product.imageUrl,category: product.category,rating: product.rating})}>
    In den Warenkorb
</button>

        </div>
    );
};

export default ProductCard;
