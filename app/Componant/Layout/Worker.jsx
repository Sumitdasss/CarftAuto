"use client";

import { FaStar } from "react-icons/fa";
import {mechanicsAPI} from "../../../DatA/Data"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function ExpertMechanics() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#020617] via-[#061A2F] to-[#0F172A] text-white">
      <div className="max-w-360 mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
            Our Team
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent">
            Meet Our Expert Mechanics
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Certified automotive professionals delivering premium car and motorcycle services.
          </p>
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
      slidesPerView: 4,
    },
  }}
  className="pb-14"
>
        

          {mechanicsAPI.map((item, index) => (

            <SwiperSlide
              key={index}
              className="group rounded-3xl overflow-hidden bg-white/[0.03] border border-cyan-500/10 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-cyan-400 text-sm mt-1">
                  {item.role}
                </p>

                <p className="text-slate-400 text-sm mt-3">
                  {item.exp}
                </p>
                <p className="text-slate-400 text-sm mt-3">
                  Working Category:{item.type}
                </p>

                <div className="flex items-center gap-2 mt-4">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold">
                    {item.rating}
                  </span>
                  <span className="text-slate-500 text-sm">
                    Customer Rating
                  </span>
                </div>

                <div className="mt-4 border-t border-white/10 pt-4">
  <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
    Expertise
  </h4>

  <div className="flex flex-wrap gap-2">
    {item.speciality?.map((skill, idx) => (
      <span
        key={idx}
        className="px-3 py-1 text-[11px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-300"
      >
        {skill}
      </span>
    ))}
  </div>
</div>
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
}