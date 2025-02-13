// components/CartModal.js
"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, ShoppingCart } from "lucide-react";
import axios from "axios";

export default function CartModal() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const [email, setEmail] = useState("");
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleQuantityChange = (id, size, newQuantity) => {
        if (newQuantity > 0) {
            updateQuantity(id, size, newQuantity);
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            alert("Please enter your email address.");
            return;
        }
        try {
            const res = await axios.post("/api/checkout_sessions", {
                cartItems,
                email
            }, {
                headers: { "Content-Type": "application/json" }
            });
            if (res.data.url) {
                window.location.href = res.data.url;
            }
            console.log(res);
        } catch (error) {
            console.error("Error during checkout:", error.message, error.response || error.request || error);
            alert("An error occurred during checkout. Please try again.");
        }

    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Cart ({totalItems})
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogTitle>Shopping Cart</DialogTitle>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {cartItems.map((item) => (
                            <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center justify-between py-2 border-b">
                                <div className="flex items-center">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={item.image}
                                        alt={item.title}
                                        className="w-12 h-12 object-cover mr-4"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.price % 1 === 0 ? item.price.toFixed(0) : item.price.toFixed(2)}zł</p>
                                        <p className="text-xs text-gray-400">{item.size}-{item.customSize}mm, {item?.shape}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Button
                                        type="button" 
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                                    >
                                        -
                                    </Button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <Button
                                        type="button" 
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                                    >
                                        +
                                    </Button>
                                    <Button
                                        type="button" 
                                        variant="ghost"
                                        size="sm"
                                        className="ml-2"
                                        onClick={() => removeFromCart(item.id, item.size)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                        <div className="mt-4">
                            <p className="font-semibold">Total: {totalPrice % 1 === 0 ? totalPrice.toFixed(0) : totalPrice.toFixed(2)}zł</p>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <Button className="w-full mt-4" type="submit">
                            Proceed to Checkout
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}