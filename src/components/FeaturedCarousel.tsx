import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";
import "./FeaturedCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FeaturedCarouselProps { products: Product[]; }

const truncate = (text: string, n = 160) =>
    text.length > n ? text.slice(0, n - 1) + "…" : text;

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ products }) => {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3200,
        pauseOnHover: true,
    };

    return (
        <div className="featured-carousel">
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="carousel-slide">
                        <div className="carousel-content">
                            <div className="carousel-text">
                                <h1 className="carousel-title">{product.name}</h1>
                                {product.description && (
                                    <p className="carousel-desc">
                                        {truncate(product.description, 180)}
                                    </p>
                                )}
                                <button
                                    className="carousel-button"
                                    onClick={() => navigate(`/product/${product.id}`)}
                                >
                                    Endecke mehr
                                </button>
                            </div>

                            <div className="carousel-image">
                                <img src={product.imageUrl} alt={product.name} />
                            </div>
                        </div>

                        <div className="float-badge" aria-label="Product quick info">
                            <div style={{ fontWeight: 700 }}>Price</div>
                            <div style={{ fontSize: "1.1rem" }}>
                                €{product.price.toFixed(2)}
                            </div>
                            <button
                                className="carousel-button"
                                onClick={() => navigate(`/product/${product.id}`)}
                                style={{ padding: "8px 14px", borderRadius: 12 }}
                            >
                                Details
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeaturedCarousel;
