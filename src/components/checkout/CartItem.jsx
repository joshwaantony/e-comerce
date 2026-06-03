// components/checkout/CartItem.jsx

import { Trash2, Minus, Plus } from "lucide-react";

export default function CartItem({ item }) {
  return (
    <div className="bg-white p-6 rounded-[28px] shadow-sm flex gap-6">
      
      {/* Image */}
      <div className="w-28 h-36 rounded-2xl overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-grow">
        <div className="flex justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold">
              {item.badge}
            </p>

            <h3 className="text-2xl font-semibold mt-2">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-1">
              {item.details}
            </p>
          </div>

          <button>
            <Trash2 className="text-gray-400" size={20} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-8">
          
          {/* Quantity */}
          <div className="flex items-center gap-5 border rounded-full px-4 py-2">
            <button>
              <Minus size={16} />
            </button>

            <span className="font-semibold">
              {item.quantity}
            </span>

            <button>
              <Plus size={16} />
            </button>
          </div>

          <p className="text-2xl font-bold">
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );
}