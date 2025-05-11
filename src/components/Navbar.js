"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b shadow-l sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          <Link href="/">GrowBrightly</Link>
        </div>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none cursor-pointer"
        >
          <i className="fas fa-bars text-gray-800 text-xl"></i>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden flex flex-col bg-white shadow-md px-6 py-4 absolute top-16 right-4 rounded-lg z-50 text-gray-700 font-medium"
          >
            <Link href="/" className="py-2 hover:text-emerald-600">Home</Link>
            <Link href="/about" className="py-2 hover:text-emerald-600">About Us</Link>
            <Link href="/blog" className="py-2 hover:text-emerald-600">Blog</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
