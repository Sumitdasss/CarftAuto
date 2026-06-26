"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {
  FiCreditCard,
  FiArrowLeft,
  FiArrowRight,
  FiLock,
  FiCheckCircle,
  FiPhone,
} from "react-icons/fi";

export default function Payment() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvv: "",
  });

  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/checkout/confirm");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#082f49] to-black text-white py-16">
      <div className="max-w-360 mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Payment</h1>
          <p className="text-gray-400 mt-4 text-lg">Securely complete your payment</p>
        </div>

        {/* Stepper */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-10">
          <div className="relative flex justify-between">
            <div className="absolute top-7 left-12 right-12 h-1 bg-white/10 rounded-full" />
            
            {["Cart", "Address", "Payment", "Confirm", "Done"].map((step, index) => (
              <div key={step} className="relative z-10 flex-1 text-center">
                <div
                  className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                    index === 2
                      ? "bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/40"
                      : index < 2
                      ? "bg-emerald-500"
                      : "bg-slate-800 text-gray-400 border border-white/10"
                  }`}
                >
                  {index < 2 ? "✓" : index === 2 ? <FiCreditCard /> : index + 1}
                </div>
                <p className="mt-4 font-semibold text-sm md:text-base">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <FiCreditCard className="text-cyan-400" /> Choose Payment Method
                </h2>

                {/* Payment Options */}
                <div className="grid md:grid-cols-3 gap-4 mb-10">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-6 rounded-3xl border transition-all flex flex-col items-center gap-3 ${
                      paymentMethod === "card"
                        ? "border-cyan-400 bg-white/5 shadow-lg shadow-cyan-500/20"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <FiCreditCard className="text-4xl" />
                    <p className="font-semibold">Credit / Debit Card</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bkash")}
                    className={`p-6 rounded-3xl border transition-all flex flex-col items-center gap-3 ${
                      paymentMethod === "bkash"
                        ? "border-cyan-400 bg-white/5 shadow-lg shadow-cyan-500/20"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <FiPhone className="text-4xl" />
                    <p className="font-semibold">bKash</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-6 rounded-3xl border transition-all flex flex-col items-center gap-3 ${
                      paymentMethod === "cod"
                        ? "border-cyan-400 bg-white/5 shadow-lg shadow-cyan-500/20"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <FiCheckCircle className="text-4xl" />
                    <p className="font-semibold">Cash on Delivery</p>
                  </button>
                </div>

                {/* Card Form */}
                {paymentMethod === "card" && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleCardChange}
                        placeholder="4242 4242 4242 4242"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:border-cyan-400 outline-none transition"
                        maxLength={19}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Card Holder Name</label>
                        <input
                          type="text"
                          name="cardHolder"
                          value={cardDetails.cardHolder}
                          onChange={handleCardChange}
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:border-cyan-400 outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiry"
                          value={cardDetails.expiry}
                          onChange={handleCardChange}
                          placeholder="MM/YY"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:border-cyan-400 outline-none transition"
                          maxLength={5}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">CVV</label>
                      <input
                        type="password"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardChange}
                        placeholder="123"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:border-cyan-400 outline-none transition"
                        maxLength={4}
                      />
                    </div>
                  </div>
                )}

                {/* bKash / COD Info */}
                {(paymentMethod === "bkash" || paymentMethod === "cod") && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                    <FiPhone className="mx-auto text-5xl mb-4 text-emerald-400" />
                    <h3 className="text-xl font-semibold mb-2">
                      {paymentMethod === "bkash" ? "bKash Payment" : "Cash on Delivery"}
                    </h3>
                    <p className="text-gray-400">
                      {paymentMethod === "bkash"
                        ? "You will receive a bKash payment request on your phone."
                        : "Pay when your order arrives at your doorstep."}
                    </p>
                  </div>
                )}
              </div>

              {/* Security Notice */}
              <div className="flex items-center justify-center gap-2 text-sm text-emerald-400">
                <FiLock /> Your payment information is secure and encrypted
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/checkout/address" className="flex-1">
                  <button
                    type="button"
                    className="w-full py-4 border border-white/20 hover:bg-white/5 rounded-2xl font-medium transition flex items-center justify-center gap-2"
                  >
                    <FiArrowLeft /> Back to Address
                  </button>
                </Link>

<Link href="/cheak22/confirm">
                <button
                  type="submit"
                  className="flex-1 py-4 px-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl font-bold text-lg hover:scale-105 transition shadow-lg shadow-red-500/30 flex items-center justify-center gap-3 group"
                >
                  Confirm & Pay
                  <FiArrowRight className="group-hover:translate-x-1 transition" />
                </button>
                </Link>
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span className="text-slate-400">Subtotal</span>
                  <span>$1,240.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Shipping</span>
                  <span className="text-emerald-400">Free</span>
                </div>
                <div className="h-px bg-white/10 my-2" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>$1,240.00</span>
                </div>
              </div>

              <div className="mt-8 text-xs text-gray-500 space-y-1">
                <p>✦ Secure SSL Encryption</p>
                <p>✦ 256-bit Protection</p>
                <p>✦ Trusted Payment Gateway</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}