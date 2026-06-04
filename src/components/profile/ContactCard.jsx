import { BadgeInfo } from "lucide-react";

export default function ContactCard() {
  return (
    <div
      className="
        rounded-[32px]
        border border-[#e5e7eb]/50
        bg-white/80
        backdrop-blur-xl
        p-6
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <BadgeInfo
          size={22}
          className="text-[#0058BE]"
        />

        <h3 className="text-[20px] font-semibold text-[#151c27]">
          Contact Info
        </h3>
      </div>

      {/* Email */}
      <div className="mb-6">
        <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.04em] text-[#9ca3af]">
          Email
        </p>

        <p className="text-[16px] font-semibold text-[#5b6472]">
          j.moore@studio.com
        </p>
      </div>

      {/* Phone */}
      <div>
        <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.04em] text-[#9ca3af]">
          Phone
        </p>

        <p className="text-[16px] font-semibold text-[#5b6472]">
          +1 (555) 890-2344
        </p>
      </div>
    </div>
  );
}