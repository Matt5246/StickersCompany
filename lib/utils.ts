import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const categoryData = {
  anime: {
      title: "Anime Stickers",
      description: "Express your love for anime with our exclusive collection",
      items: [
          {
              id: 1,
              title: "Initial D AE86 Drift King",
              price: 12.99,
              image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800&auto=format&fit=crop&q=60",
              rating: 4.8,
              sales: 234,
              images: [
                  "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=800&auto=format&fit=crop&q=60"
              ],
              sizes: ["Small (5\")", "Medium (8\")", "Large (12\")"],
              colors: ["Black", "White", "Silver"]
          },
          {
              id: 2,
              title: "Naruto Akatsuki Cloud",
              price: 9.99,
              image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
              rating: 4.9,
              sales: 456,
              images: [
                  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800&auto=format&fit=crop&q=60"
              ],
              sizes: ["Small (4\")", "Medium (7\")", "Large (10\")"],
              colors: ["Red", "Black", "Gold"]
          },
          {
              id: 3,
              title: "Dragon Ball Z Saiyan",
              price: 11.99,
              image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=800&auto=format&fit=crop&q=60",
              rating: 4.7,
              sales: 345,
              images: [
                  "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60"
              ],
              sizes: ["Small (5\")", "Medium (8\")", "Large (12\")"],
              colors: ["Orange", "Blue", "Gold"]
          }
      ]
  },
  regular: {
      title: "Regular Stickers",
      description: "Classic designs and patterns for your vehicle",
      items: [
          {
              id: 4,
              title: "Racing Stripes Pro",
              price: 14.99,
              image: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&auto=format&fit=crop&q=60",
              rating: 4.6,
              sales: 567,
              images: [
                  "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60"
              ],
              sizes: ["Medium (24\")", "Large (36\")", "XL (48\")"],
              colors: ["Black", "White", "Red", "Blue"]
          },
          {
              id: 5,
              title: "Tribal Dragon Design",
              price: 19.99,
              image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
              rating: 4.5,
              sales: 234,
              images: [
                  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&auto=format&fit=crop&q=60"
              ],
              sizes: ["Small (12\")", "Medium (18\")", "Large (24\")"],
              colors: ["Black", "Silver", "Gold"]
          }
      ]
  },
  custom: {
      title: "Custom Designs",
      description: "Get your personalized sticker designs",
      items: [
          {
              id: 6,
              title: "Custom Name Calligraphy",
              price: 24.99,
              image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60",
              rating: 5.0,
              sales: 123,
              images: [
                  "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1626847037657-fd3622613ce9?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60"
              ],
              sizes: ["Small (6\")", "Medium (12\")", "Large (18\")"],
              colors: ["Custom Colors Available"]
          },
          {
              id: 7,
              title: "Personal Logo Design",
              price: 29.99,
              image: "https://images.unsplash.com/photo-1626847037657-fd3622613ce9?w=800&auto=format&fit=crop&q=60",
              rating: 4.9,
              sales: 89,
              images: [
                  "https://images.unsplash.com/photo-1626847037657-fd3622613ce9?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60"
              ],
              sizes: ["Small (4\")", "Medium (8\")", "Large (12\")"],
              colors: ["Custom Colors Available"]
          }
      ]
  }
};