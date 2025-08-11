import React from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import OverviewSection from "../components/OverviewSection";
import HighlightsRow from "../components/HighlightsRow";
import PromoBanner from "../components/PromoBanner";
import { useProductContext } from "../hooks/useProductContext";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage: React.FC = () => {
    const { products } = useProductContext();
    const navigate = useNavigate();

    // Featured-Produkte für das Hero-Carousel
    const featured = products.filter((p) => p.featured);

    // Einzigartige Kategorien
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

    return (
        <div className="homepage">
            {/* Hero Carousel */}
            {featured.length > 0 && <FeaturedCarousel products={featured} />}

            {/* USP-Leiste */}
            <OverviewSection />

            {/* Drei große Highlight-Banner */}
            <HighlightsRow />

            {/* Kategorien-Grid */}
            <div className="page-container">
                <section className="category-section">
                    <h2 className="section-title">Unsere Produkte</h2>
                    <div className="category-grid">
                        {uniqueCategories.map((cat) => {
                            const imgSrc =
                                products.find((p) => p.category === cat)?.imageUrl ||
                                "/assets/placeholder.png";
                            return (
                                <div
                                    key={cat}
                                    className="category-card"
                                    onClick={() =>
                                        navigate(`/category/${encodeURIComponent(cat)}`)
                                    }
                                >
                                    <div className="category-image-wrapper">
                                        <img src={imgSrc} alt={cat} />
                                    </div>
                                    <div className="category-label">{cat}</div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>

            {/* Promo-Banner */}
            <PromoBanner
                title="30 Tage Geld-zurück-Garantie"
                text="Teste unsere Hardware risikofrei. Solltest du nicht zufrieden sein, bekommst du unkompliziert dein Geld zurück."
                ctaLabel="Jetzt entdecken"
                imageUrl="/assets/promo-hero.jpg"
                onCta={() => navigate("/returns")}
            />
        </div>
    );
};

export default HomePage;
