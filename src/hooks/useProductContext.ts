import { useContext } from "react";
import { ProductContext, ProductContextProps } from "../contexts/ProductContext";

export const useProductContext = (): ProductContextProps => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
};
