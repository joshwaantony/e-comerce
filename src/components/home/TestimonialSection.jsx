// components/TestimonialSection.jsx

// components/TestimonialSection.jsx

import { Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="bg-[#F5F5F7] py-32 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Top Label */}
        <span className="uppercase tracking-[0.4em] text-[#1D4ED8] text-sm font-medium">
          Client Perspectives
        </span>

        {/* Quote Icon */}
        <div className="flex justify-center mt-14">
          <div className="w-20 h-20 rounded-full bg-[#EAF1FF] flex items-center justify-center">
            <Quote
              size={34}
              className="text-[#B8C9F0]"
              strokeWidth={2.2}
            />
          </div>
        </div>

        {/* Testimonial */}
        <blockquote className="mt-14 text-[#0B1220] text-[32px] md:text-[56px] leading-[1.15] italic font-light tracking-tight max-w-5xl mx-auto">
          “The fit of their organic cotton button-down is absolute
          perfection. I've worn high-end bespoke shirts that didn't feel this
          refined. LUXE has truly mastered the art of the shirt.”
        </blockquote>

        {/* Client */}
        <div className="mt-16 flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Eleanor Vanderbilt"
            className="w-16 h-16 rounded-full object-cover shadow-md"
          />

          <h4 className="mt-5 text-[26px] font-semibold text-[#0B1220]">
            Eleanor Vanderbilt
          </h4>

          <p className="text-[#667085] text-lg mt-1">
            Creative Director, NYC
          </p>
        </div>
      </div>
    </section>
  );
}