import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./NavBar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const { cart } = useCart();

    return (
        <nav className="navbar">
            <div className="navbar-title" onClick={() => navigate("/")}>WebShop</div>
            <div className="navbar-buttons">
                <button onClick={() => navigate("/cart")}>🛒 ({cart.length})</button>
                <button onClick={() => navigate("/orders")}>📦 Bestellungen</button>
                <button onClick={() => navigate("/admin")}>Admin</button>
            </div>
        </nav>
    );
};

export default Navbar;
