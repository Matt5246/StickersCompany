// components/CartModal.js
"use client";

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, ShoppingCart } from "lucide-react";

export default function CartModal() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleQuantityChange = (id, size, newQuantity) => {
        if (newQuantity > 0) {
            updateQuantity(id, size, newQuantity);
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
                    <form action="/api/checkout_sessions" method="POST">
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
                                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                                        <p className="text-xs text-gray-400">{item.size}, {item?.shape}</p>
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
                            <p className="font-semibold">Total: ${totalPrice.toFixed(2)}</p>
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