import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import CategoryPage from "./pages/CategoryPage";
import FeaturesPage from "./pages/FeaturesPage";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes> 
      </Router>
    </CartProvider>
  );
}

export default App;
