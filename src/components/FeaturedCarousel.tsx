import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";
import "./FeaturedCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FeaturedCarouselProps {
    products: Product[];
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ products }) => {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: false,
    };

    return (
        <div className="featured-carousel">
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="carousel-slide">
                        <div className="carousel-content">
                            <div className="carousel-text">
                                <h2 className="carousel-title">{product.name}</h2>
                                <p className="carousel-desc">{product.description}</p>
                                <button
                                    className="carousel-button"
                                    onClick={() => navigate(`/product/${product.id}`)}
                                >
                                    Mehr erfahren →
                                </button>
                            </div>
                            <div className="carousel-image">
                                <img src={product.imageUrl} alt={product.name} />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeaturedCarousel;
