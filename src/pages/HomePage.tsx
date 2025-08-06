import React from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { useProductContext } from "../hooks/useProductContext";
import OverviewSection from '../components/OverviewSection';
import TeaserCard from '../components/TeaserCard';
import smartWatchImg from '../assets/SmartWatch.webp';
import Phone from '../assets/Phone.webp';
import HeadPhones from '../assets/HeadPhones.webp';
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage: React.FC = () => {
    const { products } = useProductContext();
    const navigate = useNavigate();

    // Nur Featured‑Produkte für den Carousel
    const featured = products.filter((p) => p.featured);

    // Einzigartige Kategorien
    const uniqueCategories = Array.from(
        new Set(products.map((p) => p.category))
    );

    return (
        <div className="homepage">
            {/* Hero Carousel */}
            {featured.length > 0 && <FeaturedCarousel products={featured} />}
            <div>
                <OverviewSection />
            </div>
            <div className="page-container">
                <div className="teaser-section">
                <TeaserCard
                    title="PlaceHolder"
                    subtitle="PlaceHolder"
                    imgSrc={smartWatchImg}
                    linkTo="/products/qpad"
                />
                <TeaserCard
                    title="PlaceHolder"
                    subtitle="PlaceHolder"
                    imgSrc={Phone}
                    linkTo="/products/prophone"
                />
                <TeaserCard
                    title="PlaceHolder"
                    subtitle="PlaceHolder"
                    imgSrc={HeadPhones}
                    linkTo="/products/headphones"
                />
                </div>
            </div>
            {/* Haupt-Content: nur Kategorien */}
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
        </div >
    );
};

export default HomePage;
