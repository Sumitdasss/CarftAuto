"use client"

import React, { useState } from 'react';
import { FiSliders, FiCheckCircle, FiShoppingCart, FiStar } from 'react-icons/fi';
import { FaCar, FaMotorcycle } from 'react-icons/fa6';

const ShopWithSelector = () => {
  const [vehicleType, setVehicleType] = useState('car');
  const [selections, setSelections] = useState({ year: '', make: '', model: '' });
  const [isFiltered, setIsFiltered] = useState(false);

  // Demo Parts Data
  const allParts = [
    { id: 1, type: 'car', make: 'bmw', model: 'm5', title: "BMW M5 Carbon Ceramic Brake Pads", price: "$299.00", img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400", badge: "Genuine" },
    { id: 2, type: 'bike', make: 'yamaha', model: 'r15', title: "Yamaha R15 High-Performance Racing Exhaust", price: "$189.00", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400", badge: "10% OFF" },
    { id: 3, type: 'car', make: 'toyota', model: 'generic', title: "Toyota Genuine Synthetic Engine Oil V8", price: "$75.00", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400", badge: "OEM Premium" },
    { id: 4, type: 'bike', make: 'yamaha', model: 'r15', title: "Yamaha R15 V4 Iridium Spark Plug", price: "$25.50", img: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400", badge: "New Arrival" }
  ];

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    if (selections.year && selections.make && selections.model) {
      setIsFiltered(true);
    }
  };

  const handleReset = () => {
    setSelections({ year: '', make: '', model: '' });
    setIsFiltered(false);
  };

  // Filter Logic
  const displayedParts = isFiltered 
    ? allParts.filter(part => part.type === vehicleType && part.make === selections.make && part.model === selections.model)
    : allParts;

  return (
    <section className="bg-slate-950 text-white py-20 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs text-orange-500 font-extrabold tracking-widest uppercase">OEM & Aftermarket Store</span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Explore Auto Parts</h2>
          <p className="text-slate-400 text-sm">Filter parts specifically engineered for your exact car or motorcycle model.</p>
        </div>

        {/* 🔍 Embedded Advanced Vehicle Selector */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-2xl mb-12 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <FiSliders className="text-orange-500 text-xl" />
              <span className="text-sm font-bold uppercase tracking-wider">Garage Filter: Match Your Vehicle</span>
            </div>
            
            {/* Car/Bike Toggle */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-white/5 w-full lg:w-auto">
              <button
                onClick={() => { setVehicleType('car'); handleReset(); }}
                className={`flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-xs font-bold uppercase transition-all ${vehicleType === 'car' ? 'bg-orange-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                <FaCar /> Car Parts
              </button>
              <button
                onClick={() => { setVehicleType('bike'); handleReset(); }}
                className={`flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-xs font-bold uppercase transition-all ${vehicleType === 'bike' ? 'bg-orange-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                <FaMotorcycle /> Bike Parts
              </button>
            </div>
          </div>

          {/* Filter Form */}
          <form onSubmit={handleFilterSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="space-y-1.5">
              <label className="text-xs text-slate-400 uppercase font-semibold">Year</label>
              <select 
                value={selections.year}
                onChange={(e) => setSelections({...selections, year: e.target.value})}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-orange-500" required
              >
                <option value="">Select Year</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-slate-400 uppercase font-semibold">Brand</label>
              <select 
                value={selections.make}
                onChange={(e) => setSelections({...selections, make: e.target.value})}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-orange-500" required
              >
                <option value="">Select Brand</option>
                {vehicleType === 'car' ? (
                  <>
                    <option value="bmw">BMW</option>
                    <option value="toyota">Toyota</option>
                  </>
                ) : (
                  <>
                    <option value="yamaha">Yamaha</option>
                  </>
                )}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-slate-400 uppercase font-semibold">Model</label>
              <select 
                value={selections.model}
                onChange={(e) => setSelections({...selections, model: e.target.value})}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-orange-500" required
              >
                <option value="">Select Model</option>
                {selections.make === 'bmw' && <option value="m5">M5 F90</option>}
                {selections.make === 'yamaha' && <option value="r15">R15 V4</option>}
                {selections.make === 'toyota' && <option value="generic">Camry / Corolla</option>}
              </select>
            </div>

            <div className="flex gap-2">
              {isFiltered && (
                <button 
                  type="button" 
                  onClick={handleReset}
                  className="w-1/3 rounded-xl border border-white/10 bg-white/5 text-xs font-bold uppercase hover:bg-white/10 transition-all"
                >
                  Reset
                </button>
              )}
              <button 
                type="submit"
                className={`flex-1 flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-amber-400 transition-all shadow-lg shadow-orange-500/10`}
              >
                <FiCheckCircle /> Filter Parts
              </button>
            </div>
          </form>
        </div>

        {/* 🛒 Dynamic Parts Grid Output */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedParts.length > 0 ? (
            displayedParts.map((part,index) => (
              <div key={index} className="group bg-slate-900 border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-orange-500/30 transition-all">
                <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                  <img src={part.img} alt={part.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 backdrop-blur-md bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold text-[9px] tracking-widest uppercase px-2 py-1 rounded-md">
                    {part.badge}
                  </span>
                </div>

                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex text-amber-400 text-xs"><FiStar className="fill-current"/><FiStar className="fill-current"/><FiStar className="fill-current"/><FiStar className="fill-current"/><FiStar className="fill-current"/></div>
                    <h4 className="font-bold text-sm tracking-tight text-slate-200 uppercase line-clamp-2 group-hover:text-white">{part.title}</h4>
                    <p className="text-base font-black text-orange-500">{part.price}</p>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3 text-xs font-bold uppercase tracking-wider text-slate-200 hover:bg-orange-500 hover:text-slate-950 hover:border-transparent transition-all duration-300">
                    <FiShoppingCart /> Add To Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-slate-500 border border-dashed border-white/10 rounded-2xl">
              No parts found for the selected vehicle filter. Try resetting the filter.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ShopWithSelector;