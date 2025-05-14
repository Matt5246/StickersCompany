export interface Sticker {
    id: number;
    title: string;
    price: number;
    rating: number;
    sales: number;
    images?: string[];
    sizes: string[];
    colors?: string[];
    shape: string[];
    sizePrice: number[];
    image: string;
}

export interface CartItem {
    id:  number;
    name: string;
    amount: number;
    quantity?: number;
    image: string;
    shape?: string;
    size?: string;
    customSize?: number | null;
    imageFile?: File | null;
}