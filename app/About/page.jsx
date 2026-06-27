"use client";
import React from "react";
import { Award, Users, Wrench, Clock, Shield } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section - Rich Blue Gradient */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-[#0a1428] via-[#1e3a8a] to-[#0f172a]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Prime Mechanics</span>
          </h1>
          <p className="text-xl text-blue-100/90 max-w-2xl mx-auto">
            Dhaka's most trusted premium automotive service center since 2018
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Founded in 2018, Prime Mechanics started with a simple mission: 
                to deliver world-class automotive service with honesty, precision, 
                and genuine parts in Bangladesh.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg mt-6">
                Today we are proud to be one of Dhaka's most trusted workshops, 
                serving hundreds of happy customers every month with premium care 
                for cars and bikes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-blue-500/20 rounded-3xl p-10">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-blue-400">6+</div>
                  <p className="text-zinc-400 mt-2">Years of Excellence</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-cyan-400">5000+</div>
                  <p className="text-zinc-400 mt-2">Happy Customers</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-400">50+</div>
                  <p className="text-zinc-400 mt-2">Certified Mechanics</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-cyan-400">100%</div>
                  <p className="text-zinc-400 mt-2">Genuine Parts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield, 
                title: "Trust & Transparency", 
                desc: "No hidden charges. No compromise on quality.",
                color: "blue"
              },
              { 
                icon: Wrench, 
                title: "Technical Excellence", 
                desc: "Modern equipment and certified professionals.",
                color: "cyan"
              },
              { 
                icon: Users, 
                title: "Customer First", 
                desc: "Your satisfaction is our top priority.",
                color: "blue"
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className="group bg-zinc-950 border border-zinc-700 hover:border-blue-500/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <item.icon className={`w-12 h-12 mb-6 text-${item.color}-400 group-hover:scale-110 transition-transform`} />
                <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Why Customers Trust Us</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "1 Year Warranty on all services",
              "Free Pickup & Drop Service",
              "Genuine & High-Quality Parts",
              "Same Day Service Available",
              "Experienced Certified Mechanics",
              "100% Transparency & Fair Pricing"
            ].map((reason, i) => (
              <div 
                key={i} 
                className="flex items-start gap-5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-blue-500/30 p-7 rounded-3xl transition-all group"
              >
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 text-white font-bold mt-0.5 group-hover:scale-110 transition-transform">
                  ✓
                </div>
                <p className="text-lg text-left text-zinc-200">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;