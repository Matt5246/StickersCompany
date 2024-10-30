"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, ShoppingCart, Star, ArrowLeft, Filter, SlidersHorizontal, ZoomIn, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categoryData } from "@/lib/utils";

export default function CategoryPage({ params }: { params: { category: string } }) {
    const category = categoryData[params.category as keyof typeof categoryData];
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [filterPrice, setFilterPrice] = useState<number | null>(null);
    const [filterSize, setFilterSize] = useState<string | null>(null);
    const [sortOption, setSortOption] = useState<string>("");

    if (!category) {
        return <div>Category not found</div>;
    }

    const allSizes = Array.from(
        new Set(category.items.flatMap(item => item.sizes))
    );

    const priceRanges = [
        { label: "All Prices", value: null },
        { label: "Under $10", value: 10 },
        { label: "Under $15", value: 15 },
        { label: "Under $20", value: 20 },
        { label: "Under $30", value: 30 }
    ];

    const sortOptions = [
        { label: "Featured", value: "" },
        { label: "Price: Low to High", value: "priceLowToHigh" },
        { label: "Price: High to Low", value: "priceHighToLow" },
        { label: "Best Rating", value: "rating" },
        { label: "Most Sold", value: "sales" }
    ];

    const filteredItems = category.items
        .filter((item) => {
            return (filterPrice ? item.price <= filterPrice : true) &&
                (filterSize ? item.sizes.includes(filterSize) : true);
        })
        .sort((a, b) => {
            switch (sortOption) {
                case "priceLowToHigh": return a.price - b.price;
                case "priceHighToLow": return b.price - a.price;
                case "rating": return b.rating - a.rating;
                case "sales": return b.sales - a.sales;
                default: return 0;
            }
        });

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
                                                <img
                                                    src={image}
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
                                        className="absolute top-3 right-3 bg-white/90 hover:bg-white shadow-lg z-10"
                                    >
                                        <Heart className="h-5 w-5" />
                                    </Button>
                                </div>
                                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/50">
                                    <TabsList className="w-full gap-2">
                                        {sticker.images.map((image, index) => (
                                            <TabsTrigger key={`thumb${index + 1}`} value={`image${index + 1}`} className="w-20 h-12 p-0">
                                                <img
                                                    src={image}
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
                                    <Badge variant="secondary" className="text-lg px-3 py-1">
                                        ${sticker.price}
                                    </Badge>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="font-medium mb-2">Available Sizes:</h4>
                                        <div className="flex gap-2 flex-wrap">
                                            {sticker.sizes.map((size) => (
                                                <Badge key={size} variant="outline" className="px-3 py-1">
                                                    {size}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Colors:</h4>
                                        <div className="flex gap-2 flex-wrap">
                                            {sticker.colors.map((color) => (
                                                <Badge key={color} variant="outline" className="px-3 py-1">
                                                    {color}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full gap-2">
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
                        <img src={selectedImage} alt="Zoomed in view" className="w-full h-auto" />
                    </DialogContent>
                )}
            </Dialog>
        </div>
    );
}