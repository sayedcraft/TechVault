"use client";

import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      title: "Next.js Dynamic Routing",
      desc: "Built with the latest App Router architecture for lightning-fast navigation.",
      icon: "🚀",
    },
    {
      title: "Firebase Authentication",
      desc: "Secure email & password authentication to protect user data.",
      icon: "🔐",
    },
    {
      title: "Global State Management",
      desc: "Powered by Context API for real-time global shopping cart sync.",
      icon: "⚡",
    },
    {
      title: "Live Filtering System",
      desc: "Advanced search with dual-field live category and price filtering.",
      icon: "🎛️",
    },
    {
      title: "Protected Dashboards",
      desc: "Secure client routes for managing and uploading store items effortlessly.",
      icon: "💼",
    },
    {
      title: "Tailwind CSS Styling",
      desc: "Clean, responsive, and pixel-perfect design across all modern viewports.",
      icon: "🎨",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden py-20">
      {/* 🔮 ব্যাকগ্রাউন্ড গ্লো ইফেক্টস */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* 🎯 হেডার সেকশন */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              TechVault
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
            TechVault is a cutting-edge, ultra-modern e-commerce ecosystem.
            Engineered utilizing the power of Next.js App Router and secured
            with robust Firebase Authentication.
          </p>
        </div>

        {/* ⚡ ফিচার গ্রিড সেকশন */}
        <div className="mt-12">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center sm:text-left">
            Key Features Implemented
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors duration-300">
                  <span className="group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-950 mb-2 group-hover:text-blue-600 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed flex-1">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🤝 ফুটার বা কল-টু-অ্যাকশন ব্যানার */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 p-8 sm:p-12 rounded-3xl text-white text-center shadow-xl shadow-blue-950/10">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Want to see it in action?
          </h3>
          <p className="text-gray-300 max-w-lg mx-auto text-sm sm:text-base mb-6 font-medium">
            Experience the flawless combination of clean UI, solid
            context-driven management, and quick database fetches.
          </p>
          <Link
            href="/items"
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold px-6 py-3 rounded-xl transition shadow-md active:scale-[0.98]"
          >
            Start Exploring Products
          </Link>
        </div>
      </div>
    </div>
  );
}
