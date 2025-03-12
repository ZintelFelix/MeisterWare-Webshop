import { useState } from "react";
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
        imageUrl: "",
        category: "",
        rating: "0",
        reviewCount: "0",
    });

    const categories = ["Smartphones", "Laptops", "Grafikkarten", "Zubehör", "Gaming"];

    const handleCreate = () => {
        if (!newProduct.name || !newProduct.description || newProduct.quantity <= 0 || parseFloat(newProduct.price) <= 0) {
            alert("Bitte alle Felder mit gültigen Werten ausfüllen!");
            return;
        }

        fetch("http://localhost:5254/api/Product", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...newProduct,
                price: parseFloat(newProduct.price),
                rating: parseFloat(newProduct.rating),
                reviewCount: parseInt(newProduct.reviewCount, 10),
            }),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Produkt konnte nicht hinzugefügt werden.");
                return res.json();
            })
            .then(() => {
                fetchProducts();
                setNewProduct({
                    name: "",
                    description: "",
                    quantity: 0,
                    price: "0.00",
                    imageUrl: "",
                    category: "",
                    rating: "0",
                    reviewCount: "0",
                });
                setShowAddForm(false);
            })
            .catch((error) => {
                console.error("Fehler beim Hinzufügen des Produkts:", error);
                alert("Produkt konnte nicht gespeichert werden. Bitte erneut versuchen.");
            });
    };

    return (
        <div className="admin-page">
            <h1>Admin Dashboard</h1>

            <div className="add-product-container">
                <button className="add-product-button" onClick={() => setShowAddForm(true)}>
                    + Neues Produkt
                </button>
            </div>

            {/* Modal für das Hinzufügen von Produkten */}
            {showAddForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Produkt hinzufügen</h2>

                        <label>Produktname</label>
                        <input type="text" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />

                        <label>Beschreibung</label>
                        <input type="text" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />

                        <label>Kategorie</label>
                        <select value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}>
                            <option value="">Bitte auswählen</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>

                        <label>Menge</label>
                        <input type="number" value={newProduct.quantity} onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value, 10) })} />

                        <label>Preis (€)</label>
                        <input
                            type="text"
                            value={newProduct.price}
                            onChange={(e) => {
                                const numericValue = e.target.value.replace(/[^0-9.]/g, "");
                                setNewProduct({ ...newProduct, price: parseFloat(numericValue || "0").toFixed(2) });
                            }}
                        />

                        <label>Bild-URL</label>
                        <input type="text" value={newProduct.imageUrl} onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })} />

                        {newProduct.imageUrl && <img src={newProduct.imageUrl} alt="Produkt-Vorschau" className="image-preview" />}

                        <label>Bewertung (1-5)</label>
                        <input type="number" min="1" max="5" value={newProduct.rating} onChange={(e) => setNewProduct({ ...newProduct, rating: e.target.value })} />

                        <label>Anzahl der Bewertungen</label>
                        <input type="number" value={newProduct.reviewCount} onChange={(e) => setNewProduct({ ...newProduct, reviewCount: e.target.value })} />

                        <div className="modal-buttons">
                            <button onClick={handleCreate}>Speichern</button>
                            <button onClick={() => setShowAddForm(false)}>Abbrechen</button>
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
                            if (!res.ok) throw new Error("Produkt konnte nicht gelöscht werden.");
                            fetchProducts();
                        })
                        .catch((error) => {
                            console.error("Fehler beim Löschen des Produkts:", error);
                            alert("Produkt konnte nicht gelöscht werden. Bitte erneut versuchen.");
                        });
                }}
            />
        </div>
    );
};

export default AdminPage;
