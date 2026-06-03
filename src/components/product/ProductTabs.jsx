// components/product/ProductTabs.jsx

"use client";

import { useState } from "react";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-10">
      
      {/* Tabs */}
      <div className="flex gap-8 border-b pb-4">
        {["description", "material", "shipping"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize transition ${
              activeTab === tab
                ? "text-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-600 leading-relaxed">
        {product[activeTab]}
      </div>
    </div>
  );
}