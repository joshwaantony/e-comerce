"use client";

import Image from "next/image";
import { ShoppingBag, X } from "lucide-react";

export default function WishlistCard({ item, onRemove }) {
  return (
    <div
      className="
        relative
        group
        overflow-hidden
        rounded-[24px]
        bg-white
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <button
        onClick={() => onRemove(item.id)}
        className="
          absolute
          right-4
          top-4
          z-10
          rounded-full
          bg-white/90
          p-2
          shadow-sm
        "
      >
        <X size={18} />
      </button>

      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={"/headerBg.jpg"}
          alt={item.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-6">
        <p className="text-xs tracking-[0.15em] text-[#727785] uppercase">
          {item.brand}
        </p>

        <h3 className="mt-2 text-[24px] font-semibold text-[#151C27]">
          {item.title}
        </h3>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-[36px] font-bold text-[#0058BE]">
            {item.price}
          </span>

          <button
            className="
              flex items-center gap-2
              rounded-full
              bg-gradient-to-r
              from-[#0058BE]
              to-[#004395]
              px-5
              py-3
              text-xs
              font-semibold
              text-white
            "
          >
            <ShoppingBag size={16} />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}