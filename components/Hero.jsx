'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Ready to Start <span className="text-blue-400">Shopping?</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
          Join thousands of happy customers and discover your next favorite product today. Quality, speed, and trust in every click.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-700 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 text-center"
          >
             Sign Up Now
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto bg-blue-900/30 hover:bg-blue-900/50 text-white font-bold px-8 py-4 rounded-xl border border-blue-400/30 backdrop-blur-sm transition-all duration-200 text-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}