import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div>WebShop</div>
            <div>
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
