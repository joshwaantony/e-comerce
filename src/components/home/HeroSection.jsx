
// components/HeroSection.jsx

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/headerBg.jpg"
        alt="Luxury Shirt"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          
          {/* Left Content */}
          <div className="max-w-[520px]">
            
            {/* Badge */}
            <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-[11px] font-semibold uppercase tracking-[2px] text-white shadow-lg">
              Sartorial Excellence
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-[58px] font-semibold leading-[1.05] tracking-[-2px] text-white md:text-[76px]">
              The Definitive
              <br />
              Luxury Shirt.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[500px] text-[18px] leading-[1.8] text-white/80">
              Masterfully tailored from the world's finest silks, linens,
              and organic cottons. Redefining the cornerstone of your
              wardrobe with artisan craftsmanship.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap items-center gap-5">
              
              {/* Primary Button */}
              <Link href="/new-arrival">
              <button className="rounded-full bg-blue-600 px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-[1.03] hover:shadow-2xl">
                Shop Shirts
              </button>
              </Link>

              {/* Secondary Button */}
              <button className="rounded-full border border-white/60 bg-white/5 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}