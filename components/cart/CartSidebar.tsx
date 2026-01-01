"use client";

import React, { useState, useRef } from "react";
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
import { DELIVERY_FEES } from "../../config/delivery";
import { generateOrderId, isValidPakistaniPhone } from "../../utils/order";
import { OrderPreviewModal } from "./OrderPreviewModal";

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
  const [error, setError] = useState("");
  const [previewOrder, setPreviewOrder] = useState<any>(null);
  const lastOrderTime = useRef<number>(0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    address: "",
  });

  const deliveryFee = DELIVERY_FEES[form.area] ?? 0;
  const total = cartTotal + deliveryFee;

  if (!isCartOpen) return null;

  const handleClose = () => {
    closeCart();
    setTimeout(() => {
      setStep("cart");
      setError("");
      setForm({ name: "", phone: "", area: "", address: "" });
    }, 500);
  };

  const handleBackToCart = () => {
    setStep("cart");
    setError("");
  };

  const validate = () => {
    if (!form.name || !form.phone || !form.address)
      return "All fields are required.";
    if (!isValidPakistaniPhone(form.phone)) return "Invalid phone number.";
    if (items.length === 0) return "Cart is empty.";
    return "";
  };

  const handlePreview = () => {
    const err = validate();
    if (err) return setError(err);

    const now = Date.now();
    if (now - lastOrderTime.current < 15000) {
      return setError("Please wait before placing another order.");
    }

    lastOrderTime.current = now;

    setPreviewOrder({
      ...form,
      items,
      total,
      orderId: generateOrderId(),
    });
  };

  const confirmOrder = async () => {
    if (!previewOrder) return;

    try {
      // 1️⃣ Send order to backend (LOG FIRST)
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: previewOrder.orderId,
          name: previewOrder.name,
          phone: previewOrder.phone,
          area: previewOrder.area,
          address: previewOrder.address,
          items: previewOrder.items,
          subtotal: cartTotal,
          delivery_fee: deliveryFee,
          total: previewOrder.total,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.error || "Failed to place order");
      }

      // 2️⃣ Construct WhatsApp message (AFTER successful API save)
      const msg = `
🧾 *NEW ORDER RECEIVED*
━━━━━━━━━━━━━━━━━━
🆔 *Order ID:* ${previewOrder.orderId}

👤 *Customer Details*
• Name: ${previewOrder.name}
• Phone: ${previewOrder.phone}
• Area: ${previewOrder.area || "Not Specified"}
• Address: ${previewOrder.address}

🛒 *Order Items*
${previewOrder.items
  .map(
    (i: any, index: number) =>
      `${index + 1}. ${i.name} × ${i.quantity} — Rs. ${i.price * i.quantity}`
  )
  .join("\n")}

━━━━━━━━━━━━━━━━━━
💵 *Bill Summary*
• Subtotal: Rs. ${cartTotal}
• Delivery Charges: Rs. ${deliveryFee}
• *Total Payable: Rs. ${previewOrder.total}*

💰 *Payment Method*
Cash on Delivery (COD)

📌 *Note:* Please confirm this order on WhatsApp.
`.trim();

      // 3️⃣ Open WhatsApp
      window.open(
        `https://wa.me/923008269438?text=${encodeURIComponent(msg)}`,
        "_blank"
      );

      // 4️⃣ Clear UI state safely
      clearCart();
      setPreviewOrder(null);
      setStep("success");
      setError("");
    } catch (err: any) {
      console.error("Order Error:", err);
      setError(
        err.message ||
          "Something went wrong while placing your order. Please try again."
      );
    }
  };

  return (
    <>
      <OrderPreviewModal
        order={previewOrder}
        onConfirm={confirmOrder}
        onClose={() => setPreviewOrder(null)}
      />

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col transform transition-transform duration-300">
        {/* Success Overlay */}
        {step === "success" && (
          <div className="absolute inset-0 bg-white z-[80] flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-300">
            <CheckCircle className="w-20 h-20 text-green-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">
              Order Sent to WhatsApp
            </h2>
            <p className="text-gray-600 mt-2">
              Thank you! We’ll contact you shortly to confirm your order.
            </p>
            <Button onClick={handleClose} className="mt-8">
              Continue Shopping
            </Button>
          </div>
        )}

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
              {step === "cart" ? "Your Cart" : "Checkout"}
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
                      Add some menu items to get started!
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
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 mb-6">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-green-800">
                      Order via WhatsApp
                    </h3>
                    <p className="text-sm text-green-700 mt-1">
                      Fill the details to verify delivery charges.
                    </p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="bg-red-100 text-red-600 p-3 rounded text-sm animate-pulse">
                  {error}
                </div>
              )}

              {["name", "phone", "address"].map((f) => (
                <div key={f}>
                  <input
                    placeholder={
                      f === "phone"
                        ? "Phone (03...)"
                        : f.charAt(0).toUpperCase() + f.slice(1)
                    }
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-black"
                    value={(form as any)[f]}
                    onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                  />
                </div>
              ))}

              {/* <select
                className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white text-black"
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
              >
                <option value="">Select Area</option>
                {Object.keys(DELIVERY_FEES).map((a) => (
                  <option key={a} value={a}>
                    {a} - Rs. {DELIVERY_FEES[a]}
                  </option>
                ))}
              </select> */}

              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between text-sm text-black">
                  <span>Subtotal:</span>
                  <span>Rs. {cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm text-black">
                  <span>Delivery:</span>
                  <span>Rs. {deliveryFee}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-black">
                  <span>Total:</span>
                  <span>Rs. {total}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {step !== "success" && items.length > 0 && (
          <div className="p-4 border-t bg-white safe-area-pb">
            {step === "cart" ? (
              <>
                <div className="flex justify-between font-bold text-lg text-brand-dark mb-4 text-black">
                  <span className="text-black">Total</span>
                  <span className="text-black">Rs. {cartTotal}</span>
                </div>
                <Button fullWidth size="lg" onClick={() => setStep("checkout")}>
                  Proceed to Checkout
                </Button>
              </>
            ) : (
              <Button
                fullWidth
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={handlePreview}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Preview Order
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};
