"use client";

import Link from "next/link";
import Image from 'next/image'; // Import Image component
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/context/AuthContext"; // Import useAuth hook
import { auth } from "@/utils/firebase"; // Import auth instance
import { signOut } from "firebase/auth"; // Import signOut function
import { useRouter } from 'next/navigation'; // Import useRouter

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, loading } = useAuth(); // Get user state and loading status
  const router = useRouter(); // Initialize router
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const userMenuRef = useRef(null); // Ref for desktop user dropdown
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State for desktop user dropdown

  useEffect(() => {
    function handleClickOutside(e) {
      // Close mobile menu
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current && // Check if buttonRef exists
        !buttonRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
      // Close desktop user menu
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target)
      ) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsMobileMenuOpen(false); // Close mobile menu on logout
      setIsUserMenuOpen(false); // Close user menu on logout
      router.push('/login'); // Redirect to login page after logout
      alert('Logout successful!');
    } catch (error) {
      console.error("Error signing out: ", error);
      alert(`Logout failed: ${error.message}`);
    }
  };

  // Function to get user initials
  const getInitials = (name) => {
    if (!name) return '?';
    const names = name.split(' ');
    if (names.length > 1) {
        return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  }

  return (
    <header className="bg-[#FBFBFB] border-b shadow-sm sticky top-0 py-2 z-50"> {/* Adjusted shadow and added top-0 */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between bg-transparent select-none">
        {/* Logo */}
        <div className="text-2xl font-bold text-emerald-700">
          <Link href="/">{/*<i className="fas fa-baby-carriage"></i>*/} GrowBrightly</Link>
        </div>

        {/* Desktop Menu & User Info */} 
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link href="/" className="duration-300 hover:text-emerald-600 py-1">Home</Link>
          <Link href="/check" className="duration-300 hover:text-emerald-600 py-1">StuntCheck</Link>
          <Link href="/about" className="duration-300 hover:text-emerald-600 py-1">About Us</Link>
          {/* Conditional rendering based on auth state */}
          {loading ? (
            <div className="h-8 w-20 bg-gray-200 rounded-md animate-pulse"></div> // Simple loading placeholder
          ) : currentUser ? (
            <div className="relative" ref={userMenuRef}> 
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 cursor-pointer focus:outline-none"
              >
                {currentUser.photoURL ? (
                   <Image 
                      src={currentUser.photoURL} 
                      alt={currentUser.displayName || 'User'} 
                      width={32} 
                      height={32} 
                      className="rounded-full"
                      onError={(e) => { e.target.style.display = 'none'; /* Hide image on error */ }}
                   />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold">
                    {getInitials(currentUser.displayName || currentUser.email)}
                  </div>
                )}
                <span className="text-sm font-medium hidden lg:block">{currentUser.displayName || currentUser.email?.split('@')[0]}</span>
                <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                   {/* You can add more links here like Profile, Settings etc. */}
                   {/* <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link> */} 
                   <button 
                     onClick={handleLogout} 
                     className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                   >
                     Logout
                   </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className="duration-300 hover:text-green-600 hover:-translate-y-1 font-bold border rounded-md px-4 py-1 border-emerald-600">Login</Link>
          )}
        </div>

        {/* Mobile Menu Button */} 
        <div className="md:hidden flex items-center">
           {/* Show User Icon or Login Button on Mobile when menu is closed */} 
           {!isMobileMenuOpen && !loading && !currentUser && (
              <Link href="/login" className="text-sm font-semibold text-emerald-600 border border-emerald-600 px-3 py-1 rounded-md mr-3">Login</Link>
           )}
           {!isMobileMenuOpen && !loading && currentUser && (
               <div className="mr-3">
                 {currentUser.photoURL ? (
                    <Image 
                       src={currentUser.photoURL} 
                       alt="User" 
                       width={32} 
                       height={32} 
                       className="rounded-full"
                       onError={(e) => { e.target.style.display = 'none'; /* Hide image on error */ }}
                    />
                 ) : (
                   <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold">
                     {getInitials(currentUser.displayName || currentUser.email)}
                   </div>
                 )}
               </div>
           )}
           <button
             ref={buttonRef}
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="focus:outline-none cursor-pointer"
             aria-label="Toggle menu"
           >
             <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-800 text-xl`}></i>
           </button>
        </div>

        {/* Mobile Menu */} 
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden flex flex-col bg-white shadow-lg px-6 py-4 absolute top-20 right-4 rounded-lg z-40 text-gray-700 font-medium border border-gray-100"
          >
            {/* User Info in Mobile Menu */} 
            {currentUser && (
              <div className="flex items-center space-x-3 border-b pb-3 mb-3">
                {currentUser.photoURL ? (
                   <Image 
                      src={currentUser.photoURL} 
                      alt={currentUser.displayName || 'User'} 
                      width={40} 
                      height={40} 
                      className="rounded-full"
                      onError={(e) => { e.target.style.display = 'none'; /* Hide image on error */ }}
                   />
                 ) : (
                   <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center text-base font-semibold">
                     {getInitials(currentUser.displayName || currentUser.email)}
                   </div>
                 )}
                 <div>
                     <p className="text-sm font-semibold text-gray-800">{currentUser.displayName || currentUser.email?.split('@')[0]}</p>
                     <p className="text-xs text-gray-500">{currentUser.email}</p>
                 </div>
              </div>
            )}
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-emerald-600">Home</Link>
            <Link href="/check" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-emerald-600">StuntCheck</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-emerald-600">About Us</Link>
            {/* <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-emerald-600">Blog</Link> */} 
            {/* Conditional links for mobile */} 
            {currentUser ? (
               <button 
                 onClick={handleLogout} 
                 className="py-2 text-left text-red-600 hover:text-red-800 font-semibold mt-2 border-t pt-3"
               >
                 Logout
               </button>
            ) : (
              <>
                {/* <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-emerald-600">Register</Link> */} 
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-emerald-600 font-semibold mt-2 border-t pt-3">Login</Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
