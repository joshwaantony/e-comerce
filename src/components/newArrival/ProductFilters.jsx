// components/ProductFilters.jsx

export default function ProductFilters() {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-28 space-y-12">
        
        {/* Fabric */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Fabric
          </h3>

          <div className="space-y-4">
            {[
              ["Silk", 12],
              ["Cotton", 45],
              ["Linen", 18],
            ].map(([name, count]) => (
              <label
                key={name}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="mr-3 h-5 w-5 rounded border-gray-300 accent-blue-600"
                />

                <span className="text-gray-600 group-hover:text-blue-600 transition">
                  {name}
                </span>

                <span className="ml-auto text-sm text-gray-400">
                  {count}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Fit */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Fit
          </h3>

          <div className="space-y-4">
            {["Slim", "Regular", "Relaxed"].map((fit) => (
              <label
                key={fit}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="mr-3 h-5 w-5 rounded border-gray-300 accent-blue-600"
                />

                <span className="text-gray-600 group-hover:text-blue-600 transition">
                  {fit}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Price Range
          </h3>

          <input
            type="range"
            min="100"
            max="5000"
            className="w-full accent-blue-600"
          />

          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <span>$100</span>
            <span>$5,000+</span>
          </div>
        </div>
      </div>
    </aside>
  );
}