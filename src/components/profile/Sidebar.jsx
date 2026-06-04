// "use client";

// import { useState } from "react";
// import {
//   User,
//   ShoppingBag,
//   MapPin,
//   CreditCard,
//   Settings,
// } from "lucide-react";

// export default function Sidebar() {
//   const [active, setActive] =
//     useState("Profile");

//   const items = [
//     {
//       label: "Profile",
//       icon: User,
//     },
//     {
//       label: "Orders",
//       icon: ShoppingBag,
//     },
//     {
//       label: "Addresses",
//       icon: MapPin,
//     },
//     {
//       label: "Payments",
//       icon: CreditCard,
//     },
//     {
//       label: "Settings",
//       icon: Settings,
//     },
//   ];

//   return (
//     <aside className="w-full lg:w-64">
//       <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-4">
//         Account
//       </h3>

//       <div className="space-y-2">
//         {items.map((item) => {
//           const Icon = item.icon;

//           return (
//             <button
//               key={item.label}
//               onClick={() =>
//                 setActive(item.label)
//               }
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
//                 active === item.label
//                   ? "bg-blue-50 text-blue-600"
//                   : "hover:bg-slate-50"
//               }`}
//             >
//               <Icon size={18} />
//               {item.label}
//             </button>
//           );
//         })}
//       </div>
//     </aside>
//   );
// }




"use client";

import { useState } from "react";
import {
  User,
  ShoppingBag,
  MapPin,
  CreditCard,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Profile");

  const items = [
    {
      label: "Profile",
      icon: User,
    },
    {
      label: "Orders",
      icon: ShoppingBag,
    },
    {
      label: "Addresses",
      icon: MapPin,
    },
    {
      label: "Payments",
      icon: CreditCard,
    },
    {
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-[208px]">
      <h3 className="mb-5 px-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#727785]">
        Account
      </h3>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          const isActive = active === item.label;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`flex w-full items-center gap-3 rounded-full px-4 py-3 text-left transition-all duration-200 ${
                isActive
                  ? "bg-[#e7eefe] text-[#0058be]"
                  : "text-[#424754] hover:text-[#0058be]"
              }`}
            >
              <Icon
                size={16}
                strokeWidth={2}
                className={isActive ? "text-[#0058be]" : ""}
              />

              <span
                className={`text-[13px] ${
                  isActive ? "font-medium" : "font-normal"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}