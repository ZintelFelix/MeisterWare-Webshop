export interface Product {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    imageUrl: string;
    category: string;
    rating: number;
    reviewCount: number;
    createdAt: string;
    featured?: boolean;
}
