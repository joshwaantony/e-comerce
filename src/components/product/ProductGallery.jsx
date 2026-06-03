// components/product/ProductGallery.jsx

"use client";

import { useState } from "react";

export default function ProductGallery({ images }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="grid grid-cols-12 gap-4">
      
      {/* Thumbnails */}
      <div className="col-span-2 flex flex-col gap-4 sticky top-28 h-fit">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className={`rounded-2xl overflow-hidden border transition-all ${
              activeImage === img
                ? "border-blue-600 ring-2 ring-blue-300"
                : "border-gray-200"
            }`}
          >
            <img
              src={img}
              alt=""
              className="w-full aspect-square object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="col-span-10">
        <div className="rounded-[32px] overflow-hidden bg-[#F5F5F7]">
          <img
            src={activeImage}
            alt=""
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
      </div>
    </div>
  );
}