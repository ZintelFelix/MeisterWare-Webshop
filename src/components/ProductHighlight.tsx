import React from "react";
import "./ProductHighlight.css";

type Props = {
    eyebrow?: string;           // z. B. "High-End GPUs"
    title: string;              // z. B. "GeForce RTX Series"
    ctaLabel?: string;          // z. B. "Discover More"
    imageUrl: string;           // großes Hero-Bild
    onClick?: () => void;       // Navigation
    tone?: "neutral" | "blush" | "mint"; // dezente Hintergründe
};

const ProductHighlight: React.FC<Props> = ({
    eyebrow,
    title,
    ctaLabel = "Discover More",
    imageUrl,
    onClick,
    tone = "neutral",
}) => {
    return (
        <article className={`ph ph--${tone}`} role="button" tabIndex={0}
            onClick={onClick} onKeyDown={(e) => e.key === "Enter" && onClick?.()}>
            <div className="ph__media">
                <img src={imageUrl} alt={title} loading="lazy" />
            </div>

            <div className="ph__overlay">
                {eyebrow && <span className="ph__eyebrow">{eyebrow}</span>}
                <h3 className="ph__title">{title}</h3>
                <button className="ph__cta" onClick={(e) => { e.stopPropagation(); onClick?.(); }}>
                    {ctaLabel}
                </button>
            </div>
        </article>
    );
};

export default ProductHighlight;
