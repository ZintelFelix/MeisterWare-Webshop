import React from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Moon, Search, Heart, User, ShoppingCart, PlusCircle } from "lucide-react";
import { useTheme } from "../useTheme";
import "./NavBar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();

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
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/shop")}>Shop</li>
          <li onClick={() => navigate("/faq")}>FAQ</li>
        </ul>

        <div className="navbar-right">
          <button className="contact-pill" onClick={() => navigate("/contact")}>Contact Us</button>
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
            <button onClick={() => navigate("/cart")} aria-label="Warenkorb" title="Cart">
              <ShoppingCart className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
