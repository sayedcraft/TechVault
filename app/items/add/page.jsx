'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { useProduct } from '@/context/ProductContext';
import { productsData } from '@/lib/products'; // ক্যাটাগরির জন্য ইম্পোর্ট

export default function AddItemPage() {
  const { user, loading: authLoading } = useAuth();
  const { addProduct } = useProduct();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    shortDesc: '',
    description: '',
    price: '',
    category: '', // ডিফল্ট প্রথম ক্যাটাগরি সেট হবে
    icon: '⚡', // ডিফল্ট আইকন সেট করা হলো
  });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🛡️ ডায়নামিকভাবে ক্যাটাগরি লিস্ট জেনারেট
  const categories = [...new Set(productsData.map((p) => p.category))];

  useEffect(() => {
    // ডিফল্ট ক্যাটাগরি সেট করা
    if (categories.length > 0 && !formData.category) {
      setFormData((prev) => ({ ...prev, category: categories[0] }));
    }

    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router, categories, formData.category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);

    // 📋 ভ্যালিডেশন চেক
    if (!formData.name.trim()) {
      setFormError("Product title is required");
      setIsSubmitting(false);
      return;
    }

    const priceNum = parseFloat(formData.price);
    if (!formData.price || isNaN(priceNum) || priceNum < 0) {
      setFormError("Please enter a valid positive price");
      setIsSubmitting(false);
      return;
    }

    if (!formData.shortDesc.trim()) {
      setFormError("Short specification is required");
      setIsSubmitting(false);
      return;
    }

    // 📦 গ্যাজেট আইটেম তৈরি
    const newItem = {
      id: Date.now(), // ডায়নামিক আইডি
      name: formData.name.trim(),
      category: formData.category,
      price: priceNum,
      rating: 5.0, // নতুন গ্যাজেটের জন্য ৫ স্টার ডিফল্ট
      icon: formData.icon.trim() || "⚡", // ইউজারের দেওয়া ইমোজি আইকন
      description: formData.description.trim(),
      inStock: true,
      specifications: [formData.shortDesc.trim()],
    };

    try {
      addProduct(newItem);
      setSubmitted(true);
      setFormData({ name: '', shortDesc: '', description: '', price: '', category: categories[0], icon: '⚡' });

      setTimeout(() => {
        setSubmitted(false);
        router.push('/items');
      }, 2000);
    } catch (error) {
      setFormError("Failed to add product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🛡️ অথেন্টিকেশন লোডিং চেক
  if (authLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-2xl font-bold text-blue-600 animate-pulse">Checking credentials...</div>
    </div>
  );

  // 🛑 ইউজার না থাকলে কিছু রেন্ডার করবে না
  if (!user) return null;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 pt-20 pb-28 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-4">Add New Gadget</h1>
          <p className="text-blue-100 text-lg">Add latest tech gear to the TechVault inventory.</p>
        </div>
      </section>

      {/* Main Content Card (OVERLAP) */}
      <section className="max-w-3xl mx-auto px-4 -mt-16">
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100/50">
          
          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl font-bold text-center animate-fade-in">
              ✓ Success! New gadget added to inventory. Redirecting...
            </div>
          )}

          {formError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl font-bold text-center animate-shake">
              ✗ {formError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Title & Icon Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-3">
                <label className="block text-sm font-bold text-gray-700 mb-2">Gadget Title</label>
                <input 
                  type="text" required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Mechanical Keyboard"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Emoji Icon</label>
                <input 
                  type="text" required
                  maxLength="2"
                  value={formData.icon}
                  onChange={(e) => setFormData({...formData, icon: e.target.value})}
                  placeholder="⚡"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                />
              </div>
            </div>

            {/* Short Spec */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Short Specification</label>
              <input 
                type="text" required
                value={formData.shortDesc}
                onChange={(e) => setFormData({...formData, shortDesc: e.target.value})}
                placeholder="e.g. RGB Backlit, Mechanical Switches"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
              />
            </div>

            {/* Price & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Price ($)</label>
                <input 
                  type="number" step="0.01" required
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  placeholder="0.00"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition bg-no-repeat bg-right"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Full Description */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Description</label>
              <textarea 
                rows="5" required
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Tell users more about this awesome gadget..."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full text-white font-black py-4 rounded-xl shadow-lg transition active:scale-[0.98] 
                ${isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30'}`}
            >
              {isSubmitting ? "🚀 Adding Gadget..." : "➕ Add to Inventory"}
            </button>
          
          </form>
        </div>
      </section>
    </div>
  );
}