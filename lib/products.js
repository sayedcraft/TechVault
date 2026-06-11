export const productsData = [
  {
    id: 1,
    title: "Wireless Headphones",
    category: "Electronics",
    price: 79.99,
    rating: 4.5,
    icon: "🎧",
    image: "🎧",
    shortDescription:
      "High-quality wireless headphones with noise cancellation",
    description:
      "Experience premium sound quality with our wireless headphones featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design. Perfect for music lovers and professionals.",
    specifications: [
      "Bluetooth 5.0 connectivity",
      "30-hour battery life",
      "Active Noise Cancellation",
      "Foldable design",
      "Built-in microphone",
    ],
    inStock: true,
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "Smart Watch",
    category: "Wearables",
    price: 199.99,
    rating: 4.8,
    icon: "⌚",
    image: "⌚",
    shortDescription: "Feature-rich smartwatch with health tracking",
    description:
      "Advanced smartwatch with comprehensive health monitoring, fitness modes, and seamless mobile notifications. Track your daily activities and stay connected with style.",
    specifications: [
      "Heart rate monitor",
      "Sleep tracking",
      "GPS tracking",
      "7-day battery life",
      "Water resistant",
    ],
    inStock: true,
    date: "2024-01-10",
  },
  {
    id: 3,
    title: "Laptop Backpack",
    category: "Accessories",
    price: 49.99,
    rating: 4.6,
    icon: "🎒",
    image: "🎒",
    shortDescription: "Durable backpack with laptop compartment",
    description:
      "Stylish and practical backpack designed for professionals. Features dedicated laptop compartment, multiple pockets, and water-resistant material.",
    specifications: [
      "Fits up to 17-inch laptop",
      "Water-resistant material",
      "Multiple compartments",
      "USB charging port",
      "Ergonomic design",
    ],
    inStock: true,
    date: "2024-01-05",
  },
  {
    id: 4,
    title: "Phone Stand",
    category: "Accessories",
    price: 19.99,
    rating: 4.3,
    icon: "📱",
    image: "📱",
    shortDescription: "Adjustable phone stand for desk",
    description:
      "Universal phone stand perfect for desk use during video calls and media consumption. Adjustable angle for optimal viewing.",
    specifications: [
      "Adjustable angle",
      "Non-slip pads",
      "Universal compatibility",
      "Compact design",
      "Aluminum construction",
    ],
    inStock: false,
    date: "2023-12-28",
  },
  {
    id: 5,
    title: "USB-C Cable",
    category: "Electronics",
    price: 14.99,
    rating: 4.7,
    icon: "🔌",
    image: "🔌",
    shortDescription: "3m long durable USB-C charging cable",
    description:
      "High-quality USB-C cable with fast charging and data transfer capabilities. Braided design ensures durability and longevity.",
    specifications: [
      "3 meters long",
      "Fast charging support",
      "Data transfer capable",
      "Braided design",
      "Durable connector",
    ],
    inStock: true,
    date: "2024-01-12",
  },
  {
    id: 6,
    title: "Portable Charger",
    category: "Electronics",
    price: 34.99,
    rating: 4.9,
    icon: "🔋",
    image: "🔋",
    shortDescription: "20000mAh portable power bank",
    description:
      "Reliable power bank with massive 20000mAh capacity. Dual USB ports allow charging multiple devices simultaneously.",
    specifications: [
      "20000mAh capacity",
      "Dual USB ports",
      "LCD display",
      "Fast charging",
      "Compact design",
    ],
    inStock: true,
    date: "2024-01-08",
  },
];

export const getProductById = (id) => {
  return productsData.find((product) => product.id === parseInt(id));
};

export const getRelatedProducts = (id, limit = 3) => {
  const product = getProductById(id);
  if (!product) return [];
  return productsData
    .filter((p) => p.category === product.category && p.id !== id)
    .slice(0, limit);
};
