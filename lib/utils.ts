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
          image: "/145.JPG",
          rating: 4.8, // Changed rating
          sales: 450, // Changed sales
          badge: "Best Seller", // Changed badge
          images: ["/145.JPG", "/146.JPG", "/147.JPG"],
          sizes: ["Small (12\")", "Medium (18\")", "Large (24\")", "XL (36\")"], // Added a new size
          sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
          colors: ["Custom Colors Available", "Black", "Red"], 
          shape: ["square", "Circle", "rectangle"], 
          lamination: true,
        },
        {
          id: 8,
          title: "elf",
          price: 16.99, // Changed price
          image: "/146.JPG",
          rating: 4.5, // Changed rating
          sales: 250, // Changed sales
          badge: "Featured", // Changed badge
          images: ["/146.JPG", "/149.JPG", "/147.JPG"],
          sizes: ["Small (12\")", "Medium (18\")", "Large (24\")", "XL (36\")"], // Added a new size
          sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
          colors: ["Custom Colors Available", "Black", "Red"], 
          shape: ["square", "Circle", "rectangle"], 
          lamination: true,
        },
        {
          id: 9,
          title: "exclusive girl",
          price: 14.49, // Changed price
          image: "/147.JPG",
          rating: 4.6, // Changed rating
          sales: 150, // Changed sales
          badge: "Trending", // Changed badge
          images: ["/147.JPG", "/146.JPG", "/147.JPG"],
          sizes: ["Small (12\")", "Medium (18\")", "Large (24\")", "XL (36\")"], // Added a new size
          sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
          colors: ["Custom Colors Available", "Black", "Red"], 
          shape: ["square", "Circle", "rectangle"], 
          lamination: true,
        },
        {
          id: 10,
          title: "Nice ass!",
          price: 15.99, // Changed price
          image: "/148.JPG",
          rating: 4.7, // Kept the rating
          sales: 70, // Changed sales
          badge: "Popular", // Changed badge
          images: ["/148.JPG", "/146.JPG", "/147.JPG"],
          sizes: ["Small (12\")", "Medium (18\")", "Large (24\")", "XL (36\")"], // Added a new size
          sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
          colors: ["Custom Colors Available", "Black", "Red"], 
          shape: ["square", "Circle", "rectangle"], 
          lamination: true,
        },
        {
          id: 11,
          title: "kitty",
          price: 13.99, // Changed price
          image: "/149.JPG",
          rating: 4.8, // Changed rating
          sales: 190, // Changed sales
          badge: "Exclusive", // Changed badge
          images: ["/149.JPG", "/146.JPG", "/147.JPG"],
          sizes: ["Small (12\")", "Medium (18\")", "Large (24\")", "XL (36\")"], // Added a new size
          sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
          colors: ["Custom Colors Available", "Black", "Red"], 
          shape: ["square", "Circle", "rectangle"], 
          lamination: true,
        },
        {
          id: 12,
          title: "milo in green",
          price: 17.99, // Changed price
          image: "/150.JPG",
          rating: 4.9, // Changed rating
          sales: 1100, // Changed sales
          badge: "Hot Item", // Changed badge
          images: ["/150.JPG", "/146.JPG", "/147.JPG"],
          sizes: ["Small (12\")", "Medium (18\")", "Large (24\")", "XL (36\")"], // Added a new size
          sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
          colors: ["Custom Colors Available", "Black", "Red"], 
          shape: ["square", "Circle", "rectangle"], 
          lamination: true,
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
          sizes: ["Small (12\")", "Medium (18\")", "Large (24\")", "XL (36\")"], // Added a new size
          sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
          colors: ["Custom Colors Available", "Black", "Red"], 
          shape: ["square", "Circle", "rectangle"], 
          lamination: true,
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
          sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
          colors: ["Custom Colors Available", "Black", "Red"], 
          shape: ["square", "Circle", "rectangle"], 
          lamination: true,
        }
      ]
    },
    custom: {
      title: "Custom Designs",
      description: "Get your personalized sticker designs",
      items: [
        {
          id: 1,
          title: "Personal Logo Design",
          price: 0, // Kept the price
          image: "https://images.unsplash.com/photo-1626847037657-fd3622613ce9?w=800&auto=format&fit=crop&q=60",
          rating: 4.9, // Kept the rating
          sales: 100, // Changed sales
          images: [
            "https://images.unsplash.com/photo-1626847037657-fd3622613ce9?w=800&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60"
          ],
          sizes: ["Small (0-3cm)", "Medium (3-6cm)", "Large (6-10cm)"], 
          sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
          
          colors: ["Custom Colors Available", "Black", "Red"], 
          shape: ["square", "Circle", "rectangle"], 
          lamination: true, 
        }
      ]
    }
  };
  