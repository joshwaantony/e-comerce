// components/checkout/CartSection.jsx

import CartItem from "./CartItem";

export default function CartSection({ items }) {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">
        Your Selection
      </h1>

      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}