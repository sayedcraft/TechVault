"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ManageProductsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl text-blue-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const products = []; // TODO: Fetch from database

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Manage Products
            </h1>
            <p className="text-gray-600 text-lg mt-2">
              Manage your uploaded products
            </p>
          </div>
          <a
            href="/add-product"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            ➕ Add New Product
          </a>
        </div>

        {products.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              No Products Yet
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              You haven added any products yet.
            </p>
            <a
              href="/add-product"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Add Your First Product
            </a>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b-2 border-gray-300">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-800">
                    Product Name
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-800">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-800">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-800">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-center font-semibold text-gray-800">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>{/* TODO: Map products here */}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
