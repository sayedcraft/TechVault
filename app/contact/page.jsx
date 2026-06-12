"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 pt-20 pb-32 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg">
            We'd love to hear from you. Reach out to our team anytime.
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="max-w-6xl mx-auto px-4 -mt-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200 p-8 md:p-12 grid md:grid-cols-2 gap-12 border border-gray-100">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-10 font-medium">
              Have a question or feedback? Fill out the form and we'll get back
              to you as soon as possible.
            </p>

            <div className="space-y-6">
              {[
                { icon: "📧", title: "Email", value: "support@techvault.com" },
                { icon: "📞", title: "Phone", value: "+1 (555) 123-4567" },
                { icon: "📍", title: "Address", value: "123 Commerce Street, NY 10001" },
                { icon: "⏰", title: "Hours", value: "Mon-Fri: 9AM - 6PM" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl font-bold text-center">
                ✓ Message received! We'll be in touch.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
                    placeholder={`Enter your ${field}`}
                  />
                </div>
              ))}
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none placeholder-gray-400"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-black py-3 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-600/20"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}