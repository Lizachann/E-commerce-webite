import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import Head from "next/head";

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
      <Head>
        {/* Add favicon here */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
