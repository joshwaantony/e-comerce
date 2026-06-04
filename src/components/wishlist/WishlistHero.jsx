export default function WishlistHero() {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        {/* Left */}
        <div>
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0058BE]">
            Personal Gallery
          </p>

          <h1 className="text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#151C27]">
            Your Curated Wishlist
          </h1>
        </div>

        {/* Right */}
        <div className="md:text-right">
          <p className="max-w-[320px] text-[16px] leading-[1.6] text-[#424754]">
            Refine your selection of luxury essentials.
            <br />
            Hand-picked for the discerning eye.
          </p>
        </div>
      </div>

      <div className="mt-8 border-b border-[#C2C6D6]/40" />
    </section>
  );
}