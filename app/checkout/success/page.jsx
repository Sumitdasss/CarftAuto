"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiCheckCircle,
  FiShoppingCart,
  FiPackage,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";
import useStore from "../../Componant/Layout/Store/store";

export default function Success() {
  const { cart, clearCart } = useStore(); // Uncomment clearCart if you have it in store
  const [orderNumber] = useState(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);

  // Optional: Clear cart after successful order
  // useEffect(() => {
  //   clearCart();
  // }, [clearCart]);

  const total = cart.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#082f49] to-black text-white py-16 flex items-center">
      <div className="max-w-360 mx-auto px-5 text-center">
        {/* Success Animation Area */}
        <div className="mb-10 flex justify-center">
          <div className="w-32 h-32 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30">
            <FiCheckCircle className="text-emerald-400 text-8xl animate-bounce" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-4">
          Order Placed Successfully!
        </h1>
        
        <p className="text-2xl text-emerald-400 font-medium mb-2">
          Thank You for Your Purchase
        </p>
        
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          Your order has been confirmed. We will send you an email with all the details.
        </p>

        {/* Order Info Card */}
        <div className="mt-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mx-auto max-w-lg">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-400">Order Number</span>
            <span className="font-mono font-bold text-emerald-400">{orderNumber}</span>
          </div>

          <div className="h-px bg-white/10 my-6" />

          <div className="space-y-4 text-left">
            <div className="flex justify-between">
              <span className="text-gray-400">Total Amount</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Items</span>
              <span>{cart.length} items</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Estimated Delivery</span>
              <span className="text-emerald-400">3-5 Business Days</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/orders" className="flex-1 max-w-xs mx-auto sm:mx-0">
            <button onClick={clearCart} className="w-full py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all group">
              <FiPackage />
              Track Your Order
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </Link>

          <Link href="/Shop" className="flex-1 max-w-xs mx-auto sm:mx-0">
            <button onClick={clearCart} className="w-full py-5 border border-white/20 hover:bg-white/5 rounded-3xl font-medium text-lg transition flex items-center justify-center gap-3">
              <FiShoppingCart />
              Continue Shopping
            </button>
          </Link>
        </div>

        {/* Extra Options */}
        <div className="mt-8">
          <button
            onClick={() => alert("Invoice download started... (Demo)")}
            className="flex items-center gap-2 mx-auto text-gray-400 hover:text-white transition text-sm"
          >
            <FiDownload /> Download Invoice
          </button>
        </div>

        <p className="mt-16 text-sm text-gray-500">
          Need help? Contact our support at <span className="text-cyan-400">support@yourstore.com</span>
        </p>
      </div>
    </div>
  );
}