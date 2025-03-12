import React from "react";
import { useCart } from "../context/CartContext";
import "./CartPage.css";

const CartPage: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div className="cart-page">
            <h1>Warenkorb</h1>
            <div className="cart-container">
                {cart.length === 0 ? (
                    <p className="empty-cart">Dein Warenkorb ist leer.</p>
                ) : (
                    <>
                        <ul className="cart-list">
                            {cart.map((item) => (
                                <li key={item.id} className="cart-item">
                                    <img src={item.imageUrl || "/assets/placeholder.png"} alt={item.name} />
                                    <div className="cart-item-name">{item.name}</div>
                                    <div className="cart-item-price">€{item.price.toFixed(2)} x {item.quantity}</div>
                                    <button onClick={() => removeFromCart(item.id)}>Entfernen</button>
                                </li>
                            ))}
                        </ul>
                        <p className="cart-total">
                            <strong>Gesamtpreis:</strong> €{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                        </p>
                        <div className="cart-buttons">
                            <button className="clear-cart" onClick={clearCart}>Warenkorb leeren</button>
                            <button className="checkout-button">Zur Kasse</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;
