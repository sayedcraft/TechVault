"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 border-b border-gray-200 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-blue-600 tracking-tight">
          TechVault
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/items" className="hover:text-blue-600 transition">Items</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Auth & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block relative">
            {user ? (
              <UserMenu user={user} isOpen={isOpen} setIsOpen={setIsOpen} logout={logout} router={router} />
            ) : (
              <AuthButtons />
            )}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button 
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4 shadow-lg">
          <Link href="/" className="block font-bold text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/items" className="block font-bold text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Items</Link>
          <Link href="/about" className="block font-bold text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" className="block font-bold text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <hr />
          {user ? (
            <>
              <Link href="/dashboard" className="block font-bold text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>📊 Dashboard</Link>
              <Link href="/items/add" className="block font-bold text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>➕ Add Product</Link>
              <Link href="/items/manage" className="block font-bold text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>⚙️ Manage Products</Link>
              <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="text-red-600 font-bold block w-full text-left">🚪 Logout</button>
            </>
          ) : (
            <div className="space-y-4">
              <Link href="/login" className="block font-bold text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
              <Link href="/register" className="block bg-blue-600 text-white text-center py-2 rounded-lg font-bold" onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

// Sub-components
function UserMenu({ user, isOpen, setIsOpen, logout, router }) {
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-bold hover:bg-blue-100 transition border border-blue-200"
      >
        👤 {user.email.split("@")[0]} 🔽
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
          <div className="px-4 py-2 text-xs text-gray-500 font-medium truncate border-b border-gray-50">
            {user.email}
          </div>
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 font-semibold">
            📊 Dashboard
          </Link>
          {/* এই লিঙ্কটি ফিরিয়ে আনা হয়েছে */}
          <Link href="/items/add" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 font-semibold">
            ➕ Add Product
          </Link>
          <Link href="/items/manage" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 font-semibold">
            ⚙️ Manage Products
          </Link>
          <button 
            onClick={() => { logout(); setIsOpen(false); router.push("/"); }} 
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-bold border-t border-gray-50 mt-1"
          >
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
}

function AuthButtons() {
  return (
    <div className="flex gap-4">
      <Link href="/login" className="text-gray-700 font-bold hover:text-blue-600 transition">Login</Link>
      <Link href="/register" className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm">Register</Link>
    </div>
  );
}