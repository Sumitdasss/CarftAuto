"use client"

import  { useState } from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX, FiCalendar } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa6';
import Link from 'next/link';
import  useStore  from './Componant/Layout/Store/store';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = useState(false);
 // Demo state for items in cart
const {cart}=useStore()
 const totalItems = cart.length;

  return (
     <>
      {/* ✅ Sidebar — Header এর সম্পূর্ণ বাইরে */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex lg:hidden">
          
          {/* Sidebar Panel */}
          <div
            className="w-90 overflow-y-auto px-4 py-6 bg-[radial-gradient(circle_at_left,_#0f4c75,_#081c2c,_#000000)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Logo + Close */}
            <div className="flex justify-between items-center mb-4">
              <a href="#" className="flex items-center ">
                <img src="/2.png" alt="" className="w-25 h-25" />
                <span className="text-xl font-bold tracking-tight uppercase bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Craft<span className="text-red-500">Motors</span>
                </span>
              </a>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <FiX className="text-[20px] text-white cursor-pointer" />
              </button>
            </div>

            {/* Nav Links */}
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-4 py-2.5 text-base font-medium text-slate-300 hover:text-orange-500 transition-colors">
              Home
            </a>
            <a href="/Service?type=car" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-4 py-2.5 text-base font-medium text-slate-300 hover:text-orange-500 transition-colors">
              Car Services
            </a>
            <a href="/Service?type=bike" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-4 py-2.5 text-base font-medium text-slate-300 hover:text-orange-500 transition-colors">
              Bike Services
            </a>
                <Link href={"/Shop"}>
            <button onClick={() => setIsMobileMenuOpen(false)}  className="block rounded-lg px-4 py-2.5 text-base font-medium text-slate-300 hover:text-orange-500 transition-colors">
              Shop (Parts)
            </button>
  </Link>
            {/* Gallery Dropdown */}
            <div className="w-full">
              <button
                onClick={() => setIsMobileMenuOpen2(!isMobileMenuOpen2)}
                className="flex w-full items-center justify-between px-4 py-2.5 text-base font-medium text-slate-300 hover:text-orange-500 transition-colors outline-none"
              >
                <span>Gallery</span>
                <FaChevronDown className={`text-[12px] transition-transform duration-300 ${isMobileMenuOpen2 ? "rotate-180 text-orange-500" : ""}`} />
              </button>
              <div className={`pl-4 overflow-hidden border-l border-white/5 transition-all duration-300 ${isMobileMenuOpen2 ? "max-h-40 opacity-100 my-1" : "max-h-0 opacity-0"}`}>
                <a href="#" className="block py-2 text-sm text-slate-400 hover:text-orange-500 transition-all">Photo Gallery</a>
                <a href="#" className="block py-2 text-sm text-slate-400 hover:text-orange-500 transition-all">Video Gallery</a>
              </div>
            </div>

            <a href="#" className="block rounded-lg px-4 py-2.5 text-base font-medium text-slate-300 hover:text-orange-500 transition-colors">
              About Us
            </a>
            <a href="#" className="block rounded-lg px-4 py-2.5 text-base font-medium text-slate-300 hover:text-orange-500 transition-colors">
              Contact
            </a>

            {/* Bottom Buttons */}
            <div className="mt-6 flex flex-col gap-2 border-t border-white/5 pt-6">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform">
                <FiUser className="h-4 w-4" />
                <span>Login / Register</span>
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform">
                <FiHeart className="h-4 w-4" />
                <span>Wishlist</span>
              </button>
   <Link href={"/Cart"} className='relative'>
              <button className="flex  w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform">
                <FiShoppingCart className="h-4 w-4" />
                <span>Cart</span>

              </button>
              <span className="absolute -top-1 z-30 -right-1 flex items-center justify-center min-w-[18px] h-[18px] rounded-full bg-red-600 text-white text-[10px] font-bold">
                {totalItems}
              </span>
              </Link> 
            </div>
          </div>

          {/* Dark Overlay — ক্লিক করলে বন্ধ হবে */}
          <div
            className="flex-1 bg-black/60"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}

   
      <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-[radial-gradient(circle_at_top,_#0f4c75,_#081c2c,_#000000)] backdrop-blur-md text-white">
        <div className="mx-auto max-w-360">
          <div className="flex h-20 items-center justify-between gap-4">

            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <img src="/2.png" alt="" className="w-25 h-25" />
              <a href="#" className="hidden md:block">
                <span className="text-xl font-bold tracking-tight uppercase bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Craft<span className="text-cyan-400">Motors</span>
                </span>
              </a>
            </div>

            {/* Search */}
            <div className="max-w-md relative group">
              <input
                type="text"
                placeholder="Search premium parts (e.g., Brake Pads, V8 Engine)..."
                className="md:w-60 w-full rounded-full bg-white/5 border border-white/10 py-2.5 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-400 outline-none backdrop-blur-sm transition-all duration-300 focus:border-orange-500/50 focus:bg-white/10 focus:ring-2 focus:ring-orange-500/20"
              />
              <FiSearch className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors duration-300" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
              <a href="/" className="hover:text-red-500 transition-colors duration-200">Home</a>

              <div className="relative group/menu cursor-pointer py-2">
                <span className="flex hover:text-red-500 items-center gap-1.5 text-slate-300 transition-colors duration-200">
                  Services <FaChevronDown className="text-[10px] group-hover/menu:rotate-180 transition-transform duration-300" />
                </span>
                <div className="absolute top-6 left-0 mt-1 w-48 rounded-xl border border-white/10 bg-slate-900 p-2 shadow-2xl opacity-0 scale-95 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:scale-100 group-hover/menu:pointer-events-auto transition-all duration-200">
                  <a href="/Service?type=car" className="block rounded-lg px-4 py-2 text-slate-300 hover:bg-white/5 hover:text-orange-500 transition-all">Car Repair</a>
                  <a href="/Service?type=bike" className="block rounded-lg px-4 py-2 text-slate-300 hover:bg-white/5 hover:text-orange-500 transition-all">Motorcycle Repair</a>
                </div>
              </div>
    <Link href={"/Shop"}>
              <button className="text-slate-300 hover:text-red-500 transition-colors duration-200">Shop (Parts)</button>
  </Link>
              <div className="relative group/menu cursor-pointer py-2">
                <span className="flex hover:text-red-500 items-center gap-1.5 text-slate-300 transition-colors duration-200">
                  Gallery <FaChevronDown className="text-[10px] group-hover/menu:rotate-180 transition-transform duration-300" />
                </span>
                <div className="absolute top-6 left-0 mt-1 w-48 rounded-xl border border-white/10 bg-slate-900 p-2 shadow-2xl opacity-0 scale-95 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:scale-100 group-hover/menu:pointer-events-auto transition-all duration-200">
                  <a href="#" className="block rounded-lg px-4 py-2 text-slate-300 hover:bg-white/5 hover:text-orange-500 transition-all">Photo Gallery</a>
                  <a href="#" className="block rounded-lg px-4 py-2 text-slate-300 hover:bg-white/5 hover:text-orange-500 transition-all">Video Gallery</a>
                </div>
              </div>

              <a href="#" className="text-slate-300 hover:text-red-500 transition-colors duration-200">About Us</a>
              <a href="#" className="text-slate-300 hover:text-red-500 transition-colors duration-200">Contact</a>
            </nav>

            {/* User Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="relative p-2 hidden md:block text-slate-400 hover:text-white transition-all duration-200 hover:scale-105">
                <FiHeart className="h-5 w-5" />
              </button>
              <Link href={"/Cart"} className='relative'>
              <button className="relative hidden md:block p-2 text-slate-400 hover:text-white transition-all duration-200 hover:scale-105">
                <FiShoppingCart className="h-5 w-5" />
              </button>
             <span className="absolute hidden  md:block -top-1 z-30 -right-1    min-w-[18px] h-[18px] rounded-full bg-red-600 text-white text-[10px] font-bold">
               <p className='flex items-center justify-center'>{totalItems}</p> 
              </span>
          </Link>
              <button className="group relative hidden md:flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-black font-bold overflow-hidden hover:scale-[1.03] transition">
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
                <FiCalendar className="relative z-10" />
                <span className="relative z-10 uppercase tracking-wide">Book Service</span>
              </button>
            

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-slate-400 hover:text-white cursor-pointer lg:hidden transition-colors"
              >
                <FiMenu className="h-6 w-6" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;