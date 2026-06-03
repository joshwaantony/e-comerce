// components/AboutSection.jsx

import { Sparkles, Leaf } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#06111F] py-28 px-6 lg:px-10">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <div>
          <span className="uppercase tracking-[0.45em] text-[#0066FF] text-sm font-medium">
            The Luxe Philosophy
          </span>

          <h2 className="text-white text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mt-8">
            The Art of the
            <br />
            Perfect Shirt.
          </h2>

          <p className="text-[#D4D8E0] text-lg leading-relaxed mt-10 max-w-xl">
            We believe a shirt is more than a garment; it is a statement of
            personal refinement. By partnering directly with heritage mills and
            master tailors, we deliver low-cost luxury shirts that offer an
            impeccable fit and unparalleled hand-feel.
          </p>

          {/* Features */}
          <div className="mt-14 space-y-10">
            
            {/* Feature 1 */}
            <div className="flex gap-5">
              <div className="w-11 h-11 rounded-full border border-[#0F6BFF]/40 flex items-center justify-center bg-[#0A1830]">
                <Sparkles
                  size={18}
                  className="text-[#0F6BFF]"
                  strokeWidth={2}
                />
              </div>

              <div>
                <h4 className="text-white text-2xl font-semibold">
                  Artisanal Tailoring
                </h4>

                <p className="text-[#9DA7B8] mt-2 leading-relaxed">
                  Every stitch executed by master craftsmen in European
                  workshops.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5">
              <div className="w-11 h-11 rounded-full border border-[#0F6BFF]/40 flex items-center justify-center bg-[#0A1830]">
                <Leaf
                  size={18}
                  className="text-[#0F6BFF]"
                  strokeWidth={2}
                />
              </div>

              <div>
                <h4 className="text-white text-2xl font-semibold">
                  Finest Mill Sourcing
                </h4>

                <p className="text-[#9DA7B8] mt-2 leading-relaxed">
                  Sustainable, long-staple fibers sourced from ethical global
                  partners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* Outer Glow Border */}
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-[40px]" />

          <div className="relative rounded-[34px] border border-white/10 bg-[#0B1526] p-3 shadow-[0_0_60px_rgba(0,102,255,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury Tailoring"
              className="w-full lg:w-[520px] h-[650px] object-cover rounded-[28px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}