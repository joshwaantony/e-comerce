// components/NewsletterSection.jsx

export default function NewsletterSection() {
  return (
    <section className="bg-[#F5F5F7] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Container */}
        <div className="relative overflow-hidden rounded-[42px] bg-[#EEF2FB] px-8 py-24 md:px-16">
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_60%)]" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            
            {/* Heading */}
            <h2 className="text-[42px] md:text-[64px] font-semibold tracking-tight text-[#0B1220] leading-tight">
              Join the Inner Circle
            </h2>

            {/* Description */}
            <p className="mt-6 text-[#667085] text-lg md:text-xl leading-relaxed">
              Gain early access to seasonal shirt drops and exclusive
              fabric updates.
            </p>

            {/* Form */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-5">
              
              {/* Input */}
              <div className="w-full md:w-[420px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="
                    w-full
                    h-[68px]
                    rounded-full
                    bg-white/90
                    backdrop-blur-md
                    px-8
                    text-[#0B1220]
                    placeholder:text-[#7B8190]
                    outline-none
                    border border-white/60
                    shadow-sm
                    text-lg
                  "
                />
              </div>

              {/* Button */}
              <button
                className="
                  h-[68px]
                  px-12
                  rounded-full
                  bg-[#0B1220]
                  text-white
                  text-lg
                  font-semibold
                  hover:scale-[1.03]
                  hover:bg-[#111827]
                  transition-all
                  duration-300
                  shadow-lg
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}