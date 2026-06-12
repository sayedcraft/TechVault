"use client";

import { Truck, ShieldCheck, ArrowLeftRight } from "lucide-react";

export default function Feature() {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      description:
        "Free shipping on all orders over $50. Fast and reliable delivery directly to your doorstep without any hidden costs.",
      icon: Truck,
      bgClass: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      id: 2,
      title: "Secure Payment",
      description:
        "100% secure transactions integrated with Firebase authentication. Your privacy and data security are our top priorities.",
      icon: ShieldCheck,
      bgClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: 3,
      title: "Easy Returns",
      description:
        "Hassle-free 30-day return guarantee. No complicated paperwork or questions asked. Shop with absolute confidence.",
      icon: ArrowLeftRight,
      bgClass: "bg-purple-50 text-purple-600 border-purple-100",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 📢 সেকশন হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              TechVault?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-medium">
            We provide the ultimate e-commerce experience combined with
            exceptional service, speed, and reliability.
          </p>
        </div>

        {/* 🎴 ফিচার কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-500/10 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* কার্ডের ভেতর টপ-ডিজাইন এলিমেন্ট */}
                <div>
                  {/* 🌌 মডার্ন আইকন বক্স */}
                  <div
                    className={`inline-flex items-center justify-center p-4 rounded-xl border mb-6 transition-colors duration-300 ${item.bgClass}`}
                  >
                    <IconComponent className="w-8 h-8" strokeWidth={2} />
                  </div>

                  {/* 🔤 টাইটেল */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* 📝 ডেসক্রিপশন */}
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* 🔗 ডেকোরেটিভ বটম বার (Hover Effect) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
