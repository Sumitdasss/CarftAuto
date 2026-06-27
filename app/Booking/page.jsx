"use client";

import { useMemo, useState } from "react";
import { Wrench, Shield, Car, Zap, Award, CheckCircle } from "lucide-react";
import { carServicesAPI, bikeServicesAPI } from "../../DatA/Data";
import { fileURLToPath } from "node:url";

export default function PrimeMechanics() {
  const [vehicleType, setVehicleType] = useState("car");
  const [selectedCategory2, setSelectedCategory2] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [selectedService2, setSelectedService2] = useState(null);
  const product = [...carServicesAPI, ...bikeServicesAPI];
  const filterproduct = product.filter((item) => {
    return (item.catagory === selectedCategory)
  });
  
  const catagory = useMemo(
    () => [...new Set(product.map((p) => p.catagory).filter(Boolean))],
    [product],
  );
  const packageTitle = useMemo(
  () => [
    ...new Set(
      product
        .filter((p)=>p.catagory === selectedCategory2)
        .map((p)=>p.title)
        .filter(Boolean)
    )
  ],
  [product, selectedCategory2]
);
  const [tab, setTab] = useState("single");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicleType: "car",
    vehicle: "",
    service: "general",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    setSuccess(true);

    // সব input clear
    setForm({
      name: "",
      phone: "",
      vehicleType: "car",
      vehicle: "",
      service: "general",
      date: "",
      time: "",
    });

    // select clear
    setSelectedCategory("");
    setSelectedCategory2("");

    // service clear
    setSelectedService(null);
    setSelectedService2("");

  }, 1300);
  };

const selectedPackageData = product.find(
  (item) => item.title === selectedService2
);

