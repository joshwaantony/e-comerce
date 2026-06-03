import { Heart, ShoppingCart, User } from "lucide-react";

import { paymentData } from "@/data/paymentData";

export default function PaymentHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[#f9f9ff]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <span className="text-[40px] font-black leading-none tracking-[-0.08em] text-[#161c2b]">
            {paymentData.brand}
          </span>

          <nav className="hidden items-center gap-8 md:flex">
            {paymentData.navigationLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[15px] font-medium text-[#3a4051] transition-colors hover:text-[#1d64dd]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-5 text-[#3a4051]">
          <button
            type="button"
            aria-label="Wishlist"
            className="transition-colors hover:text-[#1d64dd]"
          >
            <Heart size={22} strokeWidth={1.9} />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="transition-colors hover:text-[#1d64dd]"
          >
            <User size={22} strokeWidth={1.9} />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative transition-colors hover:text-[#1d64dd]"
          >
            <ShoppingCart size={22} strokeWidth={1.9} />
            <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#1d64dd] px-1 text-[10px] font-semibold leading-none text-white shadow-sm">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
