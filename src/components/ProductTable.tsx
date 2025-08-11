// Admin-Table für Produkte
import React from "react";
import { Product } from "../types/Product";
import "./ProductTable.css";

type Props = {
    products: Product[];
    editable?: boolean;
    onEdit?: (product: Product) => void;
    onDelete?: (id: number) => void;
    onToggleFeatured?: (id: number, next: boolean) => void;
};

const ProductTable: React.FC<Props> = ({
    products,
    editable = false,
    onEdit,
    onDelete,
    onToggleFeatured,
}) => {
    return (
        <div className="product-table__wrap">
            <table className="product-table">
                <thead>
                    <tr>
                        <th style={{ width: "42px" }}>#</th>
                        <th>Name</th>
                        <th>Beschreibung</th>
                        <th>Kategorie</th>
                        <th style={{ width: "110px" }}>Preis</th>
                        <th style={{ width: "110px" }}>Menge</th>
                        {editable && <th style={{ width: "110px" }}>Featured</th>}
                        {editable && <th style={{ width: "160px" }}>Aktionen</th>}
                    </tr>
                </thead>
                <tbody>
                    {products.map((p, idx) => (
                        <tr key={p.id}>
                            <td className="muted">{idx + 1}</td>
                            <td className="strong">{p.name}</td>
                            <td className="ellipsis" title={p.description}>{p.description}</td>
                            <td className="muted">{p.category}</td>
                            <td>€{p.price.toFixed(2)}</td>
                            <td>{p.quantity}</td>

                            {editable && (
                                <td>
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={!!p.featured}
                                            onChange={(e) => onToggleFeatured?.(p.id, e.target.checked)}
                                        />
                                        <span className="slider" />
                                    </label>
                                </td>
                            )}

                            {editable && (
                                <td className="actions">
                                    <button className="btn btn--light" onClick={() => onEdit?.(p)}>Bearbeiten</button>
                                    <button className="btn btn--danger" onClick={() => onDelete?.(p.id)}>Löschen</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
