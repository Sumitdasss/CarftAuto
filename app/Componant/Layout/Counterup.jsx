"use client";

import CountUp from "react-countup";
import { FaStar, FaUserCog, FaTools, FaSmile } from "react-icons/fa";

const StatsSection = () => {
  return (
    <section className="py-24 bg-[#07111F] text-white">
      <div className="max-w-360 mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent">
            Trusted Automotive Experts
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Professional mechanics, advanced diagnostics and thousands of
            satisfied customers across car and motorcycle services.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="rounded-2xl border border-cyan-500/10 bg-white/[0.03] p-8 text-center">
            <FaUserCog className="mx-auto text-4xl text-cyan-400 mb-4" />
            <h3 className="text-4xl font-black">
              <CountUp end={25} duration={3} />+
            </h3>
            <p className="mt-2 text-slate-400 uppercase text-xs">
              Expert Mechanics
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/10 bg-white/[0.03] p-8 text-center">
            <FaTools className="mx-auto text-4xl text-cyan-400 mb-4" />
            <h3 className="text-4xl font-black">
              <CountUp end={15} duration={3} />+
            </h3>
            <p className="mt-2 text-slate-400 uppercase text-xs">
              Years Experience
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/10 bg-white/[0.03] p-8 text-center">
            <FaSmile className="mx-auto text-4xl text-cyan-400 mb-4" />
            <h3 className="text-4xl font-black">
              <CountUp end={12000} duration={3} separator="," />+
            </h3>
            <p className="mt-2 text-slate-400 uppercase text-xs">
              Happy Customers
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/10 bg-white/[0.03] p-8 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="text-yellow-400 text-2xl"
                />
              ))}
            </div>

            <h3 className="text-4xl font-black">
              <CountUp
                end={4.9}
                decimals={1}
                duration={3}
              />
            </h3>

            <p className="mt-2 text-slate-400 uppercase text-xs">
              Average Rating
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;