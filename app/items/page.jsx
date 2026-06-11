'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { useProduct } from '@/context/ProductContext';
// import { useProduct } from '@/context/ProductContext';

export default function ItemsPage() {
  const { products } = useProduct();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(250);

  const categories = ['All', 'Electronics', 'Wearables', 'Accessories'];

  const filteredItems = products.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || item.category === category;
    const matchesPrice = item.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-black text-gray-900 text-center mb-10">Explore Our Items</h1>

        {/* Filters Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-10 grid md:grid-cols-3 gap-6 items-center">
          {/* Search */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Search Item</label>
            <input 
              type="text"
              placeholder="🔍 Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <div className="flex justify-between text-sm font-bold text-gray-700 mb-2">
              <span>Max Price</span>
              <span className="text-blue-600">${maxPrice}</span>
            </div>
            <input 
              type="range"
              min="10"
              max="250"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>

        {/* Grid View */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 font-semibold text-lg">
            ❌ No items matched your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}