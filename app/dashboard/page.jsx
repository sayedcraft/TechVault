'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
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

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold">Welcome, {user?.email?.split('@')[0]}! 👋</h1>
          <p className="text-blue-100 mt-2">Manage your account and orders from here</p>
        </div>

        {/* Account Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border-2 border-blue-600 rounded-lg p-6 shadow-sm">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Orders</h3>
            <p className="text-3xl font-bold text-blue-600">0</p>
            <p className="text-gray-600 text-sm mt-2">Total orders placed</p>
          </div>

          <div className="bg-white border-2 border-blue-600 rounded-lg p-6 shadow-sm">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Spent</h3>
            <p className="text-3xl font-bold text-blue-600">$0.00</p>
            <p className="text-gray-600 text-sm mt-2">Amount spent</p>
          </div>

          <div className="bg-white border-2 border-blue-600 rounded-lg p-6 shadow-sm">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cart Items</h3>
            <p className="text-3xl font-bold text-blue-600">0</p>
            <p className="text-gray-600 text-sm mt-2">Items in cart</p>
          </div>
        </div>

        {/* Account Information */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Information</h2>

          <div className="space-y-4">
            <div className="pb-4 border-b border-gray-200">
              <label className="block text-gray-600 font-semibold mb-2">Email Address</label>
              <p className="text-gray-800 text-lg">{user?.email}</p>
            </div>

            <div className="pb-4 border-b border-gray-200">
              <label className="block text-gray-600 font-semibold mb-2">Account Status</label>
              <p className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded font-semibold">
                ✓ Active
              </p>
            </div>

            <div className="pb-4">
              <label className="block text-gray-600 font-semibold mb-2">Member Since</label>
              <p className="text-gray-800 text-lg">
                {user?.metadata?.creationTime
                  ? new Date(user.metadata.creationTime).toLocaleDateString()
                  : 'Today'}
              </p>
            </div>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Orders</h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="text-5xl mb-4">📭</div>
            <p className="text-gray-600 text-lg">No orders yet. Start shopping!</p>
            <a
              href="/products"
              className="inline-block mt-4 bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}