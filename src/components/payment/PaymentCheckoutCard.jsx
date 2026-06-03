import { ArrowRight, Headset, ShieldCheck, UploadCloud } from "lucide-react";

import { paymentData } from "@/data/paymentData";

export default function PaymentCheckoutCard() {
  return (
    <section className="rounded-[30px] border border-white/70 bg-white p-5 shadow-[0_20px_70px_rgba(20,34,66,0.06)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="flex flex-col gap-6">
          <div className="rounded-[28px] bg-[#eef1ff] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:px-8 sm:py-8">
            <div className="mx-auto flex max-w-[300px] flex-col items-center text-center">
              <div className="overflow-hidden rounded-[2px] shadow-[0_20px_34px_rgba(28,39,64,0.16)]">
                <img
                  src={paymentData.qrCode}
                  alt="QR Code Payment"
                  className="h-[168px] w-[168px] object-cover sm:h-[206px] sm:w-[206px]"
                />
              </div>

              <div className="mt-6">
                <p className="text-[22px] font-bold tracking-[-0.03em] text-[#1b2232]">
                  Scan to Pay
                </p>
                <p className="mt-2 text-[15px] leading-7 text-[#5a6173]">
                  Open your banking app to scan the secure QR code.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-[24px] bg-[#f3f5ff] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1d64dd] shadow-sm">
              <ShieldCheck size={18} strokeWidth={2.3} />
            </span>
            <div className="min-w-0">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#31384a]">
                100% Secure Transaction
              </p>
              <p className="mt-0.5 text-[13px] leading-4 text-[#51596a]">
                {paymentData.securityText}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-[25px] font-extrabold tracking-[-0.035em] text-[#1b2232] sm:text-[30px]">
              Upload Confirmation
            </h2>
            <p className="mt-2 max-w-[360px] text-[16px] leading-7 text-[#5b6374]">
              Once payment is complete, please upload your screenshot below to expedite shipping.
            </p>
          </div>

          <label className="group flex min-h-[210px] cursor-pointer flex-col items-center justify-center rounded-[28px] border-2 border-dashed border-[#d7dced] bg-white px-6 text-center transition-colors hover:border-[#8ca8df] hover:bg-[#f8faff]">
            <input className="hidden" type="file" accept="image/*,.pdf" />
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e6edfb] text-[#1d64dd] transition-transform group-hover:scale-105">
              <UploadCloud size={26} strokeWidth={2.2} />
            </span>
            <span className="mt-5 text-[18px] font-bold tracking-[-0.02em] text-[#2b3344]">
              {paymentData.uploadLabel}
            </span>
            <span className="mt-1 text-[13px] font-medium text-[#5c6475]">
              {paymentData.uploadHint}
            </span>
            <span className="mt-4 text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#1d64dd]">
              {paymentData.uploadAction}
            </span>
          </label>

          <button
            type="button"
            className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#9cb3d9] px-6 text-[14px] font-extrabold uppercase tracking-[0.2em] text-white shadow-[0_16px_34px_rgba(64,92,151,0.16)] transition-transform hover:-translate-y-0.5"
          >
            <span>{paymentData.confirmLabel}</span>
            <ArrowRight size={18} strokeWidth={2.3} />
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-[#eef0f6] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-[#7a7f8a]">
          <Headset size={15} strokeWidth={2} />
          <p className="text-[13px] font-medium">{paymentData.supportLabel}</p>
        </div>

        <div className="flex flex-wrap gap-6 text-[13px] font-semibold text-[#808491]">
          <a href="#" className="transition-colors hover:text-[#1d64dd]">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-[#1d64dd]">
            Security Standards
          </a>
        </div>
      </div>
    </section>
  );
}
