"use client"
import React, { useState } from 'react'

const videos = [
  { id: "dQw4w9WgXcQ", title: "Complete engine rebuild — Toyota Corolla", category: "Engine", duration: "12:34", views: "24K", desc: "Full step-by-step engine overhaul with genuine parts replacement.", thumb: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=480&h=270&fit=crop" },
  { id: "3JZ_D3ELwOQ", title: "Brake pad and disc replacement guide", category: "Brakes", duration: "8:20", views: "18K", desc: "How to safely replace front and rear brake pads and rotors.", thumb: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=480&h=270&fit=crop" },
  { id: "ScMzIvxBSi4", title: "Full car detailing — ceramic coating", category: "Exterior", duration: "22:10", views: "41K", desc: "Professional ceramic coat application from prep to cure.", thumb: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=480&h=270&fit=crop" },
  { id: "fJ9rUzIMcZQ", title: "How to change engine oil — beginner guide", category: "Tutorial", duration: "6:05", views: "55K", desc: "Simple oil and filter change tutorial for any car owner.", thumb: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=480&h=270&fit=crop" },
  { id: "0ud-BBOHCuA", title: "Tire rotation and balancing — explained", category: "Tutorial", duration: "9:45", views: "31K", desc: "Why and how to rotate and balance your tires for safety.", thumb: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=480&h=270&fit=crop" },
  { id: "mXN1_7dGRrE", title: "2024 Toyota Camry — full service review", category: "Review", duration: "18:00", views: "12K", desc: "In-depth service inspection and performance review.", thumb: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=480&h=270&fit=crop" },
  { id: "2Vv-BfVoq4g", title: "Suspension overhaul — before and after", category: "Engine", duration: "14:30", views: "9K", desc: "Complete front suspension replacement and wheel alignment.", thumb: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=480&h=270&fit=crop" },
  { id: "M7lc1UVf-VE", title: "Paint correction and polishing", category: "Exterior", duration: "26:15", views: "37K", desc: "Removing swirl marks and deep scratches with machine polisher.", thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&h=270&fit=crop" },
]

const categories = ["All", "Engine", "Brakes", "Exterior", "Tutorial", "Review"]

const VideoGallery = () => {
  const [active, setActive] = useState("All")
  const [selected, setSelected] = useState(null)

  const filtered = active === "All" ? videos : videos.filter(v => v.category === active)

  const openVideo = (video) => setSelected(video)
  const closeVideo = () => setSelected(null)

  return (
    <section className="py-20 sm:py-28 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e2937 40%, #1e40af 75%, #0f172a 100%)"
      }}
    >
      <div className="max-w-360 mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 border border-blue-400/30 bg-blue-950/70 px-6 py-3 rounded-2xl mb-5">
            <span className="text-blue-400">🎬</span>
            <span className="uppercase text-blue-300 text-sm tracking-[3px] font-medium">VIDEO WORKSHOP</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-white mb-4">
            Video Gallery
          </h2>
          <p className="text-blue-100/80 max-w-md mx-auto">
            Real service. Real expertise. Watch our mechanics in action.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setSelected(null) }}
              className={`px-6 py-3 rounded-2xl text-sm font-medium border transition-all duration-300
                ${active === cat 
                  ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30" 
                  : "bg-zinc-900/80 text-zinc-400 border-zinc-700 hover:border-blue-500 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((video, index) => (
            <div
              key={index}
              onClick={() => openVideo(video)}
              className="group cursor-pointer bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-700 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-zinc-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2.5 py-1 rounded font-mono tracking-tight">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-medium">
                  {video.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-semibold leading-tight line-clamp-2 mb-3 text-[15px] group-hover:text-blue-300 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>{video.views} views</span>
                  <span className="text-blue-400">Watch Now →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={closeVideo}>
          <div 
            className="relative w-full max-w-5xl bg-zinc-900 rounded-3xl overflow-hidden border border-blue-500/30"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
              <div>
                <span className="text-blue-400 uppercase text-xs tracking-widest">{selected.category}</span>
                <h3 className="text-white font-bold mt-1">{selected.title}</h3>
              </div>
              <button 
                onClick={closeVideo}
                className="text-3xl text-zinc-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* YouTube Player */}
            <div className="relative w-full pt-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selected.id}?autoplay=1&rel=0`}
                title={selected.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Description */}
            <div className="p-6">
              <p className="text-zinc-300 leading-relaxed">{selected.desc}</p>
              <div className="flex gap-6 mt-6 text-sm text-zinc-400">
                <div>⏱ Duration: <span className="text-white">{selected.duration}</span></div>
                <div>👁 Views: <span className="text-white">{selected.views}</span></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoGallery