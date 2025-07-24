import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
} from "react";
import { Product } from "../types/Product";

export interface ProductContextProps {
    products: Product[];
    fetchProducts: () => void;
    updateProduct: (updatedProduct: Product) => Promise<void>;
}

export const ProductContext = createContext<ProductContextProps | undefined>(
    undefined
);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = () => {
        fetch("http://localhost:5254/api/Product")
            .then((res) => res.json())
            .then((data: Product[]) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    };

    // Jetzt PUT statt PATCH, und wir erwarten das komplette Product-Objekt
    const updateProduct = async (updatedProduct: Product) => {
        await fetch(
            `http://localhost:5254/api/Product/${updatedProduct.id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedProduct),
            }
        );
        // Liste neu laden
        fetchProducts();
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{ products, fetchProducts, updateProduct }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error(
            "useProductContext must be used within a ProductProvider"
        );
    }
    return context;
};
