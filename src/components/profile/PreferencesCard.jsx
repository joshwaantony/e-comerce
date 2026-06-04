import { SlidersHorizontal } from "lucide-react";

export default function PreferencesCard() {
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
      <div className="mb-8 flex items-center gap-2">
        <SlidersHorizontal
          size={20}
          className="text-[#0058BE]"
        />

        <h3 className="text-[20px] font-semibold text-[#151c27]">
          Preferences
        </h3>
      </div>

      {/* Preferred Fabric */}
      <div className="mb-5">
        <p className="mb-2 text-[12px] font-semibold text-[#9CA3AF]">
          Preferred Fabric
        </p>

        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-[#E7EEFE]
            px-4
            py-1
            text-[12px]
            font-semibold
            text-[#0058BE]
          "
        >
          Silk
        </span>
      </div>

      {/* Currency */}
      <div>
        <p className="mb-1 text-[12px] font-semibold text-[#9CA3AF]">
          Currency
        </p>

        <p className="text-[16px] font-semibold text-[#5B6472]">
          USD ($)
        </p>
      </div>
    </div>
  );
}