"use client";
import {servicesData} from "../../../DatA/Data"
import React, { useState } from "react";
import {
  FiArrowRight,
  
  FiCheckCircle,
} from "react-icons/fi";
import { FaCar, FaMotorcycle } from "react-icons/fa6";

const CoreServices = () => {
  const [activeTab, setActiveTab] = useState("car");

  

  return (
    <section className="relative py-24 bg-[#070A10] text-white overflow-hidden">

      {/* REAL depth background (important fix) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,120,0,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,150,255,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">

          <span className="text-xs tracking-[0.35em] text-orange-400 uppercase">
            Workshop Services
          </span>

          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
            Precision Garage System
          </h2>

          <p className="text-slate-400 text-sm">
            High level diagnostics and mechanical engineering services.
          </p>

          {/* Tabs */}
          <div className="mt-6 inline-flex bg-black/60 border border-white/10 rounded-xl p-1">

            <button
              onClick={() => setActiveTab("car")}
              className={`px-6 py-2 rounded-lg text-xs font-bold uppercase transition ${
                activeTab === "car"
                  ? "bg-orange-500 text-black"
                  : "text-slate-400"
              }`}
            >
              <FaCar className="inline mr-2" />
              Car
            </button>

            <button
              onClick={() => setActiveTab("bike")}
              className={`px-6 py-2 rounded-lg text-xs font-bold uppercase transition ${
                activeTab === "bike"
                  ? "bg-orange-500 text-black"
                  : "text-slate-400"
              }`}
            >
              <FaMotorcycle className="inline mr-2" />
              Bike
            </button>

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {servicesData[activeTab].map((item) => (
            <div
              key={item.id}
              className="group relative p-6 rounded-xl bg-black/40 border border-white/10 hover:border-orange-500/30 transition"
            >

              {/* icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition">
                {item.icon}
              </div>

              {/* title */}
              <h3 className="mt-5 text-base font-bold uppercase group-hover:text-orange-400">
                {item.title}
              </h3>

              {/* desc */}
              <p className="mt-2 text-sm text-slate-400">
                {item.desc}
              </p>

              {/* features */}
              <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-400 uppercase">
                    <FiCheckCircle className="text-orange-400" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* button */}
              <button className="mt-6 w-full py-3 rounded-lg bg-orange-500 text-black font-bold text-xs uppercase flex items-center justify-center gap-2 hover:scale-[1.02] transition">
                Book Service <FiArrowRight />
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CoreServices;