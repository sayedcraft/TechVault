'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useProduct } from '@/context/ProductContext';

export default function ManageItemsPage() {
  const { user, loading } = useAuth();
  const { products, deleteProduct } = useProduct();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) return <div className="text-center py-20 font-bold">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-gray-900 mb-8">⚙️ Manage Products</h1>
      
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold text-sm">
                <th className="p-5">Icon</th>
                <th className="p-5">Product Name</th>
                <th className="p-5">Category</th>
                <th className="p-5">Price</th>
                <th className="p-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition">
                  <td className="p-5 text-3xl">{product.icon}</td>
                  <td className="p-5 font-bold text-gray-900">{product.name}</td>
                  <td className="p-5">
                    <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-bold">
                      {product.category}
                    </span>
                  </td>
                  <td className="p-5 font-bold text-blue-600">${product.price}</td>
                  <td className="p-5">
                    <div className="flex justify-center gap-3">
                      <Link 
                        href={`/items/${product.id}`}
                        className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg text-sm font-bold transition"
                      >
                        View
                      </Link>
                      <button 
                        onClick={() => {
                          if(confirm('Are you sure you want to delete this item?')) {
                            deleteProduct(product.id);
                          }
                        }}
                        className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-bold transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}