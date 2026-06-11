'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useProduct } from '@/context/ProductContext';

export default function AddItemPage() {
  const { user, loading } = useAuth();
  const { addProduct } = useProduct();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    shortDesc: '',
    description: '',
    price: '',
    category: 'Electronics',
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) return <div className="text-center py-20 font-bold">Loading...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newItem = {
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price) || 0,
      rating: 5.0,
      icon: "📦", // Default icon
      description: formData.description,
      inStock: true,
      specifications: [formData.shortDesc]
    };

    addProduct(newItem);
    alert('🎉 Success! Product added successfully.');
    router.push('/items');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-black text-gray-900 mb-6">➕ Add New Item</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Item Title</label>
            <input 
              type="text" required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Short Specification / Feature</label>
            <input 
              type="text" required
              value={formData.shortDesc}
              onChange={(e) => setFormData({...formData, shortDesc: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Description</label>
            <textarea 
              rows="4" required
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Price ($)</label>
              <input 
                type="number" step="0.01" required
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="Electronics">Electronics</option>
                <option value="Wearables">Wearables</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition">
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
}