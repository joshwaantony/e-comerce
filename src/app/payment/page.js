import Navbar from "@/components/newArrival/Navbar";
import PaymentCheckoutCard from "@/components/payment/PaymentCheckoutCard";
import PaymentFooter from "@/components/payment/PaymentFooter";
import PaymentHeader from "@/components/payment/PaymentHeader";
import PaymentHero from "@/components/payment/PaymentHero";

export default function Page() {
  return (
    <div
      className="min-h-screen bg-[#f9f9ff] text-[#151c27]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
     <Navbar />

      <main className="mx-auto flex w-full max-w-[1120px] flex-col px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pt-24">
        <PaymentHero />

        <div className="mx-auto mt-10 w-full max-w-[720px] sm:mt-14 lg:mt-16 lg:max-w-[760px]">
          <PaymentCheckoutCard />
        </div>
      </main>

      <PaymentFooter />
    </div>
  );
}
