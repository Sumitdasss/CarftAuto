"use client";
import useStore from "../Componant/Layout/Store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast"; // Add this if not installed: npm i react-hot-toast
import {
  FiCheck,
  FiShoppingCart,
  FiMapPin,
  FiCreditCard,
  FiPackage,
  FiArrowRight,
  FiTrash2,
  FiMinus,
  FiPlus,
} from "react-icons/fi";

export default function Checkout() {
  const { cart, increasePopulation, decreasePopulation, removeFromCart } = useStore();
  const router = useRouter();

  const total = cart.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  const steps = [
    { title: "Cart", icon: <FiShoppingCart /> },
    { title: "Address", icon: <FiMapPin /> },
    { title: "Payment", icon: <FiCreditCard /> },
    { title: "Confirm", icon: <FiPackage /> },
    { title: "Done", icon: <FiCheck /> },
  ];

  const currentStep = 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#082f49] to-black text-white py-16">
      <div className="max-w-360 mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Checkout</h1>
          <p className="text-gray-400 mt-4 text-lg">Complete your order in few steps</p>
        </div>

        {/* Stepper */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl mb-10">
          <div className="relative flex justify-between">
            <div className="absolute top-7 left-12 right-12 h-1 bg-white/10 rounded-full" />
            
            {steps.map((step, index) => (
              <div key={step.title} className="relative z-10 flex-1 text-center">
                <div
                  className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                    index <= currentStep
                      ? "bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/40"
                      : "bg-slate-800 text-gray-400 border border-white/10"
                  }`}
                >
                  {index < currentStep ? <FiCheck /> : step.icon}
                </div>
                <p className="mt-4 font-semibold text-sm md:text-base">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
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
              <div className="space-y-6">
                {cart.map((item, index) => {
                  const quantity = item.quantity || 1;
                  
                  // Improved price calculation
                  const price = item.price || 0;
                  const finalPrice = item.originalPrice 
                    ? item.originalPrice * (1 - (item.discountPercentage || 0) / 100)
                    : price;

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
                        {item.title && <h4 className="pt-1 text-lg text-gray-300">{item.title}</h4>}

                        <div className="mt-3 space-y-1 text-sm text-slate-300">
                          {item.model && <p>Model: {item.model}</p>}
                          {item.fuel && <p>Fuel: {item.fuel}</p>}
                        </div>

                        {/* Quantity Controls */}
                       
                      </div>

                      {/* Price */}
                      <div className="md:w-48 flex flex-col items-end justify-between text-right">
                        <div>
                          <p className="text-emerald-400 text-2xl font-bold">
                            ${finalPrice.toFixed(2)}
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
            )}
          </div>

          {cart.length > 0 && (
            <div className="lg:col-span-4">
              <div className="sticky top-8 bg-white/[0.04] border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 text-lg">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Shipping</span>
                    <span className="text-emerald-400">Free</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
              onClick={() => router.push("/checkout/address")}
                  className="group mt-8 w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 font-bold text-lg hover:scale-105 transition shadow-lg shadow-red-500/30"
                >
                  Continue
                  <FiArrowRight className="group-hover:translate-x-2 transition" />
                </button>

               <button 
  onClick={() => router.push('/Shop')}
  className="mt-10 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-semibold hover:scale-105 transition"
>
  Continue Shopping
</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}