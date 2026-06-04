import {
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-b z-50">
      <div className="max-w-7xl mx-auto px-10 h-full flex items-center justify-between">
        <h1 className="font-bold text-2xl">
          LUXE
        </h1>

        <nav className="hidden md:flex gap-8">
          <a>Shop</a>
          <a>Sustainability</a>
          <a className="text-blue-600 font-semibold">
            Profile
          </a>
        </nav>

        <div className="flex gap-6">
          <Search size={20} />
          <ShoppingCart size={20} />
          <User
            size={20}
            className="text-blue-600"
          />
        </div>
      </div>
    </header>
  );
}