import { createAccountData } from "@/data/createAccountData";

export default function CreateAccountHeader() {
  return (
    <header className="border-b border-black/5 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-[1340px] items-center justify-between px-6">
        <a
          href="#"
          className="text-[34px] font-black tracking-[-0.085em] text-[#161c2b] sm:text-[40px]"
        >
          {createAccountData.brand}
        </a>

        <nav className="flex items-center gap-8 text-[15px] text-[#43495a] sm:gap-10 sm:text-[17px]">
          {createAccountData.navLinks.map((link) => (
            <a key={link} href="#" className="transition-colors hover:text-[#1d64dd]">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
