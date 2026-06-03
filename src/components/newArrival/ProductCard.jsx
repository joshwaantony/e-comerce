// components/ProductCard.jsx

"use client";

import { Plus } from "lucide-react";

export default function ProductCard({ item }) {
  return (
    <div className="group rounded-3xl bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Badge */}
      {item.badge && (
        <div className="absolute z-10 rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
          {item.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition group-hover:opacity-100">
          <button className="translate-y-4 rounded-full bg-white/90 px-8 py-3 text-sm font-semibold shadow-lg transition group-hover:translate-y-0 hover:bg-blue-600 hover:text-white">
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">
          {item.title}
        </h3>

        <p className="mt-2 text-gray-500">
          {item.brand}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            {item.price}
          </span>

          <button className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-blue-600 hover:text-white transition">
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}