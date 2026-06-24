"use client";
import {carServicesAPI,bikeServicesAPI} from "../../../DatA/Data"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useState } from "react";
import {
  FiArrowRight,
  
  FiCheckCircle,
} from "react-icons/fi";
import { FaCar, FaMotorcycle } from "react-icons/fa6";

const CoreServices = () => {
  const [activeTab, setActiveTab] = useState("car");
const [hover,setHover]=useState(null)
  
const currentServices =
  activeTab === "car"
    ? carServicesAPI
    : bikeServicesAPI;
  

  return (
<section className="relative py-24 bg-[#07111F] text-white overflow-hidden">

  {/* Background Effects */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.10),transparent_60%)]" />

  <div className="relative max-w-360 mx-auto px-6">

    {/* Header */}
    <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">

      <span className="text-xs tracking-[0.35em] text-cyan-400 uppercase">
  Service Packages
</span>

<h2 className="text-4xl md:text-5xl font-black uppercase leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent">
  Premium Service Packages
</h2>

<p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
  Explore our complete range of car and motorcycle maintenance, repair,
  diagnostics, detailing, and performance upgrade packages tailored for
  every vehicle.
</p>

      {/* Tabs */}
      <div className="mt-6 inline-flex bg-white/5 backdrop-blur-xl border border-cyan-500/10 rounded-xl p-1">

        <button
          onClick={() => setActiveTab("car")}
          className={`px-6 py-2 rounded-lg text-xs font-bold uppercase transition-all duration-300 ${
            activeTab === "car"
              ? "bg-cyan-500 text-black"
              : "text-slate-400 hover:text-cyan-400"
          }`}
        >
          <FaCar className="inline mr-2" />
          Car
        </button>

        <button
          onClick={() => setActiveTab("bike")}
          className={`px-6 py-2 rounded-lg text-xs font-bold uppercase transition-all duration-300 ${
            activeTab === "bike"
              ? "bg-cyan-500 text-black"
              : "text-slate-400 hover:text-cyan-400"
          }`}
        >
          <FaMotorcycle className="inline mr-2" />
          Bike
        </button>

      </div>

    </div>

    <div className="relative group">
   <Swiper
  modules={[Autoplay,Navigation]}
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
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 3,
    },
  }}
  className="pb-14"
>
  {currentServices.map((item, index) => (
  <SwiperSlide key={index} className="h-auto">
    <div onMouseEnter={() => setHover(item.id)}
      onMouseLeave={() => setHover(null)} className="group h-full relative overflow-hidden p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-cyan-500/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300">

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

      {/* Image */}
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-52 object-cover rounded-xl mb-5"
        />
      )}

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="relative z-10 mt-5 text-lg font-bold uppercase group-hover:text-cyan-400 transition">
        {item.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-3 text-sm text-slate-400 leading-relaxed">
        {item.desc}
      </p>

      {/* Services */}
      <ul className="relative z-10 mt-5 space-y-3 border-t border-white/10 pt-5">
      {item.services.slice(0, 4).map((service, i) => (
  <li
    key={i}
    onMouseEnter={() => setHover(`${item.id}-${i}`)}
    onMouseLeave={() => setHover(null)}
    className={`flex items-center gap-2 text-xs uppercase transition-all duration-300 ${
      hover === `${item.id}-${i}`
        ? "text-cyan-400 translate-x-2"
        : "text-slate-300"
    }`}
  >
    <FiCheckCircle
      className={
        hover === `${item.id}-${i}`
          ? "text-cyan-400"
          : "text-slate-500"
      }
    />
    <span>{service.name}</span>
  </li>
))}
      </ul>

      {/* Button */}
      <button className="relative z-10 mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
        Book Service
        <FiArrowRight />
      </button>

    </div>
  </SwiperSlide>
))}
</Swiper>
   <button className="swiper-button-prev-custom absolute left-4 top-[45%] -translate-y-1/2 z-50 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white transition md:opacity-0 md:group-hover:opacity-100 duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                {/* Next Button */}
                <button className="swiper-button-next-custom absolute right-4 top-[45%] -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white md:opacity-0 md:group-hover:opacity-100 duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                </div>
  </div>
</section>
  );
};

export default CoreServices;