import React from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../hooks/useProductContext";
import "./HomePage.css";

const HomePage: React.FC = () => {
    const { products } = useProductContext();

    const featured = products.filter((p) => p.featured);
    const normal = products.filter((p) => !p.featured);

    return (
        <div className="homepage">
            {featured.length > 0 && <FeaturedCarousel products={featured} />}

            {normal.length === 0 ? (
                <div className="no-products-message">
                    <p>Zurzeit sind keine Produkte verfügbar.</p>
                </div>
            ) : (
                <div className="product-cards">
                    {normal.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
