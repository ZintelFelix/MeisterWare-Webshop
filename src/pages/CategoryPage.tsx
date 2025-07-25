import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../hooks/useProductContext";
import "./CategoryPage.css";

const CategoryPage: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const { products } = useProductContext();

    const decodedCategory = decodeURIComponent(categoryName ?? "");
    const filtered = products.filter((p) => p.category === decodedCategory);

    return (
        <div className="category-page">
            <div className="page-container">
                <h1 className="section-title">{decodedCategory}</h1>

                {filtered.length === 0 ? (
                    <p className="no-products-message">
                        In dieser Kategorie sind keine Produkte vorhanden.
                    </p>
                ) : (
                    <div className="product-grid">
                        {filtered.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
