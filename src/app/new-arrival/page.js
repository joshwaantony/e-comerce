// app/page.js

import Footer from "@/components/home/Footer";
import Navbar from "@/components/newArrival/Navbar";
import ProductFilters from "@/components/newArrival/ProductFilters";
import ProductGrid from "@/components/newArrival/ProductGrid";



export default function HomePage() {
  return (
    <main className="bg-[#f9f9ff] text-[#151c27] min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        
        {/* Page Header */}
        <div className="mb-14">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            New Collections
          </h1>

          <p className="max-w-xl text-lg text-gray-500 leading-8">
            Explore the latest curation of high-fashion pieces
            from emerging designers and established boutiques
            worldwide.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          <ProductFilters />

          <ProductGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}