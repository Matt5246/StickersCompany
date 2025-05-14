"use client";

import { useEffect } from "react";
import CartModal from "@/components/CartModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { CartItem, Sticker } from "@/types/types";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PriceBadge from "@/components/PriceBadge";
import { sizeLimits } from "@/lib/utils";

export default function CategoryPage() {
    const { addToCart } = useCart();
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(0);
    const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});
    const [selectedShape, setSelectedShape] = useState<{ [key: number]: string }>({});
    const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
    const [discount, setDiscount] = useState<number | null>(null);
    const [customSize, setCustomSize] = useState<number | null>(null);

    const sticker = {
        id: 1,
        title: "Mała naklejka",
        price: 3,
        rating: 4.5,
        sales: 100,
        sizes: ["Small", "Medium", "Large"],
        quantity: [[5, 10, 25, 50, 100], [5, 10, 25, 50, 100], [5, 10, 25]],
        shape: ["Circle", "Square", "Rectangle"],
        image: "/145.png",
        sizePrice: [3, 5, 7],
    };
    useEffect(() => {
        const fetchPrice = async () => {
            if (!selectedSizes[sticker.id] || quantity <= 0) return;
            try {
                const response = await fetch("/api/calculatePrice", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        size: selectedSizes[sticker.id].toLowerCase(),
                        quantity
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    setCalculatedPrice(data.basePrice * quantity);
                    setDiscount(data.discount);
                } else {
                    setCalculatedPrice(null);
                    setDiscount(null);
                    console.error("Error fetching price:", data.error);
                }
            } catch (error) {
                console.error("Failed to fetch price:", error);
            }
        };

        fetchPrice();
    }, [selectedSizes, quantity, sticker.id]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImageFile(file); // Store the file
            setImagePreview(URL.createObjectURL(file)); // Create a preview URL
        }
    };

    const handleAddToCart = (sticker: Sticker) => {
        const size = selectedSizes[sticker.id];
        const shape = selectedShape[sticker.id];
        if (!size || !shape || !quantity || calculatedPrice === null || customSize === null) {
            toast({
                title: "Please select size, quantity and Shape",
                description: "You must select both size pick the custom size and shape before adding to cart.",
                variant: "destructive",
            });
            return;
        }
        let stickerName = sticker.title;
        if (size === "Medium") {
            stickerName = "Średnia naklejka";
        } else if (size === "Large") {
            stickerName = "Duża naklejka";
        } else {
            stickerName = "Mała naklejka";
        }


        const cartItem: CartItem = {
            id: Date.now(),
            name: stickerName,
            amount: calculatedPrice,
            shape,
            quantity,
            customSize,
            image: imagePreview || sticker.image,
            size,
            imageFile: imageFile || null,
        };

        addToCart(cartItem);

        toast({
            title: "Added to cart",
            description: `${sticker.title} (${size}) has been added to your cart.`,
        });
    };

    const handleSizeChange = (value: string) => {
        setSelectedSizes({ ...selectedSizes, [sticker.id]: value });
        setCustomSize(sizeLimits[value]?.min || 10);
    };

    const shapeStyles: { [key: string]: string } = {
        Circle: "w-64 h-64 rounded-full",
        Square: "w-64 h-64",
        Rectangle: "w-64 h-48",
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-8">
                    <Link href="/">
                        <Button variant="ghost" className="group mb-4">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Button>
                    </Link>
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-4xl font-bold mb-4">Custom stickers</h1>
                            <p className="text-gray-600 dark:text-gray-400">Here you can make your order for custom stickers</p>
                        </div>
                        <div className="flex gap-2">
                            <CartModal />
                        </div>
                    </div>

                    <div className="flex justify-center items-center h-full mt-[50px]">
                        <Card key={sticker.id} className="w-96 overflow-hidden hover:shadow-xl transition-all">
                            <div className="flex flex-col items-center gap-2">
                                <Label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                    {imagePreview ? (
                                        <Image src={imagePreview} alt="Preview" width={500} height={500} className={`object-cover ${shapeStyles[selectedShape[sticker.id]]}`}
                                            style={{
                                                borderRadius: selectedShape[sticker.id] === "Circle" ? "50%" : "0%",
                                            }} />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <UploadIcon
                                                //@ts-expect-error className is not a valid prop for SVG
                                                className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400" />
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, or GIF (MAX. 5MB)</p>
                                        </div>
                                    )}
                                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                </Label>
                            </div>

                            <CardContent className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex-1">
                                        <h2 className="text-xl font-bold">Custom sticker</h2>
                                    </div>
                                    <div className="flex-2 flex items-center gap-2">

                                        {calculatedPrice ? <PriceBadge price={calculatedPrice !== null ? calculatedPrice : null} discount={discount} /> : <div className="w-6 h-6 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="font-medium mb-2">Size:</h4>
                                        <RadioGroup
                                            value={selectedSizes[sticker.id] || ""}
                                            onValueChange={(value) => {
                                                setSelectedSizes({ ...selectedSizes, [sticker.id]: value });
                                                handleSizeChange(value);
                                                setQuantity(0);
                                            }}
                                            defaultValue="small"
                                        >
                                            <div className="flex gap-2 flex-wrap">
                                                {sticker.sizes.map((size) => (
                                                    <div key={size}>
                                                        <RadioGroupItem value={size} id={`${sticker.id}-${size}`} className="peer sr-only" />
                                                        <Label
                                                            htmlFor={`${sticker.id}-${size}`}
                                                            className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                        >
                                                            {size}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                        <Input
                                            type="number"
                                            className="w-full mt-3"
                                            placeholder="Choose size above first"
                                            min={sizeLimits[selectedSizes[sticker.id]]?.min || 10}
                                            max={sizeLimits[selectedSizes[sticker.id]]?.max || 100}
                                            value={customSize || undefined}
                                            required
                                            disabled={!selectedSizes[sticker.id]}
                                            onChange={(e) => {
                                                const value = Number(e.target.value);
                                                const limits = sizeLimits[selectedSizes[sticker.id]];
                                                if (limits) {
                                                    setCustomSize(Math.min(Math.max(value, limits.min), limits.max));
                                                }
                                            }}
                                        />
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Custom size in mm</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Quantity: {quantity}</h4>
                                        <RadioGroup
                                            value={quantity.toString()}
                                            onValueChange={(value) => {
                                                setQuantity(Number(value));
                                            }}
                                        >
                                            <div className="flex gap-2 flex-wrap">
                                                {sticker.quantity[sticker.sizes.indexOf(selectedSizes[sticker.id] || sticker.sizes[0])].map((quantity) => (
                                                    <div key={quantity}>
                                                        <RadioGroupItem value={quantity.toString()} id={`${sticker.id}-${quantity}`} className="peer sr-only" />
                                                        <Label
                                                            htmlFor={`${sticker.id}-${quantity}`}
                                                            className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                        >
                                                            {quantity}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Shape:</h4>
                                        <RadioGroup
                                            value={selectedShape[sticker.id] || ""}
                                            onValueChange={(value) => setSelectedShape({ ...selectedShape, [sticker.id]: value })}
                                        >
                                            <div className="flex gap-2 flex-wrap">
                                                {sticker.shape.map((shape) => (
                                                    <div key={shape}>
                                                        <RadioGroupItem value={shape} id={`${sticker.id}-${shape}`} className="peer sr-only" />
                                                        <Label
                                                            htmlFor={`${sticker.id}-${shape}`}
                                                            className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                        >
                                                            {shape}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>

                                <Button className="w-full gap-2" onClick={() => handleAddToCart(sticker)}>
                                    <ShoppingCart className="h-5 w-5" />
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    {/* <CldImage
                        src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
                        width="500" // Transform the image: auto-crop to square aspect_ratio
                        height="500"
                        crop={{
                            type: 'auto',
                            source: true
                        }}
                        alt="Sample Image"
                    /> */}
                </div>
            </div>
        </div>
    );
}

const UploadIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
    </svg>
);