'use client'
import { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, Sticker } from "@/types/types";


interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number, size: string) => void;
    updateQuantity: (id: number, size: string, newQuantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (i) => i.id === item.id && i.size === item.size
            );
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id && i.size === item.size
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            }
            return [...prevItems, item];
        });
    };

    const removeFromCart = (id: number, size: string) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => !(item.id === id && item.size === size))
        );
    };
    const fetchPrice = async (size: string, quantity: number) => {
        try {
            const response = await fetch("/api/calculatePrice", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ size, quantity }),
            });

            const data = await response.json();
            return response.ok ? data.basePrice * quantity : null;
        } catch (error) {
            console.error("Failed to fetch price:", error);
            return null;
        }
    };
    const updateQuantity = async (id: number, size: string, newQuantity: number) => {
        if (newQuantity < 1) return;

        const newPrice = await fetchPrice(size.toLowerCase(), newQuantity);

        //@ts-ignore
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.size === size
                    ? { ...item, quantity: newQuantity, price: newPrice }
                    : item
            )
        );
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
