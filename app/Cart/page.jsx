"use client";

import Link from "next/link";
import useStore from "../Componant/Layout/Store/store";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import toast from 'react-hot-toast';

const Cartpage = () => {
  const { cart, increasePopulation, decreasePopulation, removeFromCart } = useStore();

  const total = cart.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f4c75,_#081c2c,_#020617,_#000000)] text-white py-12">
      <div className="max-w-360 mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-black tracking-tight">Shopping Cart</h1>
            <p className="text-slate-400 mt-2 text-lg">
              Total Items: <span className="text-emerald-400 font-semibold">{cart.length}</span>
            </p>
          </div>
          {cart.length > 0 && (
            <button
              onClick={() => {
                // Assuming you have clearCart in store
                // If not, add it in your store
                toast.success("Cart cleared");
              }}
              className="text-red-400 hover:text-red-500 flex items-center gap-2"
            >
              <FiTrash2 /> Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-24 border border-white/10 rounded-3xl bg-white/[0.03]">
            <div className="text-7xl mb-6">🛒</div>
            <h2 className="text-4xl font-bold">Your Cart is Empty</h2>
            <p className="text-slate-400 mt-4 max-w-md mx-auto">
              Add some premium engine parts to your cart and get started.
            </p>
            <Link href="/Shop">
              <button className="mt-10 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-semibold hover:scale-105 transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-8 space-y-6">
              {cart.map((item, index) => {
                const quantity = item.quantity || 1;
                const discountAmount = item.originalPrice && item.discountPercentage 
                  ? (item.originalPrice * item.discountPercentage) / 100 
                  : 0;
                const finalPrice = item.originalPrice ? item.originalPrice - discountAmount : (item.price || 0);

                return (
                  <div
                    key={index}
                    className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6 group"
                  >
                    {/* Image */}
                    <div className="w-full md:w-48 h-48 bg-slate-900 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.img || item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold line-clamp-2">{item.name}</h3>

                      <div className="mt-3 space-y-1 text-sm text-slate-300">
                        {item.model && <p>Model: {item.model}</p>}
                        {item.fuel && <p>Fuel: {item.fuel}</p>}
                      </div>
<h2 className="pt-2 text-[20px] text-white font-medium ">{item.title}</h2>
                      {/* Quantity Controls */}
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => decreasePopulation(item.id)}
                            className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-xl transition border border-white/10"
                          >
                            <FiMinus />
                          </button>
                          <span className="px-6 py-2 text-lg font-semibold border border-white/10 rounded-2xl min-w-[52px] text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => increasePopulation(item.id)}
                            className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-xl transition border border-white/10"
                          >
                            <FiPlus />
                          </button>
                        </div>

                        <div className="flex gap-3">
                          <Link href={`/DetailPage/${item.id}`}>
                            <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-2xl text-sm font-medium transition">
                              View Details
                            </button>
                          </Link>
                          <button
                            onClick={() => {
                              removeFromCart(item.id);
                              toast.success("Item removed from cart");
                            }}
                            className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-2xl text-sm font-medium transition flex items-center gap-2"
                          >
                            <FiTrash2 /> Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Price & Subtotal */}
                    <div className="md:w-48 flex flex-col items-end justify-between text-right">
                      <div>
                        <p className="text-emerald-400 text-2xl font-bold">
                          ${finalPrice}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                          ${(finalPrice * quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-8 bg-white/[0.04] border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">Cart Total</h2>

                <div className="space-y-4 text-lg">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Subtotal</span>
                    <span>${total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Shipping</span>
                    <span className="text-emerald-400">Free</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>

                <div className="mt-8 ">
                  <Link href="/checkout">
                    <button className="w-full py-4 bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl font-semibold text-lg hover:brightness-110 transition">
                      Proceed to Checkout
                    </button>
                  </Link>

                  <Link  href="/Shop">
                    <button className="w-full mt-4 py-4 border border-white/20 hover:bg-white/5 rounded-2xl font-medium transition">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;