// src/pages/AdminPage.tsx
import React, { useState, ChangeEvent } from "react";
import { useProductContext } from "../hooks/useProductContext";
import ProductTable from "../components/ProductTable";
import { Product } from "../types/Product";
import "./AdminPage.css";

const AdminPage: React.FC = () => {
    const { products, fetchProducts, updateProduct } = useProductContext();
    const [showAddForm, setShowAddForm] = useState(false);
    const [newProduct, setNewProduct] = useState<Partial<Product>>({
        name: "",
        description: "",
        quantity: 0,
        price: 0,
        imageUrl: "",
        category: "",
        rating: 0,
        reviewCount: 0,
        featured: false,
    });

    // Create new product
    const handleCreate = () => {
        const payload = {
            ...newProduct,
            createdAt: new Date().toISOString(),
        };
        fetch("http://localhost:5254/api/Product", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Konnte Produkt nicht anlegen.");
                return res.json();
            })
            .then(() => {
                fetchProducts();
                setShowAddForm(false);
            })
            .catch((err) => alert(err.message));
    };

    // Toggle featured flag
    const handleToggleFeatured = (product: Product) => {
        console.log("Toggling featured for", product.id, "→", !product.featured);
        updateProduct({ ...product, featured: !product.featured });
    };

    // Delete product
    const handleDelete = (id: number) => {
        if (!window.confirm("Produkt wirklich löschen?")) return;
        fetch(`http://localhost:5254/api/Product/${id}`, { method: "DELETE" })
            .then((res) => {
                if (!res.ok) throw new Error("Konnte Produkt nicht löschen.");
                fetchProducts();
            })
            .catch((err) => alert(err.message));
    };

    // Handle add-form input changes
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({
            ...prev,
            [name]:
                name === "quantity" ||
                    name === "price" ||
                    name === "rating" ||
                    name === "reviewCount"
                    ? Number(value)
                    : value,
        }));
    };

    return (
        <div className="admin-page">
            <h1>Admin Dashboard</h1>
            <button className="add-product-button" onClick={() => setShowAddForm(true)}>
                + Neues Produkt
            </button>

            {showAddForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Neues Produkt</h2>

                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={newProduct.name || ""}
                            onChange={handleChange}
                        />

                        <label>Beschreibung</label>
                        <textarea
                            name="description"
                            placeholder="Beschreibung"
                            value={newProduct.description || ""}
                            onChange={handleChange}
                        />

                        <label>Kategorie</label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Kategorie"
                            value={newProduct.category || ""}
                            onChange={handleChange}
                        />

                        <label>Anzahl</label>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Anzahl"
                            value={newProduct.quantity ?? 0}
                            onChange={handleChange}
                        />

                        <label>Preis (€)</label>
                        <input
                            type="number"
                            step="0.01"
                            name="price"
                            placeholder="Preis"
                            value={newProduct.price ?? 0}
                            onChange={handleChange}
                        />

                        <label>Bild-URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="Bild-URL"
                            value={newProduct.imageUrl || ""}
                            onChange={handleChange}
                        />

                        <label>Bewertung</label>
                        <input
                            type="number"
                            min="0"
                            max="5"
                            name="rating"
                            placeholder="Bewertung"
                            value={newProduct.rating ?? 0}
                            onChange={handleChange}
                        />

                        <label>Anzahl Reviews</label>
                        <input
                            type="number"
                            name="reviewCount"
                            placeholder="Anzahl Reviews"
                            value={newProduct.reviewCount ?? 0}
                            onChange={handleChange}
                        />

                        <label>
                            <input
                                type="checkbox"
                                name="featured"
                                checked={!!newProduct.featured}
                                onChange={() =>
                                    setNewProduct((prev) => ({
                                        ...prev,
                                        featured: !prev.featured,
                                    }))
                                }
                            />{" "}
                            Als Featured markieren
                        </label>

                        <div className="modal-buttons">
                            <button onClick={handleCreate}>Speichern</button>
                            <button onClick={() => setShowAddForm(false)}>Abbrechen</button>
                        </div>
                    </div>
                </div>
            )}

            <ProductTable
                products={products}
                editable
                onEdit={handleToggleFeatured}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default AdminPage;
