import { paymentData } from "@/data/paymentData";

export default function PaymentFooter() {
  return (
    <footer className="border-t border-[#e4e7f0] bg-[#f9f9ff]">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8 lg:py-24">
        <div className="max-w-[430px]">
          <h2 className="text-[42px] font-black tracking-[-0.08em] text-[#151c27]">
            {paymentData.brand}
          </h2>
          <p className="mt-6 text-[17px] leading-8 text-[#444b5a]">
            {paymentData.footerNote}
          </p>
          <p className="mt-8 text-[16px] leading-7 text-[#595f6d]">
            © 2024 LUXE Premium Multi-Vendor Platform. All rights reserved.
          </p>
        </div>

        {paymentData.footerLinks.map((column) => (
          <div key={column.title}>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#1d64dd]">
              {column.title}
            </p>
            <div className="mt-4 space-y-4 text-[16px] text-[#595f6d]">
              {column.links.map((link) => (
                <a key={link} href="#" className="block transition-colors hover:text-[#1d64dd]">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
