// components/checkout/OrderSummary.jsx

import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function OrderSummary({ summary }) {
  return (
    <div className="sticky top-28 bg-white p-8 rounded-[32px] shadow-sm border">
      
      <h2 className="text-3xl font-semibold mb-8">
        Order Summary
      </h2>

      <div className="space-y-5">
        
        <Row
          label="Subtotal"
          value={summary.subtotal}
        />

        <Row
          label="Shipping"
          value={summary.shipping}
        />

        <Row
          label="Estimated Tax"
          value={summary.tax}
        />

        <div className="border-t pt-5">
          <Row
            label="Total"
            value={summary.total}
            bold
          />
        </div>
      </div>

      <Link href={"/payment"}
        className="
          w-full
          h-16
          rounded-2xl
          bg-blue-600
          text-white
          font-semibold
          flex
          items-center
          justify-center
          gap-3
          mt-8
          hover:bg-blue-700
          transition
        "
      >
        Proceed to Payment
        <ArrowRight size={20} />
      </Link>

      <div className="flex items-center justify-center gap-2 mt-5 text-gray-500 text-sm">
        <ShieldCheck size={16} />
        Encrypted & Secure Transaction
      </div>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className="flex items-center justify-between">
      <span className={bold ? "font-semibold" : "text-gray-500"}>
        {label}
      </span>

      <span className={bold ? "font-bold text-xl" : "font-semibold"}>
        {value}
      </span>
    </div>
  );
}