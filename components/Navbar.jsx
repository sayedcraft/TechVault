"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // মোবাইল মেনুর জন্য স্টেট
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
          {user ? (
            <>
              <Link href="/dashboard" className="block font-bold text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
              <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="text-red-600 font-bold">Logout</button>
            </>
          ) : (
            <Link href="/login" className="block font-bold text-blue-600">Login / Register</Link>
          )}
        </div>
      )}
    </nav>
  );
}

// Sub-components for cleaner code
function UserMenu({ user, isOpen, setIsOpen, logout, router }) {
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-bold hover:bg-blue-100 transition border border-blue-200">
        👤 {user.email.split("@")[0]} 🔽
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
          <div className="px-4 py-2 text-xs text-gray-500 font-medium truncate">{user.email}</div>
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">📊 Dashboard</Link>
          <Link href="/items/manage" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">⚙️ Manage Products</Link>
          <button onClick={() => { logout(); setIsOpen(false); router.push("/"); }} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-bold border-t">🚪 Logout</button>
        </div>
      )}
    </div>
  );
}

function AuthButtons() {
  return (
    <div className="flex gap-4">
      <Link href="/login" className="text-gray-700 font-bold hover:text-blue-600">Login</Link>
      <Link href="/register" className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700">Register</Link>
    </div>
  );
}