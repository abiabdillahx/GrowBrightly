"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          <Link href="/">GrowBrightly</Link>
        </div>

        {/* Menu */}
        <div className="space-x-6 hidden md:flex text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
