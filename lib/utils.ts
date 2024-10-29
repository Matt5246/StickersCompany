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
          id: 7,
          title: "pray pose",
          price: 12.99, // Changed price
          image: "/145.jpg",
          rating: 4.8, // Changed rating
          sales: 450, // Changed sales
          badge: "Best Seller", // Changed badge
          images: ["/145.jpg", "/146.jpg", "/147.jpg"],
          sizes: ["Small (5\")", "Medium (8\")", "Large (12\")"],
          colors: ["Purple", "White", "Silver", "Gold"] // Added a new color
        },
        {
          id: 8,
          title: "elf",
          price: 16.99, // Changed price
          image: "/146.jpg",
          rating: 4.5, // Changed rating
          sales: 250, // Changed sales
          badge: "Featured", // Changed badge
          images: ["/146.jpg", "/149.jpg", "/147.jpg"],
          sizes: ["Medium (8\")", "Large (12\")", "XL (16\")"], // Added a new size
          colors: ["Green", "White", "Brown", "Blue"] // Added a new color
        },
        {
          id: 9,
          title: "exclusive girl",
          price: 14.49, // Changed price
          image: "/147.jpg",
          rating: 4.6, // Changed rating
          sales: 150, // Changed sales
          badge: "Trending", // Changed badge
          images: ["/147.jpg", "/146.jpg", "/147.jpg"],
          sizes: ["Small (5\")", "Medium (8\")", "Large (12\")"],
          colors: ["Pink", "Blue", "Black", "Yellow"] // Added a new color
        },
        {
          id: 10,
          title: "Nice ass!",
          price: 15.99, // Changed price
          image: "/148.jpg",
          rating: 4.7, // Kept the rating
          sales: 70, // Changed sales
          badge: "Popular", // Changed badge
          images: ["/148.jpg", "/146.jpg", "/147.jpg"],
          sizes: ["Small (5\")", "Medium (8\")", "Large (12\")"],
          colors: ["Red", "White", "Black", "Purple"] // Added a new color
        },
        {
          id: 11,
          title: "kitty",
          price: 13.99, // Changed price
          image: "/149.jpg",
          rating: 4.8, // Changed rating
          sales: 190, // Changed sales
          badge: "Exclusive", // Changed badge
          images: ["/149.jpg", "/146.jpg", "/147.jpg"],
          sizes: ["Small (5\")", "Medium (8\")", "Large (12\")"],
          colors: ["Gray", "White", "Black", "Pink"] // Added a new color
        },
        {
          id: 12,
          title: "milo in green",
          price: 17.99, // Changed price
          image: "/150.jpg",
          rating: 4.9, // Changed rating
          sales: 1100, // Changed sales
          badge: "Hot Item", // Changed badge
          images: ["/150.jpg", "/146.jpg", "/147.jpg"],
          sizes: ["Small (5\")", "Medium (8\")", "Large (12\")", "XL (16\")"], // Added a new size
          colors: ["Green", "Yellow", "Black", "Red"] // Added a new color
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
          price: 15.99, // Changed price
          image: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&auto=format&fit=crop&q=60",
          rating: 4.4, // Changed rating
          sales: 600, // Changed sales
          images: [
            "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60"
          ],
          sizes: ["Medium (24\")", "Large (36\")", "XL (48\")"],
          colors: ["Black", "White", "Red", "Blue", "Green"] // Added a new color
        },
        {
          id: 5,
          title: "Tribal Dragon Design",
          price: 19.49, // Changed price
          image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
          rating: 4.6, // Changed rating
          sales: 250, // Changed sales
          images: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?w=800&auto=format&fit=crop&q=60"
          ],
          sizes: ["Small (12\")", "Medium (18\")", "Large (24\")", "XL (36\")"], // Added a new size
          colors: ["Black", "Silver", "Gold", "Copper"] // Added a new color
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
          price: 24.99, // Kept the price
          image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60",
          rating: 5.0, // Kept the rating
          sales: 130, // Kept the sales
          images: [
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1626847037657-fd3622613ce9?w=800&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60"
          ],
          sizes: ["Small (6\")", "Medium (12\")", "Large (18\")"],
          colors: ["Custom Colors Available", "Gold", "Silver"] // Added a new color
        },
        {
          id: 7,
          title: "Personal Logo Design",
          price: 29.99, // Kept the price
          image: "https://images.unsplash.com/photo-1626847037657-fd3622613ce9?w=800&auto=format&fit=crop&q=60",
          rating: 4.9, // Kept the rating
          sales: 100, // Changed sales
          images: [
            "https://images.unsplash.com/photo-1626847037657-fd3622613ce9?w=800&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60"
          ],
          sizes: ["Small (4\")", "Medium (8\")", "Large (12\")", "XL (16\")"], // Added a new size
          colors: ["Custom Colors Available", "Black", "Red"] // Added a new color
        }
      ]
    }
  };
  