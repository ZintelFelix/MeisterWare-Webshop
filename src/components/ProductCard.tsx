import React from "react";
import { Product } from "../types/Product";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

type Props = { product: Product; onClick?: (p: Product) => void };

const formatCurrency = (v: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(v);

const ProductCard: React.FC<Props> = ({ product, onClick }) => {
    const { addToCart } = useCart();
    const stars = Math.round(product.rating || 0);

    return (
        <article className="product-card" onClick={() => onClick?.(product)}>
            <div className="product-card__media">
                <img src={product.imageUrl} alt={product.name} loading="lazy" />
                {product.category && <span className="product-card__chip">{product.category}</span>}
            </div>

            <div className="product-card__body">
                <h3 className="product-card__title">{product.name}</h3>

                {product.description && (
                    <p className="product-card__desc">
                        {product.description.length > 120 ? product.description.slice(0, 117) + "…" : product.description}
                    </p>
                )}

                <div className="product-card__meta">
                    <div className="product-card__rating" aria-label={`Bewertung ${stars} von 5`}>
                        {"★".repeat(stars)}
                        {"☆".repeat(5 - stars)}
                        {typeof product.reviewCount === "number" && (
                            <span className="product-card__reviews">({product.reviewCount})</span>
                        )}
                    </div>

                    <div className="product-card__price">{formatCurrency(product.price)}</div>
                </div>

                <button
                    className="product-card__cta"
                    onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                            id: product.id,
                            name: product.name,
                            description: product.description,
                            price: product.price,
                            quantity: 1,
                            imageUrl: product.imageUrl,
                            category: product.category,
                            rating: product.rating
                        });
                    }}
                >
                    In den Warenkorb
                </button>
            </div>
        </article>
    );
};

export default ProductCard;
