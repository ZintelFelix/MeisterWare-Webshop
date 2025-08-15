import React from "react";
import "./ProductTable.css";
import { Product } from "../types/Product";

type Props = {
    products: Product[];
    editable?: boolean;
    onEdit?: (product: Product) => void;   // hier: toggle featured
    onDelete?: (id: number) => void;
};

const ProductTable: React.FC<Props> = ({
    products,
    editable = false,
    onEdit,
    onDelete,
}) => {
    return (
        <div className="product-table__wrap">
            <table className="product-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>BESCHREIBUNG</th>
                        <th>KATEGORIE</th>
                        <th>PREIS</th>
                        <th>MENGE</th>
                        <th>FEATURED</th>
                        <th className="col-actions">AKTIONEN</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p, i) => (
                        <tr key={p.id}>
                            <td>{i + 1}</td>
                            <td className="ellipsis strong">{p.name}</td>
                            <td className="muted ellipsis">{p.description}</td>
                            <td>{p.category}</td>
                            <td className="strong">
                                {typeof p.price === "number"
                                    ? p.price.toLocaleString("de-DE", {
                                        style: "currency",
                                        currency: "EUR",
                                    })
                                    : p.price}
                            </td>
                            <td>{p.quantity}</td>
                            <td>
                                {editable ? (
                                    <label className="switch" title="Als Featured markieren">
                                        <input
                                            type="checkbox"
                                            checked={!!p.featured}
                                            onChange={() => onEdit?.(p)}
                                        />
                                        <span className="slider" />
                                    </label>
                                ) : (
                                    p.featured ? "Ja" : "Nein"
                                )}
                            </td>
                            <td className="col-actions">
                                <button className="btn">Bearbeiten</button>
                                <button
                                    className="btn btn--danger"
                                    onClick={() => onDelete?.(p.id)}
                                >
                                    Löschen
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
