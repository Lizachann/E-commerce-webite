import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce Site",
  description: "A simple e-commerce website built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <CartProvider>
      <body>
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow transition-all duration-300">
       
      {children}
         </main>

        <Footer />
        </div>
        
      </body>
      </CartProvider> 
    </html>
  );
}