const packageTotal = selectedPackageData?.services?.reduce(
  (total, service) => total + Number(service.price),
  0
) || 0;

  return (
    <div className="min-h-screen text-white font-sans">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#060612 0%,#080820 50%,#060610 100%)",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        >
          <source
            src="https://www.shutterstock.com/shutterstock/videos/3822942297/preview/stock-footage-workers-adjusting-automotive-engine-components-on-hoist.webm"
            type="video/mp4"
          />
        </video>

        {/* Decorative Elements */}
        <div className="absolute w-[700px] h-[700px] rounded-full border border-blue-600/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-600/10 to-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-blue-400/30 bg-blue-600/10 px-4 sm:px-5 py-2 rounded-full mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-300 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase">
              Est. 2018 · Dhaka, Bangladesh
            </span>
          </div>

          <h1
            className="leading-[0.88] tracking-wide mb-5 text-5xl sm:text-6xl md:text-7xl lg:text-[110px] font-black"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            PRIME
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              MECHANICS
            </span>
          </h1>

          <div className="w-14 h-0.5 mx-auto mb-5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          <p className="text-xs tracking-[0.18em] uppercase text-zinc-500 mb-3">
            Premium Automotive Care
          </p>
          <p className="text-sm text-blue-300/70 px-2">
            Expert Service • Genuine Parts • Guaranteed Results
          </p>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="bg-gradient-to-r from-cyan-400 via-blue-400 px-4 py-12 sm:py-20 relative z-30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900 border border-blue-600/20 rounded-3xl overflow-hidden shadow-2xl">
            {/* Card Header */}
            <div
              className="flex items-center gap-4 px-6 sm:px-8 py-6 border-b border-white/5"
              style={{
                background:
                  "linear-gradient(135deg,rgba(37,99,235,0.12),rgba(6,182,212,0.06))",
              }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2
                  className="text-2xl sm:text-3xl font-bold tracking-wide"
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    letterSpacing: "0.06em",
                  }}
                >
                  Book a Service
                </h2>
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Same Day Slots Available
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex bg-zinc-800 rounded-2xl p-1 mx-4 sm:mx-8 mt-6">
              <button
                onClick={() => setTab("single")}
                className={`flex-1 py-3 rounded-xl font-medium transition-all text-sm sm:text-base ${tab === "single" ? "bg-blue-600 text-white" : "text-zinc-400"}`}
              >
                Single Service
              </button>
              <button
                onClick={() => setTab("package")}
                className={`flex-1 py-3 rounded-xl font-medium transition-all text-sm sm:text-base ${tab === "package" ? "bg-blue-600 text-white" : "text-zinc-400"}`}
              >
                Service Package
              </button>
            </div>

            {/* Single Service Form */}
            {tab === "single" && (
              <form onSubmit={handleSubmit} className="px-4 sm:px-8 py-8 space-y-6">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                      placeholder="Rahim Khan"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                      placeholder="01XXXXXXXXX"
                      type="tel"
                    />
                  </div>
                </div>

                {/* Vehicle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Vehicle Type
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                    >
                      <option value="">Select Vehicle</option>
                      {catagory.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Vehicle Model
                    </label>
                    <input
                      name="vehicle"
                      value={form.vehicle}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                      placeholder="Toyota Corolla 2019"
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                    Service Type
                  </label>
                  <select
                    name="service"
                    onChange={(e) => {
                      const service = filterproduct
                        .flatMap((item) => item.services)
                        .find((s) => s.name === e.target.value);
                      setSelectedService(service);
                    }}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                  >
                    <option value="">Select Service</option>
                    {filterproduct.map((product) =>
                      product.services.map((service, index) => (
                        <option key={index} value={service.name}>
                          {service.name} - ৳{service.price}
                        </option>
                      )),
                    )}
                  </select>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center bg-zinc-800 border border-blue-600/30 rounded-2xl px-6 py-5">
                  <p className="text-sm text-zinc-400">Estimated Cost</p>
                  <p className="text-3xl sm:text-4xl font-bold text-blue-400">
                    {selectedService ? `৳ ${selectedService.price}` : "৳ 0"}
                  </p>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Preferred Date
                    </label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Time Slot
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                    >
                      <option value="">Choose Slot</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (1PM - 5PM)</option>
                      <option value="evening">Evening (5:30PM - 8:30PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 rounded-2xl text-lg font-bold transition-all hover:brightness-110"
                  style={{
                    background: "linear-gradient(135deg,#2563EB,#06B6D4)",
                  }}
                >
                  {loading ? "Processing..." : "CONFIRM BOOKING"}
                </button>
              </form>
            )}

            {/* Package Form */}
            {tab === "package" && (
              <form onSubmit={handleSubmit} className="px-4 sm:px-8 py-8 space-y-6">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                      placeholder="Rahim Khan"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                      placeholder="01XXXXXXXXX"
                      type="tel"
                    />
                  </div>
                </div>

                {/* Vehicle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Vehicle Type
                    </label>
                    <select
                      name="vehicleType"
                      value={selectedCategory2}
                      onChange={(e)=>setSelectedCategory2(e.target.value)}
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                    >
                      <option value="">Select Vehicle</option>
                      {catagory.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Vehicle Model
                    </label>
                    <input
                      name="vehicle"
                      value={form.vehicle}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                      placeholder="Toyota Corolla 2019"
                    />
                  </div>
                </div>

                {/* Package Select */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                    Package
                  </label>
                  <select
                    value={selectedService2 || ""}
                    onChange={(e)=>setSelectedService2(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                  >
                    <option value="">Select Package</option>
                    {packageTitle.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Details */}
                <div className="bg-zinc-800 border border-blue-600/30 rounded-2xl px-6 py-5">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-zinc-400">Selected Package</p>
                    <p className="text-xl font-bold text-blue-400">
                      {selectedService2 || "No Package"}
                    </p>
                  </div>

                  {selectedPackageData?.services?.map((service, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-2 border-b border-zinc-700 last:border-b-0"
                    >
                      <p className="text-zinc-300">{service.name}</p>
                      <p className="text-blue-400">৳ {service.price}</p>
                    </div>
                  ))}

                  <div className="flex justify-between items-center mt-5 pt-4 border-t border-zinc-700">
                    <p className="text-sm text-zinc-400">Total Cost</p>
                    <p className="text-3xl sm:text-4xl font-bold text-blue-400">
                      ৳ {packageTotal || 0}
                    </p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Preferred Date
                    </label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-blue-400 mb-1">
                      Time Slot
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                    >
                      <option value="">Choose Slot</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (1PM - 5PM)</option>
                      <option value="evening">Evening (5:30PM - 8:30PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 rounded-2xl text-lg font-bold transition-all hover:brightness-110"
                  style={{
                    background: "linear-gradient(135deg,#2563EB,#06B6D4)",
                  }}
                >
                  {loading ? "Processing..." : "CONFIRM BOOKING"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { icon: Shield, text: "1 Year Warranty" },
            { icon: Car, text: "Free Pickup & Drop" },
            { icon: Zap, text: "Same Day Service" },
            { icon: Award, text: "Certified Mechanics" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <item.icon className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <p className="font-medium text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-blue-600/30 rounded-3xl p-8 sm:p-12 text-center max-w-sm w-full">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-3">Booking Confirmed!</h2>
            <p className="text-zinc-400 mb-8">
              Our mechanic will contact you shortly.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-blue-600 px-10 py-4 rounded-2xl font-semibold w-full sm:w-auto"
            >
              DONE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}