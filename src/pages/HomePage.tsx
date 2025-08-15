import React from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import OverviewSection from "../components/OverviewSection";
import HighlightsRow from "../components/HighlightsRow";
import PromoBanner from "../components/PromoBanner";
import CategoriesSection from "../components/CategoriesSection";
import { useProductContext } from "../hooks/useProductContext";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage: React.FC = () => {
    const { products } = useProductContext();
    const navigate = useNavigate();
    const featured = products.filter((p) => p.featured);

    return (
        <div className="homepage">
            {featured.length > 0 && <FeaturedCarousel products={featured} />}
            <OverviewSection />
            <HighlightsRow />
            <CategoriesSection />
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
