import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 focus-within:ring-4 focus-within:ring-blue-400 transition duration-300 overflow-hidden cursor-pointer h-full">
        {/* Image Section */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-50 transition duration-300">
          <div className="text-6xl">{product.icon}</div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Category Badge */}
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">
                  ⭐
                </span>
              ))}
            </div>
            <span className="text-gray-600 text-sm font-semibold">
              {product.rating}
            </span>
          </div>

          {/* Price and Stock */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
            {product.inStock ? (
              <span className="text-green-600 text-xs font-bold px-2 py-1 bg-green-50 rounded">
                ✓ In Stock
              </span>
            ) : (
              <span className="text-red-600 text-xs font-bold px-2 py-1 bg-red-50 rounded">
                Out of Stock
              </span>
            )}
          </div>

          {/* View Details Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            View Details →
          </button>
        </div>
      </div>
    </Link>
  );
}
