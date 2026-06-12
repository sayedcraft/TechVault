'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-slate-950 overflow-hidden">
      {/* 🌌 ব্যাকগ্রাউন্ড মডার্ন গ্রেডিয়েন্ট এবং লাইট গ্লো */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-950" />
      
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        

        {/* 📢 হেডলাইন */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
          Ready to Start Shopping?
        </h2>

        {/* 📝 সাবটাইটেল */}
        <p className="text-base sm:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Join thousands of happy customers and discover your next favorite product today. Get exclusive deals on your first purchase!
        </p>

        {/* 🎯 মডার্ন বাটন এবং হোভার অ্যানিমেশন */}
        <div>
          <Link
            href="/register" // 💡 তোমার প্রজেক্টের ফোল্ডারের নাম অনুযায়ী /register বদলে /signup করা হলো
            className="group inline-flex items-center gap-2 bg-white text-blue-600 font-black px-10 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-0.5 text-base sm:text-lg shadow-xl shadow-blue-900/30"
          >
            Sign Up Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}