import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stickerki',
  description: 'Premium vinyl car stickers featuring anime designs, classic patterns, and custom creations. Make your vehicle truly unique.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={inter.className}><Toaster /><CartProvider>
        {children}
      </CartProvider></body>
    </html>
  );
}