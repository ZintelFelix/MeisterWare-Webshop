import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../hooks/useProductContext";
import CategoryCard from "./CategoryCard";
import "./CategoriesSection.css";

const CategoriesSection: React.FC = () => {
    const { products } = useProductContext();
    const navigate = useNavigate();

    const categories = Array.from(
        products.reduce<Map<string, string>>((map, p) => {
            if (!map.has(p.category)) map.set(p.category, p.imageUrl || "/assets/placeholder.png");
            return map;
        }, new Map())
    );

    return (
        <section className="categories-section page-container">
            <h2 className="section-title">Unsere Produkte</h2>
            <div className="categories-grid">
                {categories.map(([cat, img]) => (
                    <CategoryCard
                        key={cat}
                        title={cat}
                        imageUrl={img}
                        onClick={() => navigate(`/category/${encodeURIComponent(cat)}`)}
                        fit="cover"
                    />
                ))}
            </div>
        </section>
    );
};

export default CategoriesSection;
