'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsDropdownOpen(false);
    router.push('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:text-blue-100 transition">
          ShopHub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-blue-100 transition font-medium">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-100 transition font-medium">
            Products
          </Link>
          <Link href="/about" className="hover:text-blue-100 transition font-medium">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-100 transition font-medium">
            Contact
          </Link>

          {/* User Account Section */}
          {loading ? (
            <div className="text-sm text-blue-100">Loading...</div>
          ) : user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-medium transition"
              >
                <span>👤</span>
                <span>{user.email.split('@')[0]}</span>
                <span className={`transition ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
                  {/* User Info */}
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-semibold">Logged in as:</p>
                    <p className="text-sm text-gray-600 truncate">{user.email}</p>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 transition text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      📊 My Dashboard
                    </Link>
                    <Link
                      href="/add-product"
                      className="block px-4 py-2 hover:bg-gray-100 transition text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      ➕ Add Product
                    </Link>
                    <Link
                      href="/manage-products"
                      className="block px-4 py-2 hover:bg-gray-100 transition text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      📦 Manage Products
                    </Link>
                    <hr className="my-2" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-red-50 transition text-sm text-red-600 font-medium"
                    >
                      🚪 Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                href="/auth/login"
                className="hover:text-blue-100 transition font-medium border border-white px-4 py-2 rounded"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-medium transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-4 space-y-3">
          <Link
            href="/"
            className="block hover:bg-blue-600 px-4 py-2 rounded transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block hover:bg-blue-600 px-4 py-2 rounded transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="block hover:bg-blue-600 px-4 py-2 rounded transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block hover:bg-blue-600 px-4 py-2 rounded transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {user ? (
            <>
              <hr className="my-2" />
              <Link
                href="/dashboard"
                className="block hover:bg-blue-600 px-4 py-2 rounded transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                📊 My Dashboard
              </Link>
              <Link
                href="/add-product"
                className="block hover:bg-blue-600 px-4 py-2 rounded transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ➕ Add Product
              </Link>
              <Link
                href="/manage-products"
                className="block hover:bg-blue-600 px-4 py-2 rounded transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                📦 Manage Products
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition font-medium"
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="block hover:bg-blue-600 px-4 py-2 rounded transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
