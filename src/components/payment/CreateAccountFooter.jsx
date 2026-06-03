import { createAccountData } from "@/data/createAccountData";

export default function CreateAccountFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-[1340px] flex-col gap-6 px-6 pb-8 pt-6 text-[15px] text-[#565d6f] lg:flex-row lg:items-center lg:justify-between">
      <p className="tracking-[0.08em] uppercase">{createAccountData.footerNote}</p>

      <div className="flex flex-wrap items-center gap-6 uppercase tracking-[0.12em] sm:gap-8">
        {createAccountData.footerLinks.map((link) => (
          <a key={link} href="#" className="transition-colors hover:text-[#1d64dd]">
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
