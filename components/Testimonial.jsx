"use client";

import { Star, Quote } from "lucide-react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      comment:
        "Amazing quality products and fast shipping! Highly recommend TechVault for online shopping.",
      rating: 5,
      initials: "SJ",
      role: "Verified Buyer",
    },
    {
      name: "Mike Chen",
      comment:
        "Best shopping experience ever. The customer service is excellent and super responsive!",
      rating: 5,
      initials: "MC",
      role: "Loyal Customer",
    },
    {
      name: "Emma Wilson",
      comment:
        "Great prices and easy returns. Will definitely shop here again for my family!",
      rating: 5,
      initials: "EW",
      role: "Verified Buyer",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-medium">
            Join thousands of satisfied customers worldwide who trust TechVault
            everyday.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-blue-50 transition-colors">
                <Quote className="w-10 h-10 transform rotate-180" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-base flex items-center justify-center shadow-sm shadow-blue-500/20">
                  {item.initials}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-xs text-blue-600 font-semibold tracking-wide">
                    {item.role}
                  </span>
                </div>
              </div>

              <div className="flex gap-0.5 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                {item.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
