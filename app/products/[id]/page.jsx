'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { getProductById, getRelatedProducts } from '@/lib/products';

export default function ProductDetailPage({ params }) {
  // params থেকে id নেওয়া হচ্ছে
  const product = getProductById(params.id);
  const [quantity, setQuantity] = useState(1);
  const relatedProducts = getRelatedProducts(params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Product Not Found</h1>
        <p className="text-gray-600 text-lg mb-6">The product you looking for doesn exist.</p>
        <Link
          href="/products"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
        >
          ← Back to Products
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
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition"
        >
          ← Back to Products
        </Link>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-96 flex items-center justify-center mb-6">
              <div className="text-9xl">{product.icon}</div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1 rounded-full mb-4">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold text-gray-900 mb-4">{product.title || product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(Math.floor(product.rating || 0))].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-3xl">⭐</span>
                ))}
              </div>
              <span className="text-lg font-bold text-gray-600">
                {product.rating} out of 5
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-gray-600 text-sm font-semibold mb-2">Price</p>
              <p className="text-5xl font-bold text-blue-600">${product.price}</p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold text-lg">
                  ✓ In Stock
                </div>
              ) : (
                <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-lg font-bold text-lg">
                  ✗ Out of Stock
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Quantity:</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
                > − </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-16 px-4 py-2 border border-gray-300 rounded-lg text-center font-bold"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold"
                > + </button>
              </div>
            </div>

            <button
              disabled={!product.inStock}
              className={`w-full py-4 rounded-lg font-bold text-lg text-white transition duration-300 ${
                product.inStock ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {product.inStock ? '🛒 Add to Cart' : '✗ Unavailable'}
            </button>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16 py-12 border-t border-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Specifications</h2>
          <ul className="space-y-3">
            {product.specifications?.map((spec, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="text-blue-600 text-2xl">✓</span>
                <span className="text-gray-700 text-lg">{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Related Products */}
        {relatedProducts?.length > 0 && (
          <div className="mt-16 py-12 border-t border-gray-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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