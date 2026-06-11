"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AddProductPage() {
  const { user, loading } = useAuth();
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
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl text-blue-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);

    // Validation
    if (!formData.title.trim()) {
      setFormError("Product title is required");
      setIsSubmitting(false);
      return;
    }

    if (!formData.category) {
      setFormError("Please select a category");
      setIsSubmitting(false);
      return;
    }

    if (!formData.price || parseFloat(formData.price) < 0) {
      setFormError("Please enter a valid price");
      setIsSubmitting(false);
      return;
    }

    if (!formData.shortDescription.trim()) {
      setFormError("Short description is required");
      setIsSubmitting(false);
      return;
    }

    if (!formData.description.trim()) {
      setFormError("Full description is required");
      setIsSubmitting(false);
      return;
    }

    if (!formData.stock || parseInt(formData.stock) < 0) {
      setFormError("Please enter valid stock quantity");
      setIsSubmitting(false);
      return;
    }

    // TODO: Add your Firebase/API call logic here
    setSubmitted(true);
    setFormData({
      title: "",
      category: "",
      price: "",
      description: "",
      stock: "",
      shortDescription: "",
    });

    setTimeout(() => {
      setSubmitted(false);
      router.push("/manage-products");
    }, 2000);

    setIsSubmitting(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/manage-products"
            className="text-blue-600 hover:text-blue-700 font-semibold mb-4 inline-block"
          >
            ← Back to Products
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Add New Product</h1>
          <p className="text-gray-600 text-lg mt-2">
            Add a new product to your inventory
          </p>
        </div>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border-2 border-green-400 text-green-800 rounded-lg font-semibold text-lg">
            ✓ Product added successfully! Redirecting...
          </div>
        )}

        {formError && (
          <div className="mb-6 p-4 bg-red-100 border-2 border-red-400 text-red-800 rounded-lg font-semibold">
            ✗ {formError}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-lg shadow-md space-y-6"
        >
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Product Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Wireless Headphones"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home & Garden">Home & Garden</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          {/* Price & Stock */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Price ($) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Stock Quantity *
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="0"
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Short Description *
            </label>
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              maxLength="120"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Full Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition duration-300 text-lg"
            >
              {isSubmitting ? "Adding Product..." : "✓ Add Product"}
            </button>
            <Link
              href="/manage-products"
              className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 rounded-lg transition duration-300 text-lg text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}