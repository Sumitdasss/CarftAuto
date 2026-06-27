"use client";
import Fuse from "fuse.js";
import React, { useEffect, useMemo, useState } from "react";
import { FiSearch, FiCheckCircle } from "react-icons/fi";
import { carServicesAPI,bikeServicesAPI } from "../../DatA/Data";
import { useSearchParams } from "next/navigation";
import { FaCar, FaMotorcycle } from "react-icons/fa6";
import Link from "next/link";

const CarServicePage = () => {

  
 const searchParams = useSearchParams();

const type = searchParams.get("type") || "car";

const [search, setSearch] = useState("");
const [activeCategory, setActiveCategory] = useState("all");
const [active, setActive] = useState(type);

// current data
const currentServices =
  active === "car" ? carServicesAPI : bikeServicesAPI;

// search term
const searchTerm = search.trim();

// STEP 1: flatten services (optimized)
const allServices = useMemo(() => {
  return currentServices.flatMap((cat) =>
    (cat.services || []).map((service) => ({
      ...service,
      categoryId: cat.id,
      categoryTitle: cat.title,
      categoryCatagory: cat.catagory,
    }))
  );
}, [currentServices]);

// STEP 2: Fuse instance (optimized)
const fuse = useMemo(() => {
  return new Fuse(allServices, {
    keys: ["name", "categoryTitle", "categoryCatagory"],
    threshold: 0.4,
  });
}, [allServices]);

// STEP 3: search result
const searched = useMemo(() => {
  return searchTerm
    ? fuse.search(searchTerm).map((res) => res.item)
    : allServices;
}, [searchTerm, fuse, allServices]);

// STEP 4: group back
const grouped = useMemo(() => {
  return currentServices
    .map((cat) => ({
      ...cat,
      services: searched.filter((s) => s.categoryId === cat.id),
    }))
    .filter((cat) => cat.services.length > 0);
}, [currentServices, searched]);
const displayedCategories =
  activeCategory === "all"
    ? grouped
    : grouped.filter((cat) => cat.id === activeCategory);
  return (
<section className="min-h-screen bg-gradient-to-br from-[#07111F] via-[#0B1728] to-[#10213A] text-white py-16">

  {/* HEADER */}
  <div className="max-w-360 p-5 md:p-0 mx-auto text-center space-y-5">

    <h1 className="text-4xl md:text-5xl font-black uppercase bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
      {active === "bike"
        ? "Motorcycle Service Center"
        : "Car Service Center"}
    </h1>

    <p className="text-slate-400 text-sm md:text-base">
      Choose premium workshop services for your vehicle
    </p>

    {/* SEARCH */}
    <div className="flex items-center gap-2 max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-xl px-4 py-3">
      <FiSearch className="text-cyan-400" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search service (engine, brake, AC...)"
        className="bg-transparent w-full outline-none text-sm"
      />
    </div>

    {/* FILTER */}
    <div className="flex flex-wrap justify-center gap-2 pt-4">

      <button
        onClick={() => setActiveCategory("all")}
        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase border transition ${
          activeCategory === "all"
            ? "bg-cyan-500 text-black border-cyan-500"
            : "border-cyan-500/20 text-slate-400 hover:text-cyan-400"
        }`}
      >
        All
      </button>

      {displayedCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase border transition ${
            activeCategory === cat.id
              ? "bg-cyan-500 text-black border-cyan-500"
              : "border-cyan-500/20 text-slate-400 hover:text-cyan-400"
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>

    {/* CAR BIKE TOGGLE */}
    <div className="flex justify-center md:justify-end">
      <div className="mt-6 border border-cyan-500/20 bg-white/5 backdrop-blur-xl rounded-xl p-2">

        <button
          onClick={() => setActive("car")}
          className={`px-6 py-2 rounded-lg text-xs font-bold uppercase transition ${
            active === "car"
              ? "bg-cyan-500 text-black"
              : "text-slate-400 hover:text-cyan-400"
          }`}
        >
          <FaCar className="inline mr-2" />
          Car
        </button>

        <button
          onClick={() => setActive("bike")}
          className={`px-6 py-2 rounded-lg text-xs font-bold uppercase transition ${
            active === "bike"
              ? "bg-cyan-500 text-black"
              : "text-slate-400 hover:text-cyan-400"
          }`}
        >
          <FaMotorcycle className="inline mr-2" />
          Bike
        </button>

      </div>
    </div>
  </div>

  {/* CONTENT */}
  <div className="max-w-360 mx-auto mt-14 p-5 md:p-0 space-y-12">

    {displayedCategories.map((category, index) => (
      <div key={index} className="mb-10">

        <h2 className="text-xl md:text-2xl font-bold uppercase text-cyan-400 mb-6">
          {category.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {category.services.map((service, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-cyan-500/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-[220px] object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent" />
              </div>

              <div className="p-5">

                <div className="flex items-center text-slate-200 group-hover:text-white mb-3">
                  <FiCheckCircle className="text-cyan-400 mr-2" />
                  <span className="text-sm font-semibold">
                    {service.name}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 font-bold text-lg">
                    ৳ {service.price.toLocaleString()}
                  </span>

                  <span className="text-xs text-slate-500 uppercase">
                    Starting Price
                  </span>
                </div>

                <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-500" />
<Link href={"/Booking"}>
                <button
                  className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  Book Service
                </button>
</Link>
              </div>

            </div>
          ))}

        </div>

      </div>
    ))}

  </div>
</section>
  );
};

export default CarServicePage;