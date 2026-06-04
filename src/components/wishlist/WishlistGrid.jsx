"use client";

import { useState } from "react";
import { wishlistItems } from "@/data/wishlistData";
import WishlistCard from "./WishlistCard";
import EmptyWishlist from "./EmptyWishlist";

export default function WishlistGrid() {
  const [items, setItems] = useState(wishlistItems);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  if (!items.length) {
    return <EmptyWishlist />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {items.map((item) => (
        <WishlistCard
          key={item.id}
          item={item}
          onRemove={removeItem}
        />
      ))}
    </div>
  );
}