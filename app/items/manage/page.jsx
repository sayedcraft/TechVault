"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/lib/auth-context";
import { useProduct } from "@/context/ProductContext";

export default function ManageItemsPage() {
  const { user, loading: authLoading } = useAuth();
  const { products, deleteProduct } = useProduct();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  if (authLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl font-bold text-blue-600 animate-pulse">
          Verifying inventory access...
        </div>
      </div>
    );

  if (!user) return null;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 pt-20 pb-28 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-5xl font-black mb-3 tracking-tight">
              Inventory Management
            </h1>
            <p className="text-blue-100 text-lg">
              Control, review, and organize all registered tech products.
            </p>
          </div>
          <div>
            <Link
              href="/items/add"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-black px-6 py-3.5 rounded-xl shadow-lg hover:bg-blue-50 transition active:scale-[0.98]"
            >
              ➕ Add New Gadget
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Table (OVERLAP Layout) */}
      <section className="max-w-6xl mx-auto px-4 -mt-16">
        {products.length === 0 ? (
          /* 📥 Empty State - যদি কোনো প্রোডাক্ট না থাকে */
          <div className="bg-white rounded-3xl p-16 text-center shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="text-7xl mb-4 select-none">📦</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Your Vault is Empty
            </h3>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
              There are no products listed in your inventory right now.
            </p>
            <Link
              href="/items/add"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition"
            >
              Create First Product
            </Link>
          </div>
        ) : (
          /* 📊 Premium Product Data Table */
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/70 border-b border-gray-100 text-gray-500 font-bold text-xs uppercase tracking-wider">
                    <th className="p-6 w-24 text-center">Visual</th>
                    <th className="p-6">Product details</th>
                    <th className="p-6">Category</th>
                    <th className="p-6">Price</th>
                    <th className="p-6 text-center">Management Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-semibold text-gray-700">
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="hover:bg-blue-50/30 transition duration-200"
                    >
                      {/* Visual (Icon/Image Container) */}
                      <td className="p-6 text-center">
                        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-gray-200/30 mx-auto select-none">
                          {product.icon && product.icon.startsWith("http") ? (
                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                              <Image
                                src={product.icon}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            product.icon || "⚡"
                          )}
                        </div>
                      </td>

                      {/* Product Name */}
                      <td className="p-6">
                        <div className="font-extrabold text-gray-900 text-lg">
                          {product.name}
                        </div>
                      </td>

                      {/* Category Badge */}
                      <td className="p-6">
                        <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full font-extrabold border border-blue-100/50">
                          {product.category}
                        </span>
                      </td>

                      {/* Price tag */}
                      <td className="p-6 font-black text-gray-900 text-lg">
                        $
                        {typeof product.price === "number"
                          ? product.price.toFixed(2)
                          : product.price}
                      </td>

                      {/* Management Buttons */}
                      <td className="p-6">
                        <div className="flex justify-center gap-3">
                          <Link
                            href={`/items/${product.id}`} // 
                            className="bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white px-4 py-2.5 rounded-xl text-sm font-bold transition duration-200 shadow-sm"
                          >
                            👁️ View
                          </Link>
                          <button
                            type="button"
                            onClick={() => {
                              if (
                                confirm(
                                  `⚠️ Are you sure you want to delete "${product.name}"?`,
                                )
                              ) {
                                deleteProduct(product.id);
                              }
                            }}
                            className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2.5 rounded-xl text-sm font-bold transition duration-200 shadow-sm border border-red-100/50"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
