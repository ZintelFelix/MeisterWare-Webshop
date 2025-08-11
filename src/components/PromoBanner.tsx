import React from "react";
import "./PromoBanner.css";

type PromoBannerProps = {
    title: string;
    text: string;
    ctaLabel: string;
    imageUrl: string;
    onCta?: () => void;
};

const PromoBanner: React.FC<PromoBannerProps> = ({ title, text, ctaLabel, imageUrl, onCta }) => {
    return (
        <section className="promo">
            <div className="promo__inner">
                <div className="promo__text">
                    <h2 className="promo__title">{title}</h2>
                    <p className="promo__desc">{text}</p>
                    <button className="promo__cta" onClick={onCta}>{ctaLabel}</button>
                </div>
                <div className="promo__media">
                    <img src={imageUrl} alt="" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;
