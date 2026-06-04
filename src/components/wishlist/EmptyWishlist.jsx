import { Bookmark } from "lucide-react";

export default function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center py-24 text-center">
      <Bookmark
        size={120}
        className="text-slate-300"
      />

      <h2 className="mt-6 text-3xl font-semibold">
        Your wishlist is empty
      </h2>

      <p className="mt-2 max-w-md text-slate-500">
        Discover our latest collection and start
        curating your personal luxury gallery.
      </p>

      <button className="mt-8 rounded-full bg-gradient-to-r from-[#0058BE] to-[#004395] px-8 py-4 text-white">
        EXPLORE COLLECTION
      </button>
    </div>
  );
}