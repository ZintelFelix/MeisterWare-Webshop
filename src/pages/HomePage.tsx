import React from "react";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/ProductContext";
import "./HomePage.css";

const HomePage = () => {
    const { products } = useProductContext();

    return (
        <div className="homepage">
            <h1>Products</h1>

            {products.length === 0 ? (
                <div className="no-products-message">
                    <p>No products available right now.</p>
                    <p>Please add some products to display here.</p>
                </div>
            ) : (
                <div className="product-cards">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
