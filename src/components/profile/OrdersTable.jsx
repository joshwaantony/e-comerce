const orders = [
  {
    id: "#LX-9012",
    date: "Oct 24, 2023",
    amount: "$1,240.00",
    status: "Delivered",
  },
  {
    id: "#LX-8845",
    date: "Nov 12, 2023",
    amount: "$450.00",
    status: "Shipped",
  },
  {
    id: "#LX-8721",
    date: "Dec 01, 2023",
    amount: "$3,890.00",
    status: "Processing",
  },
];

export default function OrdersTable() {
  return (
    <div
      className="
        overflow-hidden
        rounded-[32px]
        border border-[#E5E7EB]/50
        bg-white/80
        backdrop-blur-xl
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-[#E5E7EB]/50">
        <h2 className="text-[20px] font-semibold text-[#151C27]">
          Recent Orders
        </h2>

        <button className="text-[12px] font-semibold text-[#0058BE] hover:underline">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F0F3FF]">
              <th className="px-8 py-4 text-left text-[12px] font-semibold text-[#727785]">
                Order ID
              </th>

              <th className="px-8 py-4 text-left text-[12px] font-semibold text-[#727785]">
                Date
              </th>

              <th className="px-8 py-4 text-left text-[12px] font-semibold text-[#727785]">
                Amount
              </th>

              <th className="px-8 py-4 text-left text-[12px] font-semibold text-[#727785]">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="
                  border-t border-[#E5E7EB]/40
                  transition-all
                  duration-200
                  hover:bg-[#FAFBFF]
                "
              >
                <td className="px-8 py-6 text-[16px] font-semibold text-[#151C27]">
                  {order.id}
                </td>

                <td className="px-8 py-6 text-[16px] text-[#5B6472]">
                  {order.date}
                </td>

                <td className="px-8 py-6 text-[16px] font-bold text-[#151C27]">
                  {order.amount}
                </td>

                <td className="px-8 py-6">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  if (status === "Delivered") {
    return (
      <span className="rounded-full bg-[#DDF7E5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#1EA34A]">
        Delivered
      </span>
    );
  }

  if (status === "Shipped") {
    return (
      <span className="rounded-full bg-[#D8E2FF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#0058BE]">
        Shipped
      </span>
    );
  }

  return (
    <span className="rounded-full bg-[#E5E7EB] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#5B6472]">
      Processing
    </span>
  );
}