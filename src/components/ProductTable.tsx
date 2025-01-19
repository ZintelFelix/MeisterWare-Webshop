import React from "react";
import { Product } from "../types/Product";

interface ProductTableProps {
    products: Product[];
    editable?: boolean;
    onEdit?: (product: Product) => void;
    onDelete?: (id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, editable = false, onEdit, onDelete }) => (
    <table className="product-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                {editable && <th>Actions</th>}
            </tr>
        </thead>
        <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.quantity}</td>
                    <td>€{product.price.toFixed(2)}</td>
                    {editable && (
                        <td>
                            <button onClick={() => onDelete?.(product.id)}>Delete</button>
                        </td>
                    )}
                </tr>
            ))}
        </tbody>
    </table>
);

export default ProductTable;
