// CategoryPage.js (or your component)
"use client";

import CartModal from "@/components/CartModal"; // Import the CartModal component
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/context/CartContext"; // Import the useCart hook
import { useToast } from "@/hooks/use-toast";
import { categoryData } from "@/lib/utils";
import { ArrowLeft, Heart, ShoppingCart, Star, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Check, Filter, SlidersHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sticker } from "@/types/types";

export default function CategoryPage({ params }: { params: { category: string } }) {
    const category = categoryData[params.category as keyof typeof categoryData];
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [filterPrice, setFilterPrice] = useState<number | null>(null);
    const [filterSize, setFilterSize] = useState<string | null>(null);
    const [sortOption, setSortOption] = useState<string>("");
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});
    const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>({});
    const [quantity, setQuantity] = useState(1);
    const { toast } = useToast();
    const { addToCart } = useCart();

    if (!category) {
        return <div>Category not found</div>;
    }

    const allSizes = Array.from(
        new Set(category.items.flatMap((item) => item.sizes))
    );

    const priceRanges = [
        { label: "All Prices", value: null },
        { label: "Under $10", value: 10 },
        { label: "Under $15", value: 15 },
        { label: "Under $20", value: 20 },
        { label: "Under $30", value: 30 },
    ];

    const sortOptions = [
        { label: "Featured", value: "" },
        { label: "Price: Low to High", value: "priceLowToHigh" },
        { label: "Price: High to Low", value: "priceHighToLow" },
        { label: "Best Rating", value: "rating" },
        { label: "Most Sold", value: "sales" },
    ];

    const filteredItems = category.items
        .filter((item) => {
            return (
                (filterPrice ? item.price <= filterPrice : true) &&
                (filterSize ? item.sizes.includes(filterSize) : true)
            );
        })
        .sort((a, b) => {
            switch (sortOption) {
                case "priceLowToHigh":
                    return a.price - b.price;
                case "priceHighToLow":
                    return b.price - a.price;
                case "rating":
                    return b.rating - a.rating;
                case "sales":
                    return b.sales - a.sales;
                default:
                    return 0;
            }
        });

    const handleAddToCart = (sticker: Sticker) => {
        const size = selectedSizes[sticker.id];
        const color = selectedColors[sticker.id];

        if (!size || !color) {
            toast({
                title: "Please select size and color",
                description: "You must select both size and color before adding to cart.",
                variant: "destructive",
            });
            return;
        }

        addToCart({
            id: sticker.id,
            title: sticker.title,
            price: sticker.price,
            quantity,
            image: sticker.image,
            size,
        });

        toast({
            title: "Added to cart",
            description: `${sticker.title} (${size}, ${color}) has been added to your cart.`,
        });
    };

    const toggleWishlist = (id: number) => {
        setWishlist((prevWishlist) =>
            prevWishlist.includes(id)
                ? prevWishlist.filter((itemId) => itemId !== id)
                : [...prevWishlist, id]
        );
        toast({
            title: wishlist.includes(id) ? "Removed from wishlist" : "Added to wishlist",
            description: `Item has been ${wishlist.includes(id) ? "removed from" : "added to"} your wishlist.`,
        });
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
                            <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
                            <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                        </div>
                        <div className="flex gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="gap-2">
                                        <Filter className="h-4 w-4" />
                                        Filter
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuLabel>Price Range</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {priceRanges.map((range) => (
                                        <DropdownMenuItem
                                            key={range.label}
                                            onClick={() => setFilterPrice(range.value)}
                                            className="flex items-center justify-between"
                                        >
                                            {range.label}
                                            {filterPrice === range.value && <Check className="h-4 w-4" />}
                                        </DropdownMenuItem>
                                    ))}
                                    <DropdownMenuSeparator />
                                    <DropdownMenuLabel>Size</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={() => setFilterSize(null)}
                                        className="flex items-center justify-between"
                                    >
                                        All Sizes
                                        {filterSize === null && <Check className="h-4 w-4" />}
                                    </DropdownMenuItem>
                                    {allSizes.map((size) => (
                                        <DropdownMenuItem
                                            key={size}
                                            onClick={() => setFilterSize(size)}
                                            className="flex items-center justify-between"
                                        >
                                            {size}
                                            {filterSize === size && <Check className="h-4 w-4" />}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="gap-2">
                                        <SlidersHorizontal className="h-4 w-4" />
                                        Sort
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    {sortOptions.map((option) => (
                                        <DropdownMenuItem
                                            key={option.value}
                                            onClick={() => setSortOption(option.value)}
                                            className="flex items-center justify-between"
                                        >
                                            {option.label}
                                            {sortOption === option.value && <Check className="h-4 w-4" />}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <CartModal />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredItems.map((sticker) => (
                        <Card key={sticker.id} className="overflow-hidden hover:shadow-xl transition-all">
                            <Tabs defaultValue="image1" className="w-full">
                                <div className="relative">
                                    {sticker.images.map((image, index) => (
                                        <TabsContent key={`image${index + 1}`} value={`image${index + 1}`} className="m-0 cursor-pointer" onClick={() => setSelectedImage(image)}>
                                            <div className="aspect-[1/1] relative group">
                                                <Image
                                                    src={image}
                                                    width={500}
                                                    height={500}
                                                    alt={`${sticker.title} - View ${index + 1}`}
                                                    className="object-cover w-full h-full"
                                                />
                                                <Button
                                                    size="icon"
                                                    variant="secondary"
                                                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    onClick={() => setSelectedImage(image)}
                                                >
                                                    <ZoomIn className="h-5 w-5" />
                                                </Button>
                                            </div>
                                        </TabsContent>
                                    ))}
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className={`absolute top-3 right-3 bg-white/90 hover:bg-white shadow-lg z-10 ${wishlist.includes(sticker.id) ? "text-red-500" : ""
                                            }`}
                                        onClick={() => toggleWishlist(sticker.id)}
                                    >
                                        <Heart className="h-5 w-5" fill={wishlist.includes(sticker.id) ? "currentColor" : "none"} />
                                    </Button>
                                </div>
                                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/50">
                                    <TabsList className="w-full gap-2">
                                        {sticker.images.map((image, index) => (
                                            <TabsTrigger key={`thumb${index + 1}`} value={`image${index + 1}`} className="w-20 h-12 p-0">
                                                <Image
                                                    src={image}
                                                    width={500}
                                                    height={500}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </TabsTrigger>
                                        ))}
                                    </TabsList>
                                </div>
                            </Tabs>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-semibold text-xl mb-1">{sticker.title}</h3>
                                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                            <div className="flex items-center bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-full">
                                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                <span className="ml-1 font-medium">{sticker.rating}</span>
                                            </div>
                                            <span>•</span>
                                            <span>{sticker.sales} sold</span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3 ">
                                        <Input
                                            type="number"
                                            className="w-1/3"
                                            placeholder="Quantity"
                                            max={2000}
                                            value={quantity}
                                            onChange={(e) => {
                                                const value = Math.min(Number(e.target.value), 2000);
                                                setQuantity(value);
                                            }}
                                        />
                                        <Badge variant="secondary" className="text-lg px-3 py-1">
                                            ${Number(sticker.price * quantity + (quantity * (sticker.sizePrice?.[sticker.sizes.indexOf(selectedSizes[sticker.id])] || 0))).toFixed(2)}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="font-medium mb-2">Size:</h4>
                                        <RadioGroup
                                            value={selectedSizes[sticker.id] || ""}
                                            onValueChange={(value) => setSelectedSizes({ ...selectedSizes, [sticker.id]: value })}
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
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Color:</h4>
                                        <RadioGroup
                                            value={selectedColors[sticker.id] || ""}
                                            onValueChange={(value) => setSelectedColors({ ...selectedColors, [sticker.id]: value })}
                                        >
                                            <div className="flex gap-2 flex-wrap">
                                                {sticker.colors.map((color) => (
                                                    <div key={color}>
                                                        <RadioGroupItem value={color} id={`${sticker.id}-${color}`} className="peer sr-only" />
                                                        <Label
                                                            htmlFor={`${sticker.id}-${color}`}
                                                            className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                        >
                                                            {color}
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
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                {selectedImage && (
                    <DialogContent className="max-w-3xl w-full p-0 border-0">
                        <Image width={500} height={500} src={selectedImage} alt="Zoomed in view" className="w-full h-auto" />
                    </DialogContent>
                )}
            </Dialog>
        </div>
    );
}


