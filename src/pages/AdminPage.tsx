import React, { useState } from "react";
import ProductTable from "../components/ProductTable";
import { useProductContext } from "../context/ProductContext";
import "./AdminPage.css";

const AdminPage = () => {
    const { products, fetchProducts } = useProductContext();
    const [showAddForm, setShowAddForm] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        quantity: 0,
        price: "0.00",
    });

    const handleCreate = () => {
        if (!newProduct.name || !newProduct.description || newProduct.quantity <= 0 || parseFloat(newProduct.price) <= 0) {
            alert("Please fill all fields with valid values!");
            return;
        }

        fetch("http://localhost:5254/api/Product", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...newProduct,
                price: parseFloat(newProduct.price),
            }),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to add product");
                return res.json();
            })
            .then(() => {
                fetchProducts();
                setNewProduct({ name: "", description: "", quantity: 0, price: "0.00" });
                setShowAddForm(false);
            })
            .catch((error) => {
                console.error("Error adding product:", error);
                alert("Failed to save product. Please try again.");
            });
    };

    return (
        <div className="admin-page">
            <h1>Admin Page</h1>

            <div className="add-product-container">
                <button
                    className="add-product-button"
                    onClick={() => setShowAddForm(true)}
                >
                    + Add Product
                </button>
            </div>

            {/* Modal */}
            {showAddForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add Product</h2>
                        <label htmlFor="name">Product Name</label>
                        <input
                            id="name"
                            type="text"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            type="text"
                            value={newProduct.description}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, description: e.target.value })
                            }
                        />
                        <label htmlFor="quantity">Quantity (Amount)</label>
                        <input
                            id="quantity"
                            type="number"
                            value={newProduct.quantity}
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    quantity: parseInt(e.target.value, 10),
                                })
                            }
                        />
                        <label htmlFor="price">Price (€)</label>
                        <div className="price-input-container">
                            <input
                                id="price"
                                type="text"
                                value={newProduct.price}
                                onChange={(e) => {
                                    const numericValue = e.target.value.replace(/[^0-9.]/g, "");
                                    const formattedValue = parseFloat(numericValue || "0").toFixed(2);
                                    setNewProduct({ ...newProduct, price: formattedValue });
                                }}
                            />
                        </div>
                        <div className="modal-buttons">
                            <button onClick={handleCreate}>Save Product</button>
                            <button onClick={() => setShowAddForm(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <ProductTable
                products={products}
                editable={true}
                onDelete={(id) => {
                    fetch(`http://localhost:5254/api/Product/${id}`, { method: "DELETE" })
                        .then((res) => {
                            if (!res.ok) throw new Error("Failed to delete product");
                            fetchProducts();
                        })
                        .catch((error) => {
                            console.error("Error deleting product:", error);
                            alert("Failed to delete product. Please try again.");
                        });
                }}
            />
        </div>
    );
};

export default AdminPage;
