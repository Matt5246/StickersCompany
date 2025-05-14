import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sizeLimits: Record<string, { min: number; max: number }> = {
  Small: { min: 10, max: 30 },
  Medium: { min: 31, max: 60 },
  Large: { min: 61, max: 80 },
};

export const categoryData = {
  anime: {
    title: "Anime Stickers",
    description: "Express your love for anime with our exclusive collection",
    items: [
      {
        id: 9,
        title: "Cat Sticker",
        price: 14.49, // Changed price
        image: "/cat.png",
        rating: 4.6, // Changed rating
        sales: 150, // Changed sales
        badge: "Trending", // Changed badge
        images: ["/cat.png", "/cat.png", "/cat.png"],
        sizes: ["Small (12\")", "Medium (18\")", "Large (24\")", "XL (36\")"], // Added a new size
        sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
        colors: ["Custom Colors Available", "Black", "Red"],
        shape: ["square", "Circle", "rectangle"],
        lamination: true,
      },
      {
        id: 9,
        title: "Yuki",
        price: 14.49, // Changed price
        image: "/Yuki1.png",
        rating: 4.6, // Changed rating
        sales: 150, // Changed sales
        badge: "Trending", // Changed badge
        images: ["/Yuki1.png", "/Yuki1.png", "/cat.png"],
        sizes: ["Small (12\")", "Medium (18\")", "Large (24\")", "XL (36\")"], // Added a new size
        sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
        colors: ["Custom Colors Available", "Black", "Red"],
        shape: ["square", "Circle", "rectangle"],
        lamination: true,
      },
      {
        id: 9,
        title: "Jinx",
        price: 14.49, // Changed price
        image: "/Jinx.png",
        rating: 4.6, // Changed rating
        sales: 150, // Changed sales
        badge: "Trending", // Changed badge
        images: ["/Jinx.png", "/cat.png", "/cat.png"],
        sizes: ["Small (12\")", "Medium (18\")", "Large (24\")", "XL (36\")"], // Added a new size
        sizePrice: [[3, 1.90, 1.20, 0.3], [3], 10], //0-9 10-39 40-infinty
        colors: ["Custom Colors Available", "Black", "Red"],
        shape: ["square", "Circle", "rectangle"],
        lamination: true,
      },
      {
        id: 9,
        title: "Wale",
        price: 14.49, // Changed price
        image: "/Wale.png",
        rating: 4.6, // Changed rating
        sales: 150, // Changed sales
        badge: "Trending", // Changed badge
        images: ["/Wale.png", "/cat.png", "/cat.png"],
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

export const productData = [
  {
    "Price ID": "price_1R95cjQtoFX6E6hK5m0aldr5",
    "Product ID": "prod_S3C0duzieiuDYY",
    "Product Name": "Duża naklejka",
    "Created (UTC)": "2025-04-01 14:17",
    "Amount": "6.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3C0duzieiuDYY",
    "Name": "Duża naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:17",
    "Description": "Naklejka do 8cm, 25szt."
  },
  {
    "Price ID": "price_1R95cGQtoFX6E6hKamtYANf0",
    "Product ID": "prod_S3C0Q72lkTRaUT",
    "Product Name": "Duża naklejka",
    "Created (UTC)": "2025-04-01 14:16",
    "Amount": "7.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3C0Q72lkTRaUT",
    "Name": "Duża naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:16",
    "Description": "Naklejka do 8cm, 10szt."
  },
  {
    "Price ID": "price_1R95bmQtoFX6E6hKlPVj4yRL",
    "Product ID": "prod_S3BzBUZWaTS2p3",
    "Product Name": "Duża naklejka",
    "Created (UTC)": "2025-04-01 14:16",
    "Amount": "8.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BzBUZWaTS2p3",
    "Name": "Duża naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:16",
    "Description": "Naklejka do 8cm, 5szt."
  },
  {
    "Price ID": "price_1R95avQtoFX6E6hKI1N7a41y",
    "Product ID": "prod_S3ByvsyiFyLXrc",
    "Product Name": "Średnia naklejka",
    "Created (UTC)": "2025-04-01 14:15",
    "Amount": "2.70",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3ByvsyiFyLXrc",
    "Name": "Średnia naklajka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:15",
    "Description": "Naklejka do 6cm, 50szt."
  },
  {
    "Price ID": "price_1R95a4QtoFX6E6hKw3ceEdus",
    "Product ID": "prod_S3By3fc8zZyTTo",
    "Product Name": "Średnia naklejka",
    "Created (UTC)": "2025-04-01 14:14",
    "Amount": "3.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3By3fc8zZyTTo",
    "Name": "Średnia naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:14",
    "Description": "Naklejka do 6cm, 25szt."
  },
  {
    "Price ID": "price_1R95Z7QtoFX6E6hKOczI0Lny",
    "Product ID": "prod_S3BxSrd91h0AOa",
    "Product Name": "Średnia naklejka",
    "Created (UTC)": "2025-04-01 14:13",
    "Amount": "3.50",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BxSrd91h0AOa",
    "Name": "Średnia naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:13",
    "Description": "Naklejka do 6cm, 10szt."
  },
  {
    "Price ID": "price_1R95YRQtoFX6E6hKIzsODDL4",
    "Product ID": "prod_S3BwJ2gxW94VJF",
    "Product Name": "Średnia naklejka",
    "Created (UTC)": "2025-04-01 14:12",
    "Amount": "3.70",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BwJ2gxW94VJF",
    "Name": "Średnia naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:12",
    "Description": "Naklejka do 6cm, 5szt."
  },
  {
    "Price ID": "price_1R95PsQtoFX6E6hKEY9pp9K2",
    "Product ID": "prod_S3BnzaUYBmseZe",
    "Product Name": "Mała naklejka",
    "Created (UTC)": "2025-04-01 14:03",
    "Amount": "1.20",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BnzaUYBmseZe",
    "Name": "Mała naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:03",
    "Description": "Naklejka do 3cm, 100szt."
  },
  {
    "Price ID": "price_1R95POQtoFX6E6hKbetBNmh1",
    "Product ID": "prod_S3Bm6PVTWf5DjG",
    "Product Name": "Mała naklejka",
    "Created (UTC)": "2025-04-01 14:03",
    "Amount": "1.40",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3Bm6PVTWf5DjG",
    "Name": "Mała naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:03",
    "Description": "Naklejka do 3cm, 50szt."
  },
  {
    "Price ID": "price_1R95OwQtoFX6E6hKrPAYa055",
    "Product ID": "prod_S3BmqkqTOswmBR",
    "Product Name": "Mała naklejka",
    "Created (UTC)": "2025-04-01 14:02",
    "Amount": "2.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BmqkqTOswmBR",
    "Name": "Mała naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:02",
    "Description": "Naklejka do 3cm, 25szt."
  },
  {
    "Price ID": "price_1R95O0QtoFX6E6hKzgK94h7d",
    "Product ID": "prod_S3BlWpks19D2Wm",
    "Product Name": "Mała naklejka",
    "Created (UTC)": "2025-04-01 14:01",
    "Amount": "2.50",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BlWpks19D2Wm",
    "Name": "Mała naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:01",
    "Description": "Naklejka do 3cm, 10szt."
  },
  {
    "Price ID": "price_1R95IaQtoFX6E6hKhpwLkS0k",
    "Product ID": "prod_S3BflBzWW5Ewju",
    "Product Name": "Mała naklejka",
    "Created (UTC)": "2025-04-01 13:56",
    "Amount": "3.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BflBzWW5Ewju",
    "Name": "Mała naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 13:56",
    "Description": "Naklejka do 3cm, 5szt."
  }
]
