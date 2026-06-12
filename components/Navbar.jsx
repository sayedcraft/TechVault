"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm backdrop-blur-md bg-white/90">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-black text-blue-600 tracking-tight"
        >
          TechVault
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/items" className="hover:text-blue-600 transition">
            Items
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Auth Condition */}
        <div className="relative">
          {user ? (
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-bold hover:bg-blue-100 transition border border-blue-200"
              >
                👤 {user.email.split("@")[0]} 🔽
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100 text-xs text-gray-500 font-medium truncate">
                    {user.email}
                  </div>
                  <Link
                    href="/items/add"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold"
                  >
                    ➕ Add Product
                  </Link>
                  <Link
                    href="/items/manage"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold"
                  >
                    ⚙️ Manage Products
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-bold border-t border-gray-100"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                href="/login"
                className="text-gray-700 font-bold px-4 py-2 hover:text-blue-600 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
