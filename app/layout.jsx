import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/lib/auth-context";
import { ProductProvider } from "@/context/ProductContext"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShopHub - E-Commerce Store",
  description: "A modern e-commerce platform built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="bg-gray-50 h-full flex flex-col">
        <AuthProvider>
          <ProductProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  );
}