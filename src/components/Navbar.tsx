import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Moon, Search, Heart, User, ShoppingCart, PlusCircle } from "lucide-react";
import { useTheme } from "../useTheme";
import { useCart } from "../context/CartContext";
import "./NavBar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();
  const { cart } = useCart();

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0),
    [cart]
  );

  return (
    <div className="nav-wrap">
      <nav className="navbar">
        <div className="navbar-left" onClick={() => navigate("/")} role="button" aria-label="Home">
          <div className="navbar-title">
            <span className="title-black">Meister</span>
            <span className="title-blue">Ware</span>
          </div>
        </div>

        <ul className="navbar-links">
          <li onClick={() => navigate("/")}>Startseite</li>
          <li onClick={() => navigate("/about")}>Über uns</li>
          <li onClick={() => navigate("/shop")}>Shop</li>
          <li onClick={() => navigate("/faq")}>Häufige Fragen</li>
        </ul>

        <div className="navbar-right">
          <button className="contact-pill" onClick={() => navigate("/contact")}>Kontakt</button>

          <div className="navbar-buttons">
            <button onClick={toggle} aria-label="Theme" title="Theme">
              {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>

            <button onClick={() => navigate("/admin")} aria-label="Admin" title="Admin-Item Manager">
              <PlusCircle className="w-6 h-6" aria-hidden="true" />
            </button>

            <button onClick={() => navigate("/search")} aria-label="Suche" title="Search">
              <Search className="w-6 h-6" aria-hidden="true" />
            </button>

            <button onClick={() => navigate("/wishlist")} aria-label="Wishlist" title="Saved">
              <Heart className="w-6 h-6" aria-hidden="true" />
            </button>

            <button onClick={() => navigate("/account")} aria-label="Account" title="Account">
              <User className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Warenkorb mit Badge */}
            <button
              className="cart-btn"
              onClick={() => navigate("/cart")}
              aria-label={cartCount > 0 ? `Warenkorb (${cartCount} Artikel)` : "Warenkorb"}
              title="Cart"
            >
              <ShoppingCart className="w-6 h-6" aria-hidden="true" />
              {cartCount > 0 && (
                <span className="cart-badge" aria-hidden="true">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
