"use client";

import { useAuth } from "@/lib/auth-context";
import { useProduct } from "@/context/ProductContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AddProductPage() {
  const { user, loading } = useAuth();
  const { addProduct } = useProduct();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    stock: "",
    shortDescription: "",
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl text-blue-600 font-bold">Loading...</div>
      </div>
    );
  }

  if (!user) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);

    if (!formData.title.trim() || !formData.category || !formData.price || !formData.description.trim() || !formData.stock) {
      setFormError("Please fill in all required fields correctly.");
      setIsSubmitting(false);
      return;
    }

    const newProduct = {
      id: Date.now().toString(),
      name: formData.title,
      category: formData.category,
      price: parseFloat(formData.price),
      description: formData.description,
      inStock: parseInt(formData.stock) > 0,
      rating: 4.5,
      icon: "📦",
      specifications: [formData.shortDescription],
    };

    addProduct(newProduct);
    setSubmitted(true);
    setFormData({ title: "", category: "", price: "", description: "", stock: "", shortDescription: "" });

    setTimeout(() => {
      setSubmitted(false);
      router.push("/items");
    }, 2000);

    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/manage-products" className="text-blue-600 hover:text-blue-700 font-bold mb-4 inline-block">
            ← Back to Products
          </Link>
          <h1 className="text-4xl font-black text-gray-900">Add New Product</h1>
        </div>

        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl font-bold text-center">
            ✓ Product added successfully! Redirecting...
          </div>
        )}

        {formError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl font-bold">
            ✗ {formError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Product Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Wireless Headphones"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home & Garden">Home & Garden</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Price ($) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Stock Quantity *</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="0"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Short Description *</label>
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              maxLength="120"
              placeholder="A brief highlight of the product"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Detailed description..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-black py-3 rounded-xl transition-all shadow-lg"
          >
            {isSubmitting ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}