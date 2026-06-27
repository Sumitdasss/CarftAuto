"use client"
import React, { useState } from 'react'

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800", title: "Engine Overhaul", category: "Engine Service", description: "Complete engine rebuild of Toyota Corolla with genuine parts" },
  { url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800", title: "Car Detailing", category: "Exterior Care", description: "Premium detailing and ceramic coating service" },
  { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", title: "Brake System Repair", category: "Safety Service", description: "Full brake pad, disc and caliper replacement" },
  { url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800", title: "Workshop Interior", category: "Our Facility", description: "State-of-the-art equipped workshop in Dhaka" },
  { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", title: "Bike Service", category: "Two Wheeler", description: "Premium motorcycle maintenance and performance tuning" },
  { url: "https://images.unsplash.com/photo-1605559424843-9e4c228d1b5f?w=800", title: "Happy Customers", category: "Happy Clients", description: "Our valued customers after service completion" },
  { url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800", title: "Oil Change", category: "Engine Service", description: "Complete oil and filter replacement service" },
  { url: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800", title: "Tire Change", category: "Safety Service", description: "All-season and performance tire installation" },
  { url: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800", title: "Paint Work", category: "Exterior Care", description: "Full-body respray and dent repair" },
]

const categories = ["All", "Engine Service", "Exterior Care", "Safety Service", "Our Facility", "Two Wheeler", "Happy Clients"]

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)

  const filtered = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br 
from-blue-600 
via-cyan-500 
to-teal-400 px-4 relative overflow-hidden">
      <div className="max-w-360 mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 border border-blue-500/20 bg-gradient-to-r from-blue-950 to-zinc-900 px-6 py-3 rounded-2xl mb-5">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="uppercase text-blue-400 text-sm tracking-[3px] font-medium">Premium Showcase</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-white mb-4">
            Gallery
          </h2>
          <p className="text-white text-lg max-w-lg mx-auto">
            Capturing excellence in every service — where precision meets passion
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 border
                ${activeFilter === cat 
                  ? "bg-white text-black border-white shadow-xl shadow-blue-500/20 scale-105" 
                  : "bg-zinc-900 text-zinc-400 border-zinc-700 hover:border-blue-500 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/3] shadow-2xl border border-zinc-800 hover:border-blue-600 transition-all duration-500"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
              />

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-widest bg-blue-600 text-white px-3 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* View Button */}
              <div className="absolute top-6 right-6 w-11 h-11 rounded-2xl bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:border-blue-400">
                <span className="text-xl">↗</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-10">
          Tap on any image to view in full detail
        </p>
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-700 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 z-20 bg-black/80 hover:bg-red-600 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl text-white transition-all hover:scale-110"
            >
              ✕
            </button>

            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="w-full max-h-[70vh] object-contain bg-black" 
            />

            <div className="p-8 sm:p-10">
              <p className="uppercase text-blue-400 text-xs tracking-[2px] font-medium mb-2">
                {selectedImage.category}
              </p>
              <h3 className="text-3xl font-bold text-white mb-4">{selectedImage.title}</h3>
              <p className="text-zinc-300 leading-relaxed text-[17px]">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery