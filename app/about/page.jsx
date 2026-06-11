export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About ShopHub</h1>
          <p className="text-xl text-blue-100">
            Your trusted online shopping destination
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ShopHub was founded with a mission to bring quality products
              directly to customers. We started as a small startup and have
              grown into a trusted e-commerce platform serving thousands of
              happy customers worldwide.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide high-quality products at affordable prices with
              exceptional customer service. We believe in making online shopping
              easy, secure, and enjoyable for everyone.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-2xl">✓</span>
                Wide selection of quality products
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-2xl">✓</span>
                Competitive pricing and regular discounts
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-2xl">✓</span>
                Fast and reliable shipping
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-2xl">✓</span>
                Secure payment options
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-2xl">✓</span>
                Easy returns and customer support
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              By The Numbers
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  10K+
                </div>
                <p className="text-gray-700 text-lg">Happy Customers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  50K+
                </div>
                <p className="text-gray-700 text-lg">Products Available</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <p className="text-gray-700 text-lg">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
