import { Home, Pencil, Truck } from "lucide-react";

export default function ShippingAddress() {
  return (
    <div
      className="
        rounded-[32px]
        border border-[#E5E7EB]/50
        bg-white/80
        backdrop-blur-xl
        p-8
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
      "
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck
            size={22}
            className="text-[#0058BE]"
          />

          <h3 className="text-[20px] font-semibold text-[#151C27]">
            Primary Shipping Address
          </h3>
        </div>

        <button className="flex items-center gap-1 text-[12px] font-semibold text-[#0058BE] hover:underline">
          <Pencil size={12} />
          Edit
        </button>
      </div>

      {/* Address Card */}
      <div
        className="
          flex items-start gap-5
          rounded-[24px]
          border border-[#E5E7EB]/30
          bg-[#F0F3FF]
          px-6
          py-5
        "
      >
        {/* Icon Box */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
          <Home
            size={20}
            className="text-[#0058BE]"
          />
        </div>

        {/* Address */}
        <div>
          <p className="text-[18px] font-semibold text-[#151C27]">
            Main Studio
          </p>

          <p className="mt-1 text-[16px] text-[#5B6472]">
            742 Evergreen Terrace
          </p>

          <p className="text-[16px] text-[#5B6472]">
            New York, NY 10001, USA
          </p>
        </div>
      </div>
    </div>
  );
}