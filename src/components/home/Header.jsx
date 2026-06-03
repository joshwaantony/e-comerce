// components/Header.jsx

"use client";

import { Heart, ShoppingCart, User, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-bold tracking-tight">LUXE</h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="text-blue-600">
              The Shirt
            </a>
            <a href="#">New Arrivals</a>
            <a href="#">Boutiques</a>
            <a href="#">Fabrics</a>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm"
            />
          </div>

          <Heart className="cursor-pointer" size={22} />
          <ShoppingCart className="cursor-pointer" size={22} />
          <User className="cursor-pointer" size={22} />
        </div>
      </div>
    </header>
  );
}