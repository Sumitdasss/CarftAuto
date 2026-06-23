import React from "react";
import { FiCalendar, FiCpu, FiPhoneCall } from "react-icons/fi";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white flex items-center">

      {/* 🎥 Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-105 opacity-60"
        >
          <source
            src="https://www.shutterstock.com/shutterstock/videos/3717987437/preview/stock-footage-mechanic-repairing-car-engine-in-auto-workshop.webm"
            type="video/mp4"
          />
        </video>

        {/* subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_90%)]" />
      </div>

      {/* 🌑 Balanced overlays (not too dark) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/60 z-10" />

      {/* ✨ Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-orange-500/20 blur-[160px] rounded-full z-10" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-amber-500/10 blur-[180px] rounded-full z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl space-y-7">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-black/40 backdrop-blur-xl text-[11px] uppercase tracking-[0.25em] text-orange-400 shadow-lg shadow-orange-500/10">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            Premium Automotive Engineering Studio
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] uppercase tracking-tight">
            Precision Engineered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-white">
              Car & Bike Care
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
            Advanced diagnostics, ECU tuning, performance upgrades and OEM parts marketplace —
            built for true automotive enthusiasts.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4">

            <button className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-black font-bold overflow-hidden hover:scale-[1.03] transition">
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
              <FiCalendar className="relative z-10" />
              <span className="relative z-10 uppercase tracking-wide">
                Book Service
              </span>
            </button>

            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-orange-500/30 transition">
              <FiCpu className="text-orange-500" />
              <span className="uppercase tracking-wide">Shop Parts</span>
            </button>

          </div>

          {/* Emergency */}
          <div className="pt-6">
            <a
              href="tel:+880123456789"
              className="group flex items-center gap-4 w-fit px-6 py-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 hover:border-red-500/40 transition"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-70 animate-ping" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
              </span>

              <FiPhoneCall className="animate-pulse group-hover:scale-110 transition" />
              <span className="uppercase tracking-widest text-xs">
                24/7 Emergency Support
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80" />
    </section>
  );
};

export default HeroBanner;