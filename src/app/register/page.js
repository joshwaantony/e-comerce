import CreateAccountFooter from "@/components/payment/CreateAccountFooter";
import CreateAccountHeader from "@/components/payment/CreateAccountHeader";
import RegisterCard from "@/components/payment/RegisterCard";

export const metadata = {
  title: "LUXE | Register",
  description: "Create a LUXE account.",
};

export default function RegisterPage() {
  return (
    <div
      className="min-h-screen bg-[#f7f7fd] text-[#151c27]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <CreateAccountHeader />

      <main className="mx-auto flex min-h-[calc(100vh-84px)] w-full flex-col justify-center px-4 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-[500px]">
          <RegisterCard />
        </div>
      </main>

      <CreateAccountFooter />
    </div>
  );
}
