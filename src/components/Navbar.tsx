import React from "react";
import { useNavigate } from "react-router-dom";
import { Search, Heart, User, ShoppingCart, PlusCircle } from "lucide-react";
import "./NavBar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-wrap">
      <nav className="navbar">
        {/* Logo/Brand */}
        <div className="navbar-left" onClick={() => navigate("/")} role="button" aria-label="Home">
          <div className="navbar-title">
            <span className="title-black">Meister</span>
            <span className="title-blue">Ware</span>
          </div>
        </div>

        {/* Zentrale Links */}
        <ul className="navbar-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/shop")}>Shop</li>
          <li onClick={() => navigate("/faq")}>FAQ</li>
        </ul>

        {/* Rechte Seite */}
        <div className="navbar-right">
          <button className="contact-pill" onClick={() => navigate("/contact")}>
            Contact Us
          </button>

          <div className="navbar-buttons">
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
