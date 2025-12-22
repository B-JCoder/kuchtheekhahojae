"use client";

import React, { useState } from "react";
import {
  X,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ArrowLeft,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Button } from "../ui/Button";
import Image from "next/image";

const AREAS = [
  "N/A",
  "Gulshan-e-Iqbal",
  "DHA",
  "Clifton",
  "North Nazimabad",
  "PECHS",
  "Bahria Town",
  "Johar",
];

export const CartSidebar = () => {
  const {
    isCartOpen,
    closeCart,
    items,
    updateQuantity,
    removeItem,
    cartTotal,
    clearCart,
  } = useCart();
  const [step, setStep] = useState<"cart" | "checkout" | "success">("cart");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    address: "",
  });
  const [error, setError] = useState("");

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setStep("checkout");
    setError("");
  };

  const handleBackToCart = () => {
    setStep("cart");
    setError("");
  };

  const generateOrderId = () => {
    const date = new Date();
    const dateStr = date.toISOString().slice(2, 10).replace(/-/g, "");
    const random = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    return `ORD-${dateStr}-${random}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Strict Validation
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.area ||
      !formData.address.trim()
    ) {
      setError("Please fill in all details to place your order.");
      return;
    }

    // Phone Validation (03XXXXXXXXX)
    const phoneRegex = /^03\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/[-\s]/g, ""))) {
      setError(
        "Please enter a valid Pakistani phone number (e.g., 03001234567)."
      );
      return;
    }

    const orderId = generateOrderId();

    const itemsList = items
      .map((i) => `• ${i.name} x ${i.quantity} (Rs. ${i.price * i.quantity})`)
      .join("\n");

    const subtotal = cartTotal;
    const delivery = formData.area ? 150 : 0;
    const total = subtotal + delivery;

    // Constructed Message
    const textMessage = `*NEW ORDER: ${orderId}*

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Area: ${formData.area}
Address: ${formData.address}

*Order Summary:*
${itemsList}

Subtotal: Rs. ${subtotal}
Delivery: Rs. ${delivery}
*Total: Rs. ${total}*

Payment Method: Cash on Delivery (COD)`;

    // URL Encode Message
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/923008269438?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    console.log("Order Placed:", { orderId, items, total, customer: formData });
    setStep("success");

    setTimeout(() => {
      clearCart();
    }, 5000);
  };

  const handleClose = () => {
    closeCart();
    setTimeout(() => {
      setStep("cart");
      setError("");
    }, 500);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col transform transition-transform duration-300">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between bg-brand-offwhite">
          <div className="flex items-center gap-2">
            {step === "checkout" && (
              <button
                onClick={handleBackToCart}
                className="mr-2 text-gray-600 hover:text-brand-dark"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <ShoppingBag className="w-5 h-5 text-brand-red" />
            <h2 className="font-bold text-lg text-brand-dark">
              {step === "cart"
                ? "Your Cart"
                : step === "checkout"
                ? "Checkout"
                : "Order Placed"}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {step === "cart" && (
            <>
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Your cart is empty
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Add some delicious Golgappas to get started!
                    </p>
                  </div>
                  <Button
                    onClick={handleClose}
                    variant="outline"
                    className="mt-4"
                  >
                    Browse Menu
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-3 border rounded-lg hover:shadow-sm transition-shadow bg-white"
                    >
                      <div className="relative w-20 h-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                            No Image
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold text-brand-dark line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="text-brand-red font-bold">
                            Rs. {item.price}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-colors text-gray-600"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-6 h-6 flex items-center justify-center hover:bg-white rounded-md transition-colors text-gray-600"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {step === "checkout" && (
            <form
              id="checkout-form"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-6">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-green-800">
                      Order via WhatsApp
                    </h3>
                    <p className="text-sm text-green-700 mt-1">
                      Fill the form below and click "Order on WhatsApp". We will
                      take your order directly!
                    </p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm font-medium border border-red-100 animate-pulse">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none text-black"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none text-black"
                  placeholder="0300 8269438"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <p className="text-xs text-gray-500 mt-1">
                  Format: 03XXXXXXXXX
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Area
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none bg-white text-black"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  required
                >
                  <option value="">Select Area</option>
                  {AREAS.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Address
                </label>
                <textarea
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none text-black"
                  placeholder="House #, Street, Block..."
                  rows={3}
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>

              <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-700">
                <p>
                  <strong>Payment Method:</strong> Cash on Delivery (COD)
                </p>
              </div>
            </form>
          )}

          {step === "success" && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark">
                Order Started on WhatsApp!
              </h2>
              <p className="text-gray-600">
                Thanks, {formData.name}.<br />
                Check your WhatsApp to complete the order.
              </p>
              <Button onClick={handleClose} className="mt-8">
                Continue Shopping
              </Button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {step !== "success" && items.length > 0 && (
          <div className="p-4 border-t bg-white safe-area-pb">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>Rs. {cartTotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span>{formData.area ? "Rs. 150" : "Calculated next"}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-brand-dark pt-2 border-t border-dashed">
                <span>Total</span>
                <span>Rs. {cartTotal + (formData.area ? 150 : 0)}</span>
              </div>
            </div>

            {step === "cart" ? (
              <Button fullWidth size="lg" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            ) : (
              <Button
                fullWidth
                size="lg"
                type="submit"
                form="checkout-form"
                className="bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Order on WhatsApp
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};
