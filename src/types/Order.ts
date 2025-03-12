export interface Order {
    id: number;
    products: {
        id: number;
        name: string;
        price: number;
        quantity: number;
        imageUrl?: string;
    }[];
    totalPrice: number;
    status: "Pending" | "Shipped" | "Delivered";
    createdAt: string;
}
