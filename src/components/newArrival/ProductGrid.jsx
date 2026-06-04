// // components/ProductGrid.jsx

// import ProductCard from "./ProductCard";

// const products = [
//   {
//     badge: "Limited",
//     title: "Atelier Oversized Silk Shirt",
//     brand: "Maison Silhouette",
//     price: "$450",
//     image:
//       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
//   },
//   {
//     title: "Signature White Cotton Dress Shirt",
//     brand: "Atelier Essential",
//     price: "$280",
//     image:
//       "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
//   },
//   {
//     badge: "New",
//     title: "Relaxed Linen Resort Shirt",
//     brand: "Riviera Club",
//     price: "$320",
//     image:
//       "https://images.unsplash.com/photo-1483985988355-763728e1935b",
//   },
// ];

// export default function ProductGrid() {
//   return (
//     <div className="flex-1">
      
//       {/* Top */}
//       <div className="mb-10 flex items-center justify-between">
//         <span className="text-xs uppercase tracking-[3px] text-gray-400">
//           Showing 3 of 75 luxury shirts
//         </span>

//         <div className="flex items-center gap-2 text-sm">
//           <span className="text-gray-500">
//             Sort by:
//           </span>

//           <select className="bg-transparent font-semibold text-blue-600 outline-none">
//             <option>Curated Popularity</option>
//             <option>Newest First</option>
//             <option>Price: Low to High</option>
//             <option>Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
//         {products.map((item, index) => (
//           <ProductCard key={index} item={item} />
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-20 flex items-center justify-center gap-4">
//         <button className="h-12 w-12 rounded-full border opacity-40">
//           ←
//         </button>

//         <button className="h-12 w-12 rounded-full bg-blue-600 text-white font-bold">
//           1
//         </button>

//         <button className="h-12 w-12 rounded-full hover:bg-gray-100">
//           2
//         </button>

//         <button className="h-12 w-12 rounded-full hover:bg-gray-100">
//           3
//         </button>

//         <span className="text-gray-400">...</span>

//         <button className="h-12 w-12 rounded-full hover:bg-gray-100">
//           8
//         </button>

//         <button className="h-12 w-12 rounded-full border hover:bg-blue-600 hover:text-white transition">
//           →
//         </button>
//       </div>
//     </div>
//   );
// }



"use client";

import ProductCard from "./ProductCard";

const products = [
  {
    badge: "Exclusive",
    title: "Atelier Oversized Blazer",
    brand: "Maison Silhouette",
    price: "$1,250",
    image: "/products/blazer.jpg",
  },
  {
    title: "Emerald Calfskin Tote",
    brand: "Verona Leatherworks",
    price: "$2,800",
    image: "/products/bag.jpg",
  },
  {
    badge: "Exclusive",
    title: "Silk Column Gown",
    brand: "L'Étoile Paris",
    price: "$4,200",
    image: "/products/gown.jpg",
  },
  {
    title: "Glass Heel Stiletto",
    brand: "Studio Horizon",
    price: "$950",
    image: "/products/shoe.jpg",
  },
  {
    title: "Essential Pima Cotton Tee",
    brand: "Foundation Luxe",
    price: "$180",
    image: "/products/shirt.jpg",
  },
  {
    badge: "Exclusive",
    title: "Skeleton Dial Rose Gold",
    brand: "Chronos Prestige",
    price: "$8,900",
    image: "/products/watch.jpg",
  },
];

export default function ProductGrid() {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
          Showing 24 of 86 Results
        </p>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-500">Sort by:</span>

          <select className="bg-transparent text-blue-600 font-medium outline-none">
            <option>Curated Popularity</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button className="w-9 h-9 rounded-full border border-slate-200 text-slate-400">
          ‹
        </button>

        <button className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm">
          1
        </button>

        <button className="text-sm text-slate-500">2</button>
        <button className="text-sm text-slate-500">3</button>

        <span className="text-slate-400">...</span>

        <button className="text-sm text-slate-500">8</button>

        <button className="w-9 h-9 rounded-full border border-slate-200">
          ›
        </button>
      </div>
    </div>
  );
}