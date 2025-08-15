import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./context/CartContext";
import "./styles/global.css";
import { ensureTheme } from "./theme";

ensureTheme();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ProductProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </ProductProvider>
    </React.StrictMode>
);
