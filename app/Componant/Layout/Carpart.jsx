"use client"; // 👈 Next.js-এর জন্য এই ডিরেক্টিভটি অবশ্যই উপরে রাখবেন

import React from 'react';
import { FiShoppingCart, FiHeart, FiShuffle, FiEye } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { carPartsAPI } from "../../../DatA/Data";
import useStore from './Store/store';
// Swiper Styles Import (Next.js-এ এগুলো ইমপোর্ট করা জরুরি)
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const ProductSlider = () => {
  const {addTocart}=useStore()
  return (
    <div className="bg-[radial-gradient(circle_at_top,_#0f2d46,_#07111F_45%,_#020617_100%)]  py-12 flex items-center justify-center">
      
      {/* 🛠️ এখানে max-w-7xl এর ভেতর থেকে grid কলামগুলো ফেলে দেওয়া হয়েছে */}
      <div className="w-full max-w-360 mx-auto p-4 sm:p-8 relative">
        
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className=""
        >
          {carPartsAPI.map((item, index) => (
 <SwiperSlide
  key={index}
  className="group relative overflow-hidden rounded-2xl border border-teal-500/10 hover:border-teal-400/40 transition-all duration-500  hover:shadow-[0_0_30px_rgba(20,184,166,0.1)]"
  style={{
    background: "linear-gradient(150deg, #0a1628 0%, #0d1a2e 35%, #060c18 100%)"
  }}
>
  {/* 🌌 Dynamic Teal Glow Effect */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.08)_0%,_transparent_65%)]" />

  {/* Action Icons (Heart, Shuffle, Eye) */}
  <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
    <button className="w-9 h-9 rounded-lg bg-white/5 border border-teal-500/20 backdrop-blur-md text-slate-300 hover:text-white hover:bg-teal-500 hover:border-teal-400 transition-all duration-300">
      <FiHeart className="mx-auto" />
    </button>
    <button className="w-9 h-9 rounded-lg bg-white/5 border border-teal-500/20 backdrop-blur-md text-slate-300 hover:text-white hover:bg-teal-500 hover:border-teal-400 transition-all duration-300">
      <FiShuffle className="mx-auto" />
    </button>
    <button className="w-9 h-9 rounded-lg bg-white/5 border border-teal-500/20 backdrop-blur-md text-slate-300 hover:text-white hover:bg-teal-500 hover:border-teal-400 transition-all duration-300">
      <FiEye className="mx-auto" />
    </button>
  </div>

  {/* 📸 Image Area */}
  <div className="relative p-6 flex items-center justify-center"
    style={{ background: "radial-gradient(ellipse at center, rgba(20,184,166,0.1) 0%, transparent 70%)" }}
  >
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
    />
  </div>

  {/* 📝 Content Area */}
  <div className="p-5 border-t border-teal-500/8 bg-black/20">
    {/* Product Type */}
    <p className="text-teal-400 text-xs uppercase tracking-widest mb-1.5 font-mono font-semibold">
      {item.type}
    </p>

    {/* Title */}
    <h3 className="text-slate-100 font-bold text-base line-clamp-2 min-h-[48px] uppercase tracking-tight group-hover:text-teal-300 transition-colors duration-300">
      {item.title}
    </h3>

    {/* Price */}
    <div className="mt-2 text-[18px] font-black text-orange-400 font-mono tracking-tight">
      {item.price}
    </div>

    {/* ⚡ Action Buttons */}
    <div className="grid grid-cols-2 gap-3 mt-5">
      <Link
  href={`/DitailPage/${item.id}`}
  className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold text-xs uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all duration-300 inline-flex justify-center items-center z-50 relative"
>
  View
</Link>
      <button  onClick={() => {
    
    addTocart(item);
  }} className="relative z-[100]
    py-3 
    flex 
    items-center 
    bg-gradient-to-br 
    from-teal-600 
    to-cyan-600 
    justify-center 
    gap-1.5 
    rounded-xl 
    text-slate-950 
    font-black 
    text-xs 
    uppercase 
    tracking-wider 
    transition-all 
    duration-300 
    shadow-lg 
    shadow-teal-500/10"
       
      >
        <FiShoppingCart className="text-sm stroke-[3]" /> Add Cart
      </button>
    </div>
  </div>
</SwiperSlide>
          ))}
        </Swiper>

        {/* 🎛️ Custom Navigation Buttons (Optional - Jodi use korte চান) */}
        <div className="swiper-button-prev-custom hidden"></div>
        <div className="swiper-button-next-custom hidden"></div>

      </div>
    </div>
  );
};

export default ProductSlider;