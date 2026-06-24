import React from "react";
import { FiCalendar, FiCpu, FiPhoneCall } from "react-icons/fi";

const HeroBanner = () => {
  return (
 <section className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-black text-white">

  {/* 🎥 Background Video */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-60"
    >
      <source
        src="https://www.shutterstock.com/shutterstock/videos/3717987437/preview/stock-footage-mechanic-repairing-car-engine-in-auto-workshop.webm"
        type="video/mp4"
      />
    </video>

    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,black_90%)]" />
  </div>

  {/* Overlays */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/60 z-10" />

  {/* Glow */}
  <div className="absolute -top-24 -left-24 md:-top-32 md:-left-32 w-64 h-64 md:w-[500px] md:h-[500px] bg-orange-500/20 blur-[120px] rounded-full z-10" />

  <div className="absolute -bottom-24 -right-24 md:-bottom-32 md:-right-32 w-64 h-64 md:w-[500px] md:h-[500px] bg-amber-500/10 blur-[150px] rounded-full z-10" />

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8 h-full min-h-screen flex items-center py-24 lg:py-0">

    <div className="max-w-3xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-black/40 backdrop-blur-xl text-[10px] sm:text-xs uppercase tracking-[0.2em] text-orange-400 mb-6">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        Premium Automotive Engineering Studio
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1] uppercase">
        Precision Engineered
        <br />
        <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-white bg-clip-text text-transparent">
          Car & Bike Care
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
        Advanced diagnostics, ECU tuning, performance upgrades and OEM parts marketplace — built for true automotive enthusiasts.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">

        <button className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-black font-bold overflow-hidden hover:scale-105 transition-all duration-300">
          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
          <FiCalendar className="relative z-10" />
          <span className="relative z-10 uppercase text-sm">
            Book Service
          </span>
        </button>

        <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
          <FiCpu className="text-orange-500" />
          <span className="uppercase text-sm">
            Shop Parts
          </span>
        </button>

      </div>

      {/* Emergency */}
      <div className="mt-8">
        <a
          href="tel:+880123456789"
          className="group inline-flex items-center gap-4 px-5 py-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 hover:border-red-500/40 transition-all duration-300"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-70 animate-ping" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
          </span>

          <FiPhoneCall className="group-hover:scale-110 transition" />

          <span className="uppercase tracking-wider text-xs">
            24/7 Emergency Support
          </span>
        </a>
      </div>

    </div>

  </div>

  {/* Bottom Line */}
  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

</section>
  );
};

export default HeroBanner;