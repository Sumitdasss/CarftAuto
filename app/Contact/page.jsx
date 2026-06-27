"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you soon.");
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-800 text-white pt-20">
      <div className="max-w-360 mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Get In Touch</h1>
          <p className="text-blue-300 mt-3 text-lg">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Visit Our Workshop</h2>
            
            <div className="space-y-8">
              <div>
                <p className="text-blue-400 uppercase text-sm mb-2">ADDRESS</p>
                <p className="text-lg">Mirpur-10, Dhaka 1216</p>
                <p className="text-zinc-400">Opposite Mirpur Stadium, Dhaka, Bangladesh</p>
              </div>

              <div>
                <p className="text-blue-400 uppercase text-sm mb-2">PHONE</p>
                <p className="text-2xl font-medium">017XX-XXXXXX</p>
                <p className="text-2xl font-medium">019XX-XXXXXX</p>
              </div>

              <div>
                <p className="text-blue-400 uppercase text-sm mb-2">EMAIL</p>
                <p className="text-lg">info@primemechanics.com</p>
              </div>

              <div>
                <p className="text-blue-400 uppercase text-sm mb-2">WORKING HOURS</p>
                <p>Saturday - Thursday: 8:00 AM - 8:00 PM</p>
                <p>Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 border border-blue-900/50 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                  className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:border-blue-500 outline-none"
              >
                <option value="">Select Service</option>
                <option value="general">General Service</option>
                <option value="engine">Engine Overhaul</option>
                <option value="brake">Brake Service</option>
                <option value="detailing">Car Detailing</option>
                <option value="other">Others</option>
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message here..."
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-3xl px-5 py-4 focus:border-blue-500 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-lg font-bold hover:brightness-110 transition-all"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;