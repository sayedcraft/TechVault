'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // 💡 Image কম্পোনেন্ট ইম্পোর্ট করা হলো
import ProductCard from '@/components/ProductCard';
import { getProductById, getRelatedProducts } from '@/lib/products';

export default function ProductDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise); 
  const product = getProductById(params.id);
  const [quantity, setQuantity] = useState(1);
  const relatedProducts = getRelatedProducts(params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Product Not Found</h1>
        <p className="text-gray-600 text-lg mb-6">The product you are looking for doesn't exist.</p>
        <Link
          href="/products"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-md"
        >
          &larr; Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          href="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold text-base transition gap-1"
        >
          &larr; Back to Products
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* 🖼️ ১. ইমেজ সেকশন (Unsplash Image এর জন্য ফিক্স করা হয়েছে) */}
          <div className="relative bg-gray-50 rounded-2xl h-[450px] w-full overflow-hidden border border-gray-100 shadow-xs">
            <Image 
              src={product.icon} 
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">{product.name}</h1>

            {/* ⭐ ২. রেটিং সিস্টেম পলিশড করা হয়েছে (টোটাল ৫টি স্টার দেখাবে) */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-0.5 text-xl">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={i < Math.floor(product.rating || 0) ? "text-amber-400" : "text-gray-200"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm font-bold text-gray-500">({product.rating} / 5.0)</span>
            </div>

            <div className="mb-6 bg-gray-50 p-4 rounded-2xl border border-gray-100 inline-block min-w-[200px]">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Price</p>
              <p className="text-4xl font-black text-blue-600">${product.price}</p>
            </div>

            <div className="mb-6">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-bold ${
                product.inStock ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </span>
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-8 font-medium">{product.description}</p>

            {/* Quantity */}
            {product.inStock && (
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-3">Quantity:</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 active:scale-95 rounded-xl font-bold flex items-center justify-center transition"
                  > − </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-14 h-10 border border-gray-200 rounded-xl text-center font-bold text-gray-800 bg-white focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 active:scale-95 rounded-xl font-bold flex items-center justify-center transition"
                  > + </button>
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              disabled={!product.inStock}
              className={`w-full py-4 rounded-xl font-black text-lg text-white transition-all duration-200 shadow-lg ${
                product.inStock 
                  ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/10 active:scale-[0.99]' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
              }`}
            >
              {product.inStock ? '🛒 Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>

        {/* Specs */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Specifications</h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 max-w-2xl">
            <ul className="space-y-4">
              {product.specifications?.map((spec, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-600 text-base font-semibold">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts?.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}