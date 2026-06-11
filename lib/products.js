export const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 79.99,
    rating: 4.5,
    icon: "🎧",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers.",
    inStock: true,
    specifications: ["Bluetooth 5.0 connectivity", "30-hour battery life", "Active Noise Cancellation"],
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Wearables",
    price: 199.99,
    rating: 4.8,
    icon: "⌚",
    description: "Feature-rich smartwatch with advanced health tracking, fitness modes, and mobile notifications.",
    inStock: true,
    specifications: ["Heart rate monitor", "Sleep tracking", "GPS tracking", "Water resistant"],
  },
  {
    id: 3,
    name: "Laptop Backpack",
    category: "Accessories",
    price: 49.99,
    rating: 4.6,
    icon: "🎒",
    description: "Durable and stylish backpack with dedicated laptop compartment and multiple organization pockets.",
    inStock: true,
    specifications: ["Fits up to 17-inch laptop", "Water-resistant material", "USB charging port"],
  },
  {
    id: 4,
    name: "Phone Stand",
    category: "Accessories",
    price: 19.99,
    rating: 4.3,
    icon: "📱",
    description: "Adjustable phone stand perfect for desk use during video calls and media consumption.",
    inStock: false,
    specifications: ["Adjustable angle", "Non-slip pads", "Aluminum construction"],
  },
  {
    id: 5,
    name: "USB-C Cable",
    category: "Electronics",
    price: 14.99,
    rating: 4.7,
    icon: "🔌",
    description: "3-meter long durable USB-C cable with fast charging support and data transfer.",
    inStock: true,
    specifications: ["3 meters long", "Fast charging support", "Braided design"],
  },
  {
    id: 6,
    name: "Portable Charger",
    category: "Electronics",
    price: 34.99,
    rating: 4.9,
    icon: "🔋",
    description: "20000mAh portable power bank with dual USB ports and LCD display.",
    inStock: true,
    specifications: ["20000mAh capacity", "Dual USB ports", "LCD display"],
  }
];

export function getProductById(id) {
  return productsData.find(product => product.id === parseInt(id));
}

export function getRelatedProducts(currentId) {
  return productsData.filter(product => product.id !== parseInt(currentId)).slice(0, 3);
}