import { paymentData } from "@/data/paymentData";

export default function PaymentHero() {
  return (
    <section className="text-center">
      <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#1d64dd]">
        Secure Checkout
      </p>
      <h1 className="text-[38px] font-black tracking-[-0.045em] text-[#151c27] sm:text-[56px]">
        Finalize Your Order
      </h1>
      <p className="mt-3 text-[16px] text-[#404759] sm:text-[18px]">
        Your Order <span className="font-semibold text-[#151c27]">#{paymentData.orderId}</span>{" "}
        is ready for payment.
      </p>
    </section>
  );
}
