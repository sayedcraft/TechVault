'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      {/* 🖼️ ইমেজ কন্টেইনার (হাইট এবং অবজেক্ট-ফিট পারফেক্ট করা হয়েছে) */}
      <div className="relative bg-gray-50 h-52 w-full overflow-hidden border-b border-gray-100">
        <Image 
          src={product.icon} 
          alt={product.name} 
          fill // 💡 Next.js-এর এরর দূর করতে এবং ইমেজ রেসপন্সিভ করতে fill ব্যবহার করা হলো
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // পারফরম্যান্স অপটিমাইজেশনের জন্য
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={product.id <= 3} // প্রথম ৩টি ইমেজের জন্য দ্রুত লোডিং নিশ্চিত করবে
        />
        
        {/* 🛑 স্টক আউট ব্যাজ */}
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-red-500/90 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md backdrop-blur-xs z-10">
            Out of Stock
          </div>
        )}
      </div>

      {/* 📝 প্রোডাক্ট ডিটেইলস এরিয়া */}
      <div className="p-5 flex-1 flex flex-col">
        {/* ক্যাটাগরি */}
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          {product.category}
        </span>
        
        {/* প্রোডাক্ট নেম */}
        <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.name} 
        </h3>
        
        {/* ডেসক্রিপশন */}
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1 font-medium leading-relaxed">
          {product.description}
        </p>
        
        {/* দাম এবং বাটন */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <span className="text-xl font-black text-gray-900">${product.price}</span>
          <Link
            href={`/products/${product.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-xs"
          >
            Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}