// components/ProductGrid.jsx

import ProductCard from "./ProductCard";

const products = [
  {
    badge: "Limited",
    title: "Atelier Oversized Silk Shirt",
    brand: "Maison Silhouette",
    price: "$450",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
  },
  {
    title: "Signature White Cotton Dress Shirt",
    brand: "Atelier Essential",
    price: "$280",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },
  {
    badge: "New",
    title: "Relaxed Linen Resort Shirt",
    brand: "Riviera Club",
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
];

export default function ProductGrid() {
  return (
    <div className="flex-1">
      
      {/* Top */}
      <div className="mb-10 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[3px] text-gray-400">
          Showing 3 of 75 luxury shirts
        </span>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">
            Sort by:
          </span>

          <select className="bg-transparent font-semibold text-blue-600 outline-none">
            <option>Curated Popularity</option>
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-20 flex items-center justify-center gap-4">
        <button className="h-12 w-12 rounded-full border opacity-40">
          ←
        </button>

        <button className="h-12 w-12 rounded-full bg-blue-600 text-white font-bold">
          1
        </button>

        <button className="h-12 w-12 rounded-full hover:bg-gray-100">
          2
        </button>

        <button className="h-12 w-12 rounded-full hover:bg-gray-100">
          3
        </button>

        <span className="text-gray-400">...</span>

        <button className="h-12 w-12 rounded-full hover:bg-gray-100">
          8
        </button>

        <button className="h-12 w-12 rounded-full border hover:bg-blue-600 hover:text-white transition">
          →
        </button>
      </div>
    </div>
  );
}