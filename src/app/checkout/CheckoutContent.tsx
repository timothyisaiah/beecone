"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice, generateOrderId } from "@/lib/utils";
import { CreditCard, Smartphone, Check, ShoppingBag } from "lucide-react";

type PaymentMethod = "mobile-money" | "card";
type Step = "info" | "confirmation";

export default function CheckoutContent() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState<Step>("info");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("mobile-money");
  const [orderId, setOrderId] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    postalCode: "",
  });

  function updateField(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const id = generateOrderId();
    setOrderId(id);
    setStep("confirmation");
    clearCart();
  }

  if (items.length === 0 && step !== "confirmation") {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <ShoppingBag className="h-16 w-16 text-stone-300" />
        <h1 className="mt-4 font-serif text-2xl font-bold text-stone-900">
          Nothing to checkout
        </h1>
        <p className="mt-2 text-stone-500">
          Add some items to your cart first.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-600 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  if (step === "confirmation") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="mt-6 font-serif text-3xl font-bold text-stone-900">
            Order Confirmed!
          </h1>
          <p className="mt-2 text-stone-500">
            Thank you for your order. We&apos;ll send you a confirmation
            email shortly.
          </p>
          <div className="mt-6 rounded-xl bg-amber-50 border border-amber-100 p-4">
            <p className="text-sm text-stone-500">Order ID</p>
            <p className="mt-1 font-mono font-bold text-stone-900 text-lg">
              {orderId}
            </p>
          </div>
          <Link
            href="/shop"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-600 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-3xl font-bold text-stone-900">
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Customer info */}
              <div className="rounded-xl bg-white border border-stone-100 p-6">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  Customer Information
                </h2>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-stone-700"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-stone-700"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-stone-700"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="rounded-xl bg-white border border-stone-100 p-6">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  Delivery Address
                </h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-stone-700"
                    >
                      Street Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      required
                      value={form.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-stone-700"
                      >
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        required
                        value={form.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-stone-700"
                      >
                        Region
                      </label>
                      <input
                        id="region"
                        type="text"
                        required
                        value={form.region}
                        onChange={(e) => updateField("region", e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="postalCode"
                        className="block text-sm font-medium text-stone-700"
                      >
                        Postal Code
                      </label>
                      <input
                        id="postalCode"
                        type="text"
                        value={form.postalCode}
                        onChange={(e) =>
                          updateField("postalCode", e.target.value)
                        }
                        className="mt-1 block w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="rounded-xl bg-white border border-stone-100 p-6">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  Payment Method
                </h2>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("mobile-money")}
                    className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                      paymentMethod === "mobile-money"
                        ? "border-amber-600 bg-amber-50"
                        : "border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    <Smartphone
                      className={`h-6 w-6 ${
                        paymentMethod === "mobile-money"
                          ? "text-amber-600"
                          : "text-stone-400"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-semibold text-stone-900">
                        Mobile Money
                      </p>
                      <p className="text-xs text-stone-500">
                        MTN, Vodafone, AirtelTigo
                      </p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${
                      paymentMethod === "card"
                        ? "border-amber-600 bg-amber-50"
                        : "border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    <CreditCard
                      className={`h-6 w-6 ${
                        paymentMethod === "card"
                          ? "text-amber-600"
                          : "text-stone-400"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-semibold text-stone-900">
                        Credit / Debit Card
                      </p>
                      <p className="text-xs text-stone-500">
                        Visa, Mastercard
                      </p>
                    </div>
                  </button>
                </div>

                {paymentMethod === "mobile-money" && (
                  <div className="mt-4 p-4 rounded-lg bg-amber-50/50 border border-amber-100">
                    <p className="text-sm text-stone-600">
                      You will receive a payment prompt on your mobile device
                      after placing the order.
                    </p>
                  </div>
                )}
                {paymentMethod === "card" && (
                  <div className="mt-4 p-4 rounded-lg bg-amber-50/50 border border-amber-100">
                    <p className="text-sm text-stone-600">
                      Card payment will be processed securely. Payment gateway
                      integration coming soon.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="rounded-xl bg-white border border-stone-100 p-6 sticky top-24">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  Order Summary
                </h2>

                <div className="mt-4 space-y-3">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden bg-amber-50">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-stone-900 truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-stone-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-stone-900">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2 border-t border-stone-100 pt-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Subtotal</span>
                    <span className="font-medium">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between border-t border-stone-100 pt-2">
                    <span className="font-semibold text-stone-900">Total</span>
                    <span className="font-bold text-lg text-stone-900">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition-colors shadow-lg"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
