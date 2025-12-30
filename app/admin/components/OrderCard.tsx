"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  ChevronDown,
  ChevronUp,
  Package,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "processing":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "cancelled":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function OrderCard({ order }: { order: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(order.status);

  const updateStatus = async (newStatus: string) => {
    if (!confirm(`Change status to ${newStatus}?`)) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from("orders")
        .update({ status: newStatus })
        .eq("id", order.id);

      if (error) throw error;
      setStatus(newStatus);
    } catch (err: any) {
      alert("Failed to update status: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden text-black">
      {/* Header Summary */}
      <div
        className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-full ${getStatusColor(status)
              .replace("text-", "bg-")
              .replace("bg-", "bg-opacity-20 ")}`}
          >
            <Package
              className={`w-6 h-6 ${getStatusColor(status).split(" ")[1]}`}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg text-gray-900">
                {order.order_id}
              </h3>
              <span
                className={`text-xs px-2 py-0.5 rounded-full border border-current font-medium uppercase ${getStatusColor(
                  status
                )}`}
              >
                {status}
              </span>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
              <Clock className="w-3 h-3" />
              {new Date(order.created_at).toLocaleString()}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 md:ml-auto w-full md:w-auto justify-between md:justify-end">
          <div className="text-right">
            <p className="text-sm text-gray-500">Total</p>
            <p className="font-bold text-gray-900 text-lg">Rs. {order.total}</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      {isOpen && (
        <div className="border-t bg-gray-50 p-6 animate-in slide-in-from-top-2 duration-200">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Customer Details */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 border-b pb-2">
                Customer Details
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                    {order.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-base">
                      {order.name}
                    </p>
                    <p className="text-gray-500 flex items-center gap-1 mt-0.5">
                      <Phone className="w-3 h-3" /> {order.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-700 font-medium">{order.area}</p>
                    <p className="text-gray-500">{order.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 border-b pb-2">
                Order Items
              </h4>
              <div className="space-y-3">
                {order.items?.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-sm border-b border-dashed pb-2 last:border-0 last:pb-0"
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 w-6">
                        {item.quantity}x
                      </span>
                      <span className="text-gray-700">{item.name}</span>
                    </span>
                    <span className="font-medium text-gray-900">
                      Rs. {item.price * item.quantity}
                    </span>
                  </div>
                ))}

                <div className="pt-4 mt-2 border-t space-y-1 block md:hidden">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>Rs. {order.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Delivery</span>
                    <span>Rs. {order.delivery_fee}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-900 text-lg pt-1">
                    <span>Total</span>
                    <span>Rs. {order.total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3 justify-end border-t pt-4">
            <button
              disabled={loading || status === "pending"}
              onClick={() => updateStatus("pending")}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Mark Pending
            </button>
            <button
              disabled={loading || status === "processing"}
              onClick={() => updateStatus("processing")}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 disabled:opacity-50"
            >
              Mark Processing
            </button>
            <button
              disabled={loading || status === "completed"}
              onClick={() => updateStatus("completed")}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
            >
              Mark Completed
            </button>
            <button
              disabled={loading || status === "cancelled"}
              onClick={() => updateStatus("cancelled")}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-red-200 text-red-600 hover:bg-red-50 disabled:opacity-50"
            >
              Cancel Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
