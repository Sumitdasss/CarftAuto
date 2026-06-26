"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {
  FiMapPin,
  FiArrowLeft,
  FiArrowRight,
  FiUser,
  FiPhone,
  FiHome,
} from "react-icons/fi";

export default function Address() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Bangladesh",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can save to store or localStorage here later
    router.push("/checkout/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#082f49] to-black text-white py-16">
      <div className="max-w-360 mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Shipping Address</h1>
          <p className="text-gray-400 mt-4 text-lg">Where should we deliver your order?</p>
        </div>

        {/* Stepper */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-10">
          <div className="relative flex justify-between">
            <div className="absolute top-7 left-12 right-12 h-1 bg-white/10 rounded-full" />
            
            {["Cart", "Address", "Payment", "Confirm", "Done"].map((step, index) => (
              <div key={step} className="relative z-10 flex-1 text-center">
                <div
                  className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                    index === 1
                      ? "bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/40"
                      : index < 1
                      ? "bg-emerald-500"
                      : "bg-slate-800 text-gray-400 border border-white/10"
                  }`}
                >
                  {index < 1 ? "✓" : index === 1 ? <FiMapPin /> : index + 1}
                </div>
                <p className="mt-4 font-semibold text-sm md:text-base">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <FiMapPin className="text-cyan-400" /> Delivery Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-4 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-cyan-400 outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-cyan-400 outline-none transition"
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                  </div>

                  {/* Address Line 1 */}
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">Address Line 1</label>
                    <div className="relative">
                      <FiHome className="absolute left-4 top-4 text-gray-400" />
                      <input
                        type="text"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-cyan-400 outline-none transition"
                        placeholder="House 12, Road 5, Block B"
                      />
                    </div>
                  </div>

                  {/* Address Line 2 */}
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">Address Line 2 (Optional)</label>
                    <input
                      type="text"
                      name="addressLine2"
                      value={formData.addressLine2}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:border-cyan-400 outline-none transition"
                      placeholder="Apartment, Floor, Landmark"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:border-cyan-400 outline-none transition"
                      placeholder="Dhaka"
                    />
                  </div>

                  {/* State / Division */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Division / State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:border-cyan-400 outline-none transition"
                      placeholder="Dhaka Division"
                    />
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:border-cyan-400 outline-none transition"
                      placeholder="1207"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:border-cyan-400 outline-none transition"
                    >
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="India">India</option>
                      <option value="USA">United States</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/checkout" className="flex-1">
                  <button
                    type="button"
                    className="w-full py-4 border border-white/20 hover:bg-white/5 rounded-2xl font-medium transition flex items-center justify-center gap-2"
                  >
                    <FiArrowLeft /> Back to Cart
                  </button>
                </Link>
<Link href={"/cheak22/payment"}>
                <button
                  type="submit"
                  className="flex-1 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl font-bold text-lg hover:scale-105 transition shadow-lg shadow-red-500/30 flex items-center justify-center gap-3 group"
                >
                  Continue to Payment
                  <FiArrowRight className="group-hover:translate-x-1 transition" />
                </button>
                </Link>
              </div>
            </form>
          </div>

 
          <div className="lg:col-span-4">
            <div className="sticky top-8 bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="font-semibold text-lg mb-4">Delivery Tips</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex gap-2">✅ Provide accurate phone number</li>
                <li className="flex gap-2">✅ Add landmark for faster delivery</li>
                <li className="flex gap-2">✅ Double-check postal code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}