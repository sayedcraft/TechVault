export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-white font-black text-xl mb-4">ShopHub</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Discover amazing items at unbeatable prices. Your single destination for smarter shopping.
          </p>
        </div>
        <div className="flex flex-col gap-2 font-semibold">
          <h4 className="text-white font-bold mb-2">Quick Links</h4>
          <a href="/items" className="hover:text-white transition">All Items</a>
          <a href="/about" className="hover:text-white transition">About Us</a>
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Copyright</h4>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ShopHub Inc. All rights reserved. Built for Revenio Assessment.
          </p>
        </div>
      </div>
    </footer>
  );
}