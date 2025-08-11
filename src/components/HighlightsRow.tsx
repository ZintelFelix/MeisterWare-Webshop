import React from "react";
import { useNavigate } from "react-router-dom";
import ProductHighlight from "./ProductHighlight";
import "./HighlightsRow.css";

// Du kannst hier deine echten Bilder pflegen
const highlights = [
    {
        eyebrow: "High-End GPUs",
        title: "GeForce RTX Series",
        imageUrl: "/assets/highlight-gpu.jpg",
        to: "/category/Grafikkarten",
        tone: "neutral" as const,
    },
    {
        eyebrow: "Creator Laptops",
        title: "Power for Pros",
        imageUrl: "/assets/highlight-laptop.jpg",
        to: "/category/Laptops",
        tone: "blush" as const,
    },
    {
        eyebrow: "Audio Gear",
        title: "Crisp & Wireless",
        imageUrl: "/assets/highlight-audio.jpg",
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
                        eyebrow={h.eyebrow}
                        title={h.title}
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
