"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, ChevronRight, Sparkles, Palette, Pencil } from "lucide-react";

const categories = [
  {
    id: "anime",
    title: "Anime Stickers",
    description: "Transform your ride with premium anime-inspired vinyl stickers featuring your favorite characters and series.",
    icon: <Sparkles className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800&auto=format&fit=crop&q=60",
    items: [
      {
        id: 1,
        title: "Initial D AE86 Drift King",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800&auto=format&fit=crop&q=60",
        rating: 4.8,
        sales: 234,
        badge: "Best Seller"
      },
      {
        id: 2,
        title: "Naruto Akatsuki Cloud",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
        rating: 4.9,
        sales: 456,
        badge: "Popular"
      }
    ]
  },
  {
    id: "regular",
    title: "Regular Stickers",
    description: "Premium vinyl decals designed to make your vehicle stand out with style and personality.",
    icon: <Palette className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&auto=format&fit=crop&q=60",
    items: [
      {
        id: 3,
        title: "Racing Stripes Pro",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
        rating: 4.6,
        sales: 567,
        badge: "Premium"
      },
      {
        id: 4,
        title: "Dragon Tribal Design",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
        rating: 4.5,
        sales: 234,
        badge: "New"
      }
    ]
  },
  {
    id: "custom",
    title: "Custom Designs",
    description: "Bring your vision to life with our professional artists. Custom-made stickers tailored to your specifications.",
    icon: <Pencil className="h-6 w-6" />,
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60",
    items: [
      {
        id: 5,
        title: "Custom Name Calligraphy",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60",
        rating: 5.0,
        sales: 123,
        badge: "Custom"
      },
      {
        id: 6,
        title: "Personal Logo Design",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
        rating: 4.9,
        sales: 89,
        badge: "Premium Custom"
      }
    ]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="relative h-[70vh] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-blue-600 to-purple-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=1800')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center space-y-6 px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
              Smolarek stickers
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Premium vinyl stickers and custom designs to make your vehicle cool
            </p>
            <div className="flex gap-4 justify-center mt-8 text-blue-600 ">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                Explore Collections
              </Button>
              <Button size="lg" variant="outline" className=" border-white hover:bg-white/10 text-lg px-8">
                Custom Design
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {categories.map((category, index) => (
          <section key={category.id} className={`py-20 ${index !== 0 ? 'border-t border-gray-200 dark:border-gray-700' : ''}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                    {category.title}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {category.description}
                </p>
                <Link href={`/stickers/${category.id}`}>
                  <Button variant="outline" size="lg" className="group mt-5">
                    View All {category.title}
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((sticker) => (
                <Card key={sticker.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative aspect-video">
                    <img
                      src={sticker.image}
                      alt={sticker.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white shadow-lg"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                    {sticker.badge && (
                      <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                        {sticker.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-xl">{sticker.title}</h3>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        ${sticker.price}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-full">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 font-medium">{sticker.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{sticker.sales} sold</span>
                    </div>
                    <Button className="w-full gap-2 text-base">
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}