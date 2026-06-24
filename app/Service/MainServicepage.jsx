"use client";
import Fuse from "fuse.js";
import React, { useEffect, useMemo, useState } from "react";
import { FiSearch, FiCheckCircle } from "react-icons/fi";
import { carServicesAPI,bikeServicesAPI } from "../../DatA/Data";
import { useSearchParams } from "next/navigation";
import { FaCar, FaMotorcycle } from "react-icons/fa6";

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

  return (
    <section className="min-h-screen  bg-[#05070d] text-white py-16">

      {/* HEADER */}
      <div className="max-w-[1440px] p-5 md:p-0 mx-auto  text-center space-y-5">

        <h1 className="text-4xl md:text-5xl font-black uppercase">
         {active === "bike"
          ? "Motorcycle Service Center"
          : "Car Service Center"}
        </h1>

        <p className="text-slate-400 text-sm md:text-base">
          Choose premium workshop services for your vehicle
        </p>

        {/* SEARCH */}
        <div className="flex items-center gap-2 max-w-xl mx-auto bg-black/50 border border-white/10 rounded-xl px-4 py-3">
          <FiSearch className="text-slate-400" />
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
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase border ${
              activeCategory === "all"
                ? "bg-orange-500 text-black border-orange-500"
                : "border-white/10 text-slate-400"
            }`}
          >
            All
          </button>

          {grouped.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase border transition ${
                activeCategory === cat.id
                  ? "bg-orange-500 text-black border-orange-500"
                  : "border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

<div className="flex justify-end">
        <div className="mt-6   border border-white/10 rounded-xl p-2">

            <button
              onClick={() => setActive("car")}
              className={`px-6 py-2 rounded-lg text-xs font-bold uppercase transition ${
                active === "car"
                  ? "bg-orange-500 text-black"
                  : "text-slate-400"
              }`}
            >
              <FaCar className="inline mr-2" />
              Car
            </button>

            <button
              onClick={() => setActive("bike")}
              className={`px-6 py-2 rounded-lg text-xs font-bold uppercase transition ${
                active === "bike"
                  ? "bg-orange-500 text-black"
                  : "text-slate-400"
              }`}
            >
             <FaMotorcycle className="inline mr-2" />
              Bike
            </button>

          </div>
          </div>
      </div>
 
      {/* CONTENT */}
      <div className="max-w-360 mx-auto  mt-14 p-5 md:p-0 space-y-12">

        {grouped.map((category,index) => (
          <div key={index}>

            {/* CATEGORY TITLE */}
            <h2 className="text-xl md:text-2xl font-bold uppercase text-orange-400 mb-6">
              {category.title}
            </h2>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              {category.services.map((service, i) => (
                <div
                  key={i}
                  className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition"
                >

                  {/* SERVICE NAME */}
                  <div className="flex justify-between items-center gap-2 text-slate-300 group-hover:text-white">
                    
                    <span className="text-sm flex items-center font-medium">
                      <FiCheckCircle className="text-orange-400 mr-2" />
                      {service.name}
                    </span>
                    <div className="flex items-center justify-between mt-3">
  <span className="text-orange-400 font-bold">
    ৳ {service.price.toLocaleString()}
  </span>

  <span className="text-xs text-slate-500">
    Starting Price
  </span>
</div>
                  </div>

                  {/* hover line */}
                  <div className="mt-3 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-transparent transition-all duration-300" />

                  {/* BOOK BUTTON */}
                  <button className="mt-4 w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide
                    bg-white/5 border border-white/10
                    hover:bg-orange-500 hover:text-black hover:border-orange-500
                    transition-all duration-300">
                    Book Service
                  </button>

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