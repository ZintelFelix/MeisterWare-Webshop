import React from "react";
import { useNavigate } from "react-router-dom";
import ProductHighlight from "./ProductHighlight";
import "./HighlightsRow.css";
import gpuImg from "../assets/highlight-gpu.jpg";
import audioImg from "../assets/promo-hero.webp";
import laptopImg from "../assets/AppleMacBook.jpg";

const highlights = [
    {
        imageUrl: gpuImg,
        to: "/category/Grafikkarten",
        tone: "neutral" as const,
    },
    {
        imageUrl: laptopImg,
        to: "/category/Laptops",
        tone: "blush" as const,
    },
    {
        imageUrl: audioImg,
        to: "/category/Kopfhörer",
        tone: "mint" as const,
    },
];

const HighlightsRow: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="hl">
            <div className="hl__inner">
                {highlights.map((h, i) => (
                    <ProductHighlight
                        key={i}
                        imageUrl={h.imageUrl}
                        tone={h.tone}
                        onClick={() => navigate(h.to)}
                    />
                ))}
            </div>
        </section>
    );
};

export default HighlightsRow;
