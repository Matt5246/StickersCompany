"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, ChevronRight, Sparkles } from "lucide-react";

const categories = [
  // {
  //   id: "custom",
  //   title: "Custom Designs",
  //   description: "Bring your vision to life with our professional artists. Custom-made stickers tailored to your specifications.",
  //   icon: <Pencil className="h-6 w-6" />,
  //   image: "/150.jpg",
  //   items: [
  //     {
  //       id: 8,
  //       title: "milo in green",
  //       price: 14.99,
  //       image: "/150.jpg",
  //       rating: 4.7,
  //       sales: 900,
  //       badge: "New"
  //     },
  //   ]
  // },
  {
    id: "anime",
    title: "Anime Stickers",
    description: "Anime-inspired stickers that capture the essence of your favorite characters and series.",
    icon: <Sparkles className="h-6 w-6" />,
    image: "/Wale.png",
    items: [
      {
        id: 3,
        title: "Yukki",
        price: 14.99,
        image: "/Yuki1.png",
        rating: 4.6,
        sales: 567,
        badge: "Premium"
      },
      {
        id: 4,
        title: "Jinx",
        price: 19.99,
        image: "/Jinx.png",
        rating: 4.5,
        sales: 234,
        badge: "New"
      }
    ]
  },
  // {
  //   id: "regular",
  //   title: "Regular Stickers",
  //   description: "Premium vinyl decals designed to make your vehicle stand out with style and personality.",
  //   icon: <Palette className="h-6 w-6" />,
  //   image: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&auto=format&fit=crop&q=60",
  //   items: [
  //     {
  //       id: 3,
  //       title: "Racing Stripes Pro",
  //       price: 14.99,
  //       image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
  //       rating: 4.6,
  //       sales: 567,
  //       badge: "Premium"
  //     },
  //     {
  //       id: 4,
  //       title: "Dragon Tribal Design",
  //       price: 19.99,
  //       image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
  //       rating: 4.5,
  //       sales: 234,
  //       badge: "New"
  //     }
  //   ]
  // }
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
              Stickerki
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Naklejki dla bratków.
            </p>
            <div className="flex gap-4 justify-center mt-8 text-blue-600 ">
              <Link href='/stickers/personalized'>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  Personalized
                </Button>
              </Link>
              <Link href='/stickers/custom'>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8" >
                  Custom Design
                </Button>
              </Link>
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
                  <Button variant="outline" size="xl" className="group mt-5">
                    View All {category.title}
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.slice(0, 2).map((sticker) => (
                <Card key={sticker.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative aspect-[1/1]">
                    <Image
                      src={sticker.image}
                      alt={sticker.title}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white shadow-lg"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                    {sticker?.badge && (
                      <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                        {sticker?.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-xl">{sticker.title}</h3>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {sticker.price}zł
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