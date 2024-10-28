"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, ArrowLeft, Filter, SlidersHorizontal } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categoryData } from "@/lib/utils";


export default function CategoryPage({ params }: { params: { category: string } }) {
    const category = categoryData[params.category as keyof typeof categoryData];

    if (!category) {
        return <div>Category not found</div>;
    }

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
                            <Button variant="outline" className="gap-2">
                                <Filter className="h-4 w-4" />
                                Filter
                            </Button>
                            <Button variant="outline" className="gap-2">
                                <SlidersHorizontal className="h-4 w-4" />
                                Sort
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {category.items.map((sticker) => (
                        <Card key={sticker.id} className="overflow-hidden hover:shadow-xl transition-all">
                            <Tabs defaultValue="image1" className="w-full">
                                <div className="relative">
                                    <TabsContent value="image1" className="m-0">
                                        <div className="aspect-[16/9]">
                                            <img
                                                src={sticker.images[0]}
                                                alt={`${sticker.title} - View 1`}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="image2" className="m-0">
                                        <div className="aspect-[16/9]">
                                            <img
                                                src={sticker.images[1]}
                                                alt={`${sticker.title} - View 2`}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="image3" className="m-0">
                                        <div className="aspect-[16/9]">
                                            <img
                                                src={sticker.images[2]}
                                                alt={`${sticker.title} - View 3`}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </TabsContent>
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
                                        <TabsTrigger value="image1" className="w-20 h-12 p-0">
                                            <img
                                                src={sticker.images[0]}
                                                alt="Thumbnail 1"
                                                className="w-full h-full object-cover"
                                            />
                                        </TabsTrigger>
                                        <TabsTrigger value="image2" className="w-20 h-12 p-0">
                                            <img
                                                src={sticker.images[1]}
                                                alt="Thumbnail 2"
                                                className="w-full h-full object-cover"
                                            />
                                        </TabsTrigger>
                                        <TabsTrigger value="image3" className="w-20 h-12 p-0">
                                            <img
                                                src={sticker.images[2]}
                                                alt="Thumbnail 3"
                                                className="w-full h-full object-cover"
                                            />
                                        </TabsTrigger>
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
        </div>
    );
}