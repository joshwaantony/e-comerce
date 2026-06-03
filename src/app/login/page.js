import LoginCard from "@/components/payment/LoginCard";
import { loginData } from "@/data/loginData";

export const metadata = {
  title: "LUXE | Login",
  description: "Login to your LUXE account.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#151c27]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] h-[60%] w-[60%] rounded-full bg-[#0058be]/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[5%] h-[50%] w-[50%] rounded-full bg-[#e2e8f8]/30 blur-[100px]" />
      </div>

      <main className="relative z-10 flex min-h-screen flex-col">
        <div className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
          <LoginCard />
        </div>

        <footer className="mx-auto flex w-full max-w-[1120px] flex-col items-center justify-center gap-4 px-4 pb-8 text-center sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#737576]">
            {loginData.footerNote}
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#737576]">
            {loginData.footerLinks.map((item) => (
              <a key={item} href="#" className="transition-colors hover:text-[#1d64dd]">
                {item}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
