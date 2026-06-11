"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            Welcome to ShopHub
          </h1>
          <p className="text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. Shop smarter, save
            more!
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/products"
              className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              🛍️ Shop Now
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white font-bold px-10 py-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 text-lg hover:shadow-xl"
            >
              ℹ️ Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Why Choose ShopHub?
          </h2>
          <p className="text-xl text-gray-600">
            We provide the best shopping experience with exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 focus-within:ring-4 focus-within:ring-blue-400 transition duration-300 cursor-pointer">
            <div className="text-6xl mb-6 inline-block p-4 bg-blue-50 rounded-lg">
              🚚
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Free Shipping
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Free shipping on all orders over $50. Fast and reliable delivery
              to your doorstep.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 focus-within:ring-4 focus-within:ring-blue-400 transition duration-300 cursor-pointer">
            <div className="text-6xl mb-6 inline-block p-4 bg-green-50 rounded-lg">
              💳
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Secure Payment
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              100% secure transactions with Firebase authentication. Your data
              is protected.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 focus-within:ring-4 focus-within:ring-blue-400 transition duration-300 cursor-pointer">
            <div className="text-6xl mb-6 inline-block p-4 bg-purple-50 rounded-lg">
              🔄
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Easy Returns
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              30-day return guarantee. No questions asked. Shop with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-xl text-gray-600">
              Browse through our carefully curated collections
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {["Electronics", "Fashion", "Home & Garden", "Sports"].map(
              (category) => (
                <Link
                  key={category}
                  href="/products"
                  className="group bg-white rounded-xl p-10 text-center shadow-md hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300 cursor-pointer"
                >
                  <div className="text-6xl mb-6 inline-block p-4 bg-gray-100 group-hover:bg-blue-100 rounded-lg transition duration-300">
                    {category === "Electronics" && "📱"}
                    {category === "Fashion" && "👔"}
                    {category === "Home & Garden" && "🏠"}
                    {category === "Sports" && "⚽"}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">
                    {category}
                  </h3>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied customers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              comment:
                "Amazing quality products and fast shipping! Highly recommend ShopHub.",
              rating: 5,
              initials: "SJ",
            },
            {
              name: "Mike Chen",
              comment:
                "Best shopping experience ever. The customer service is excellent!",
              rating: 5,
              initials: "MC",
            },
            {
              name: "Emma Wilson",
              comment:
                "Great prices and easy returns. Will definitely shop here again!",
              rating: 5,
              initials: "EW",
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 focus-within:ring-4 focus-within:ring-blue-400 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-lg flex items-center justify-center">
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed italic">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of happy customers and discover your next favorite
            product today.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 text-lg shadow-lg hover:shadow-xl"
          >
            ✨ Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}
