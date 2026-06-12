"use client";

import Link from "next/link";
import { Smartphone, Shirt, Home, Trophy } from "lucide-react";

export default function Categori() {
  const categories = [
    {
      name: "Electronics",
      icon: Smartphone,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    { name: "Fashion", icon: Shirt, color: "text-rose-600", bg: "bg-rose-50" },
    {
      name: "Home & Garden",
      icon: Home,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      name: "Sports",
      icon: Trophy,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* সেকশন হেডার */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Popular Categories
          </h2>
          <p className="text-lg text-gray-500">
            Browse through our carefully curated collections
          </p>
        </div>

        {/* ক্যাটাগরি গ্রিড */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href="/items"
                className="group flex flex-col items-center bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* আইকন কন্টেইনার */}
                <div
                  className={`mb-6 p-4 rounded-xl ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8" strokeWidth={2.5} />
                </div>

                {/* নাম */}
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
