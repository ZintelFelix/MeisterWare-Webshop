import React, { useEffect, useState } from "react";
import "./OrderPage.css";

interface Order {
    id: number;
    productIds: number[];
    totalPrice: number;
    status: string;
    createdAt: string;
}

const OrderPage: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5254/api/Order")
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fehler beim Abrufen der Bestellungen:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="order-page">
            <h1>Bestellübersicht</h1>
            {loading ? <p>Lade Bestellungen...</p> : 
                orders.length === 0 ? (
                    <p>Es gibt noch keine Bestellungen.</p>
                ) : (
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>Bestell-ID</th>
                                <th>Produkte</th>
                                <th>Gesamtpreis</th>
                                <th>Status</th>
                                <th>Datum</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.productIds.join(", ")}</td>
                                    <td>€{order.totalPrice.toFixed(2)}</td>
                                    <td>{order.status}</td>
                                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    );
};

export default OrderPage;
