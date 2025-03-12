import { useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-title">WebShop</div>
            <div className="navbar-buttons">
                {location.pathname === "/admin" ? (
                    <button onClick={() => navigate("/")}>Back to Home</button>
                ) : (
                    <>
                        <button onClick={() => navigate("/admin")}>Login</button>
                        <button onClick={() => navigate("/admin")}>Register</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
