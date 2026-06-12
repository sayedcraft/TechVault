import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col h-full">
      <div className="bg-gray-50 h-48 flex items-center justify-center text-6xl border-b border-gray-100">
        {product.icon}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1 line-clamp-1">
          {product.name} 
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <span className="text-2xl font-black text-gray-900">${product.price}</span>
          <Link
            href={`/items/${product.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
}