export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-black text-gray-900 mb-6">About ShopHub</h1>
      <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
        ShopHub is a cutting-edge modern e-commerce application built utilizing Next.js App Router and Firebase Authentication.
      </p>
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-2xl text-white text-left shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Key Features Implemented:</h2>
        <ul className="space-y-2 font-medium opacity-90">
          <li>✓ Next.js 15 Dynamic Routing (App Router)</li>
          <li>✓ Complete Firebase Email & Password Authentication</li>
          <li>✓ Context API for Global Shopping State</li>
          <li>✓ Advanced Search & Dual-field Live Filtering system</li>
          <li>✓ Protected Client Dashboards for Adding/Managing Items</li>
        </ul>
      </div>
    </div>
  );
}