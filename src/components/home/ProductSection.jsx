// // components/ProductSection.jsx

// import { Heart, ShoppingCart } from "lucide-react";

// const products = [
//   {
//     title: "Silk Button-Down",
//     brand: "Milan Atelier",
//     price: "$380",
//     image:
//       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
//   },
//   {
//     title: "Organic Cotton Shirt",
//     brand: "Core Essentials",
//     price: "$210",
//     image:
//       "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
//   },
//   {
//     title: "Linen Summer Shirt",
//     brand: "Seasonal Series",
//     price: "$245",
//     image:
//       "https://images.unsplash.com/photo-1483985988355-763728e1935b",
//   },
// ];

// export default function ProductSection() {
//   return (
//     <section className="bg-gray-50 py-24">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-5xl font-bold mb-12">New Arrivals</h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-3xl p-6 shadow-sm hover:-translate-y-2 transition"
//             >
//               <div className="relative">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="rounded-2xl h-[420px] w-full object-cover"
//                 />

//                 <button className="absolute top-4 right-4 bg-white p-2 rounded-full">
//                   <Heart size={18} />
//                 </button>
//               </div>

//               <div className="mt-6">
//                 <p className="text-sm text-gray-500">{product.brand}</p>

//                 <h3 className="text-xl font-semibold mt-1">
//                   {product.title}
//                 </h3>

//                 <div className="flex items-center justify-between mt-4">
//                   <span className="text-2xl font-bold text-blue-600">
//                     {product.price}
//                   </span>

//                   <ShoppingCart className="cursor-pointer" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// components/ProductSection.jsx

import {
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const products = [
  {
    title: "Silk Button-Down",
    subtitle: "Silk Button-Down",
    brand: "MILAN ATELIER",
    price: "$380",
    badge: "BOUTIQUE EXCLUSIVE",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Heritage White - Organic Cotton",
    subtitle: "Heritage White - Organic Cotton",
    brand: "CORE ESSENTIALS",
    price: "$210",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Tuscan Summer - Linen Shirt",
    subtitle: "Tuscan Summer - Linen Shirt",
    brand: "SEASONAL SERIES",
    price: "$245",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProductSection() {
  return (
    <section className="bg-[#f5f5f7] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0B]">
            New Arrivals
          </h2>

          <div className="hidden md:flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
              <ChevronLeft size={20} />
            </button>

            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] rounded-[30px] p-5 group hover:-translate-y-1 transition duration-500"
            >
              
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-[28px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[430px] object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                {/* Wishlist */}
                <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-sm hover:scale-110 transition">
                  <Heart size={18} className="text-[#111]" />
                </button>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#0057FF] text-white text-[10px] font-semibold px-3 py-1 rounded-full tracking-wide">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="text-[13px] tracking-[0.25em] text-gray-500 uppercase">
                  {product.brand}
                </p>

                <h3 className="text-[22px] font-semibold text-[#111] mt-2 leading-snug">
                  {product.subtitle}
                </h3>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-[34px] font-bold text-[#0057FF] tracking-tight">
                    {product.price}
                  </span>

                  <button className="hover:scale-110 transition">
                    <ShoppingBag
                      size={22}
                      className="text-[#111]"
                      strokeWidth={1.8}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}