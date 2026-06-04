// // components/CategorySection.jsx

import Link from "next/link";

// const categories = [
//   {
//     title: "Silk Collections",
//     image:
//       "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
//   },
//   {
//     title: "Organic Cotton",
//     image:
//       "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
//   },
//   {
//     title: "Linen Essentials",
//     image:
//       "https://images.unsplash.com/photo-1483985988355-763728e1935b",
//   },
// ];

// export default function CategorySection() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-24">
//       <div className="mb-12">
//         <h2 className="text-5xl font-bold">Signature Fabrics</h2>
//         <p className="text-gray-500 mt-3">
//           Explore premium shirt collections.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="relative rounded-3xl overflow-hidden group h-[500px]"
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//             />

//             <div className="absolute inset-0 bg-black/40" />

//             <div className="absolute bottom-8 left-8 text-white">
//               <h3 className="text-2xl font-semibold">{item.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// components/CategorySection.jsx

const categories = [
  {
    title: "Silk Collections",
    subtitle: "Fluid, elegant silhouettes.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Organic Cotton",
    subtitle: "Tailored, crisp essentials.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Linen Essentials",
    subtitle: "Breathable summer refinement.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-[#f5f5f7] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-14">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0B]">
              Signature Fabrics
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Explore our three core pillars of premium shirting.
            </p>
          </div>
          <Link href="/new-arrival">
            <button className="hidden md:flex items-center gap-2 text-sm font-medium text-[#2563eb] hover:gap-3 transition-all">
              Explore All
              <span>→</span>
            </button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] h-[500px] cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-8 left-7 z-10">
                <h3 className="text-white text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-white/80 mt-2 text-sm md:text-base">
                  {item.subtitle}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
