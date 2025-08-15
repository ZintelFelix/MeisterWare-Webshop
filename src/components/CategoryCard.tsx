import React from "react";
import "./CategoriesSection.css";

type Props = {
    title: string;
    imageUrl: string;
    onClick: () => void;
    fit?: "cover" | "contain";
};

const CategoryCard: React.FC<Props> = ({ title, imageUrl, onClick, fit = "cover" }) => {
    return (
        <div className="category-card" onClick={onClick}>
            <div className="category-image-wrapper" data-fit={fit}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className="category-label">{title}</div>
        </div>
    );
};

export default CategoryCard;
