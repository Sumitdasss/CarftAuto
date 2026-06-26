"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FiPackage,
  FiArrowLeft,
  FiCheckCircle,
  FiMapPin,
  FiCreditCard,
} from "react-icons/fi";
import useStore from "../../Componant/Layout/Store/store";

export default function Confirm() {
  const router = useRouter();
  const { cart } = useStore();

  // Calculate real total from cart
  const total = cart.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  const itemsCount = cart.length;

  const handleConfirmOrder = () => {
    // TODO: Later - Save order to database, clear cart, send confirmation email, etc.
    router.push("/checkout/success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#082f49] to-black text-white py-16">
      <div className="max-w-360 mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Confirm Order</h1>
          <p className="text-gray-400 mt-4 text-lg">Review your order before final submission</p>
        </div>

        {/* Stepper */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-10">
          <div className="relative flex justify-between">
            <div className="absolute top-7 left-12 right-12 h-1 bg-white/10 rounded-full" />
            
            {["Cart", "Address", "Payment", "Confirm", "Done"].map((step, index) => (
              <div key={step} className="relative z-10 flex-1 text-center">
                <div
                  className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                    index === 3
                      ? "bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/40"
                      : index < 3
                      ? "bg-emerald-500"
                      : "bg-slate-800 text-gray-400 border border-white/10"
                  }`}
                >
                  {index < 3 ? "✓" : index === 3 ? <FiPackage /> : index + 1}
                </div>
                <p className="mt-4 font-semibold text-sm md:text-base">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Order Review Section */}
          <div className="lg:col-span-8 space-y-8">
            {/* Delivery Address */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FiMapPin className="text-2xl text-cyan-400" />
                <h2 className="text-2xl font-bold">Delivery Address</h2>
              </div>
              <div className="pl-10">
                <p className="font-semibold">John Doe</p>
                <p className="text-gray-400">+880 17XX-XXXXXX</p>
                <p className="text-gray-400 mt-1">
                  House 12, Road 5, Block B, Mirpur-10<br />
                  Dhaka, Dhaka Division, 1216
                </p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FiCreditCard className="text-2xl text-cyan-400" />
                <h2 className="text-2xl font-bold">Payment Method</h2>
              </div>
              <div className="pl-10 flex items-center gap-4">
                <div className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-xl text-sm font-medium">
                  Credit Card •••• 4242
                </div>
                <p className="text-gray-400">Securely charged upon delivery</p>
              </div>
            </div>

            {/* Cart Items Summary */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-6">
                Items in Your Order ({itemsCount})
              </h2>
              
              {cart.length === 0 ? (
                <p className="text-center text-gray-400 py-10">No items in cart</p>
              ) : (
                <div className="space-y-6">
                  {cart.map((item, index) => {
                    const quantity = item.quantity || 1;
                    const price = item.price || 0;
                    const finalPrice = item.originalPrice 
                      ? item.originalPrice * (1 - (item.discountPercentage || 0) / 100)
                      : price;

                    return (
                      <div
                        key={index}
                        className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row gap-6"
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
                          {item.title && <h4 className="pt-1 text-[18px] text-gray-300">{item.title}</h4>}

                          <div className="mt-3 space-y-1 text-sm text-slate-300">
                            {item.model && <p>Model: {item.model}</p>}
                            {item.fuel && <p>Fuel: {item.fuel}</p>}
                          </div>

                          <div className="mt-auto pt-4">
                            <p className="text-sm text-gray-400">Quantity: <span className="font-semibold text-white">{quantity}</span></p>
                          </div>
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
          </div>

          {/* Final Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-slate-400">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-slate-400">Shipping</span>
                  <span className="text-emerald-400">Free</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-slate-400">Tax (Included)</span>
                  <span>$0.00</span>
                </div>

                <div className="h-px bg-white/10 my-4" />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-8">
<Link href="/cheak22/success">
                <button
                  onClick={handleConfirmOrder}
                  className="w-full py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3 group"
                >
                  <FiCheckCircle className="group-hover:scale-110 transition" />
                  Confirm & Place Order
                </button>
                </Link>
              </div>

              <Link href="/checkout/payment" className="block mt-4">
                <button className="w-full py-4 border border-white/20 hover:bg-white/5 rounded-3xl font-medium transition flex items-center justify-center gap-2">
                  <FiArrowLeft /> Back to Payment
                </button>
              </Link>

              <p className="text-center text-xs text-gray-500 mt-8">
                By confirming, you agree to our Terms  Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}