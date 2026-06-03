// components/Navbar.jsx

"use client";

import {
  Heart,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200/40 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* Left */}
        <div className="flex items-center gap-12">
          <h1 className="text-3xl font-bold tracking-tight">
            LUXE
          </h1>

          <div className="hidden md:flex items-center gap-8">
            <a className="border-b-2 border-blue-600 pb-1 text-blue-600 font-medium">
              New Arrivals
            </a>

            <a className="text-gray-500 hover:text-blue-600 transition">
              Designers
            </a>

            <a className="text-gray-500 hover:text-blue-600 transition">
              Boutiques
            </a>

            <a className="text-gray-500 hover:text-blue-600 transition">
              Collections
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          
          {/* Search */}
          <div className="hidden lg:flex items-center bg-[#f0f3ff] rounded-full px-4 py-2 border">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search curated luxury..."
              className="bg-transparent outline-none ml-2 text-sm w-60"
            />
          </div>

          <Heart className="cursor-pointer hover:text-blue-600 transition" />

          <div className="relative">
            <ShoppingCart className="cursor-pointer hover:text-blue-600 transition" />

            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-600" />
          </div>

          <User className="cursor-pointer hover:text-blue-600 transition" />
        </div>
      </div>
    </nav>
  );
}