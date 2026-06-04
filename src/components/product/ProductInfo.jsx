// components/product/ProductInfo.jsx

"use client";

import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";

export default function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-8">
      
      {/* Top */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em]">
            {product.brand}
          </span>

          <div className="flex items-center gap-1 text-gray-500">
            <Star
              size={16}
              fill="currentColor"
              className="text-yellow-400"
            />

            <span className="text-sm">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-[#111] leading-tight">
          {product.title}
        </h1>

        <p className="text-3xl font-bold text-blue-600 mt-4">
          {product.price}
        </p>
      </div>

      {/* Sizes */}
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
          Select Size
        </p>

        <div className="flex gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 rounded-full border transition ${
                selectedSize === size
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
          Quantity
        </p>

        <div className="flex items-center justify-between w-36 h-14 rounded-full border px-4">
          <button onClick={() => setQuantity(quantity - 1)}>
            -
          </button>

          <span className="font-semibold">{quantity}</span>

          <button onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4">
        <Link href={"/checkout"} className="h-16 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center gap-3 hover:bg-blue-700 transition">
          <ShoppingBag size={20} />
          Add to Cart
        </Link>

        <button className="h-16 rounded-full border flex items-center justify-center gap-3 hover:bg-gray-100 transition">
          <Heart size={20} />
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}