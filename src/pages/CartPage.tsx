import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartPage.css";

const formatCurrency = (value: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);

const CartPage: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const totals = useMemo(() => {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = subtotal > 0 ? 0 : 0;
        const total = subtotal + shipping;
        return { subtotal, shipping, total };
    }, [cart]);

    const isEmpty = cart.length === 0;

    return (
        <main className="cart page-container page--with-navbar-gap" aria-labelledby="cart-title">
            {/* Sicherer Abstand zur absolut positionierten Navbar */}
            <div className="navbar-spacer" aria-hidden="true" />

            <h1 id="cart-title" className="cart__title">Warenkorb</h1>

            {isEmpty ? (
                <section className="cart-empty" role="region" aria-label="Warenkorb leer">
                    <div className="cart-empty__card">
                        <img
                            src="/assets/placeholder.png"
                            alt=""
                            loading="lazy"
                            width={160}
                            height={120}
                            className="cart-empty__img"
                        />
                        <h2 className="cart-empty__title">Dein Warenkorb ist leer</h2>
                        <p className="cart-empty__text">
                            Stöbere durch unsere Kategorien und finde deine nächsten Favoriten.
                        </p>
                        <div className="cart-empty__actions">
                            <Link className="btn" to="/category/Alle">Jetzt entdecken</Link>
                            <Link className="btn btn--ghost" to="/">Zur Startseite</Link>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="cart__grid" role="region" aria-label="Warenkorbinhalt">
                    {/* Artikel-Liste */}
                    <ul className="cart-list" aria-live="polite">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="cart-item__media">
                                    <img
                                        src={item.imageUrl || "/assets/placeholder.png"}
                                        alt={item.name}
                                        loading="lazy"
                                        width={96}
                                        height={96}
                                    />
                                </div>

                                <div className="cart-item__info">
                                    <h3 className="cart-item__name">{item.name}</h3>
                                    <div className="cart-item__meta">
                                        <span className="cart-item__price">
                                            {formatCurrency(item.price)} <span className="cart-item__x">×</span> {item.quantity}
                                        </span>
                                    </div>
                                </div>

                                <div className="cart-item__actions">
                                    <button
                                        className="btn btn--danger"
                                        onClick={() => removeFromCart(item.id)}
                                        aria-label={`${item.name} aus dem Warenkorb entfernen`}
                                    >
                                        Entfernen
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Zusammenfassung */}
                    <aside className="cart-summary" aria-label="Bestellübersicht">
                        <div className="cart-summary__card">
                            <h2 className="cart-summary__title">Zusammenfassung</h2>

                            <div className="cart-summary__row">
                                <span>Zwischensumme</span>
                                <strong>{formatCurrency(totals.subtotal)}</strong>
                            </div>

                            <div className="cart-summary__row">
                                <span>Versand</span>
                                <span>–</span>
                            </div>

                            <div className="cart-summary__divider" />

                            <div className="cart-summary__row cart-summary__row--total">
                                <span>Gesamt</span>
                                <strong>{formatCurrency(totals.total)}</strong>
                            </div>

                            <button className="promo__cta cart-summary__checkout" disabled={isEmpty}>
                                Zur Kasse
                            </button>

                            <div className="cart-summary__links">
                                <button className="btn btn--ghost" onClick={clearCart}>Warenkorb leeren</button>
                                <Link className="btn" to="/category/Alle">Weiter einkaufen</Link>
                            </div>
                        </div>
                    </aside>
                </section>
            )}
        </main>
    );
};

export default CartPage;
