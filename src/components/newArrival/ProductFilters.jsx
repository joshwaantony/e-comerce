// // components/ProductFilters.jsx

// export default function ProductFilters() {
//   return (
//     <aside className="w-full lg:w-64 shrink-0">
//       <div className="sticky top-28 space-y-12">
        
//         {/* Fabric */}
//         <div>
//           <h3 className="text-2xl font-semibold mb-6">
//             Fabric
//           </h3>

//           <div className="space-y-4">
//             {[
//               ["Silk", 12],
//               ["Cotton", 45],
//               ["Linen", 18],
//             ].map(([name, count]) => (
//               <label
//                 key={name}
//                 className="flex items-center cursor-pointer group"
//               >
//                 <input
//                   type="checkbox"
//                   className="mr-3 h-5 w-5 rounded border-gray-300 accent-blue-600"
//                 />

//                 <span className="text-gray-600 group-hover:text-blue-600 transition">
//                   {name}
//                 </span>

//                 <span className="ml-auto text-sm text-gray-400">
//                   {count}
//                 </span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Fit */}
//         <div>
//           <h3 className="text-2xl font-semibold mb-6">
//             Fit
//           </h3>

//           <div className="space-y-4">
//             {["Slim", "Regular", "Relaxed"].map((fit) => (
//               <label
//                 key={fit}
//                 className="flex items-center cursor-pointer group"
//               >
//                 <input
//                   type="checkbox"
//                   className="mr-3 h-5 w-5 rounded border-gray-300 accent-blue-600"
//                 />

//                 <span className="text-gray-600 group-hover:text-blue-600 transition">
//                   {fit}
//                 </span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Price */}
//         <div>
//           <h3 className="text-2xl font-semibold mb-6">
//             Price Range
//           </h3>

//           <input
//             type="range"
//             min="100"
//             max="5000"
//             className="w-full accent-blue-600"
//           />

//           <div className="flex justify-between mt-4 text-sm text-gray-500">
//             <span>$100</span>
//             <span>$5,000+</span>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }


"use client";

import { useState } from "react";

export default function ProductFilters() {
  const [selectedCategory, setSelectedCategory] =
    useState("Accessories");

  const boutiques = [
    "Parisian Hub",
    "Milan Atelier",
    "London Luxe",
    "Tokyo Minimal",
  ];

  const categories = [
    { name: "Ready-to-Wear", count: 124 },
    { name: "Accessories", count: 86 },
    { name: "Footwear", count: 52 },
    { name: "Fine Jewelry", count: 31 },
  ];

  return (
    <aside className="w-[240px]">
      <div className="space-y-12">
        {/* Categories */}
        <div>
          <h3 className="text-[20px] font-bold text-[#0f172a] mb-6">
            Categories
          </h3>

          <div className="space-y-5">
            {categories.map((item) => (
              <label
                key={item.name}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === item.name}
                  onChange={() =>
                    setSelectedCategory(item.name)
                  }
                  className="hidden"
                />

                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedCategory === item.name
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                >
                  {selectedCategory === item.name && (
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  )}
                </div>

                <span
                  className={`ml-3 text-[15px] ${
                    selectedCategory === item.name
                      ? "text-blue-600"
                      : "text-[#475569]"
                  }`}
                >
                  {item.name}
                </span>

                <span className="ml-auto text-xs text-slate-500">
                  {item.count}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <h3 className="text-[20px] font-bold text-[#0f172a] mb-6">
            Price Range
          </h3>

          <input
            type="range"
            min="500"
            max="10000"
            defaultValue="5000"
            className="w-full accent-blue-600"
          />

          <div className="flex justify-between mt-4 text-[13px] font-semibold text-slate-600">
            <span>$500</span>
            <span>$10,000+</span>
          </div>
        </div>

        {/* Boutiques */}
        <div>
          <h3 className="text-[20px] font-bold text-[#0f172a] mb-6">
            Boutiques
          </h3>

          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-full bg-slate-100 text-xs font-medium">
              Parisian Hub
            </button>

            <button className="px-4 py-2 rounded-full bg-slate-100 text-xs font-medium">
              Milan Atelier
            </button>

            <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-medium">
              London Luxe
            </button>

            <button className="px-4 py-2 rounded-full bg-slate-100 text-xs font-medium">
              Tokyo Minimal
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}