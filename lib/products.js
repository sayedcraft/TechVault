export const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 79.99,
    rating: 4.5,
    icon: "🎧",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    inStock: true,
    specifications: ["Bluetooth 5.0", "30-hour battery life", "Active Noise Cancellation"],
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Wearables",
    price: 199.99,
    rating: 4.8,
    icon: "⌚",
    description: "Feature-rich smartwatch with advanced health tracking and GPS.",
    inStock: true,
    specifications: ["Heart rate monitor", "Sleep tracking", "GPS tracking"],
  },
  {
    id: 3,
    name: "Laptop Backpack",
    category: "Accessories",
    price: 49.99,
    rating: 4.6,
    icon: "🎒",
    description: "Durable and stylish backpack with dedicated laptop compartment.",
    inStock: true,
    specifications: ["Fits 17-inch laptop", "Water-resistant"],
  },
  {
    id: 4,
    name: "Phone Stand",
    category: "Accessories",
    price: 19.99,
    rating: 4.3,
    icon: "📱",
    description: "Adjustable phone stand perfect for desk use.",
    inStock: false,
    specifications: ["Adjustable angle", "Aluminum construction"],
  }
];

// আইডি দিয়ে প্রোডাক্ট খোঁজার ফাংশন
export function getProductById(id) {
  return productsData.find(product => product.id === parseInt(id));
}

// রিলেটেড প্রোডাক্ট খোঁজার ফাংশন
export function getRelatedProducts(currentId) {
  return productsData.filter(product => product.id !== parseInt(currentId)).slice(0, 3);
}