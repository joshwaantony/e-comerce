// components/product/RelatedProducts.jsx

const relatedProducts = [
  {
    title: "Charcoal Evening Blazer",
    brand: "Tailored Goods",
    price: "$890",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200",
  },

  {
    title: "Ivory Silk Shirt",
    brand: "Silk & Co",
    price: "$450",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
  },

  {
    title: "Leather Boots",
    brand: "Luxe Footwear",
    price: "$1200",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
  },

  {
    title: "Cashmere Scarf",
    brand: "Accessories",
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200",
  },
];

export default function RelatedProducts() {
  return (
    <section className="mt-32">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-4xl font-bold">
            You may also like
          </h2>

          <p className="text-gray-500 mt-2">
            Curated pairings and similar styles
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {relatedProducts.map((item, index) => (
          <div key={index} className="group">
            <div className="rounded-[28px] overflow-hidden bg-[#F5F5F7]">
              <img
                src={item.image}
                alt=""
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                {item.brand}
              </p>

              <h3 className="text-xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-blue-600 font-bold mt-3">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}