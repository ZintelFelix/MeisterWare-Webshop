import React from "react";
import "./ProductHighlight.css";

type Props = {            
    ctaLabel?: string;          
    imageUrl: string;           
    onClick?: () => void;       
    tone?: "neutral" | "blush" | "mint"; 
};

const ProductHighlight: React.FC<Props> = ({
    ctaLabel = "Discover More",
    imageUrl,
    onClick,
    tone = "neutral",
}) => {
    return (
        <article className={`ph ph--${tone}`} role="button" tabIndex={0}
            onClick={onClick} onKeyDown={(e) => e.key === "Enter" && onClick?.()}>
            <div className="ph__media">
                <img src={imageUrl} loading="lazy" />
            </div>

            <div className="ph__overlay">
                <button className="ph__cta" onClick={(e) => { e.stopPropagation(); onClick?.(); }}>
                    {ctaLabel}
                </button>
            </div>
        </article>
    );
};

export default ProductHighlight;
