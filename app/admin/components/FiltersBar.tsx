"use client";

import { useState } from "react";

export default function FiltersBar({ orders }: { orders: any[] }) {
  const [status, setStatus] = useState("");
  const [area, setArea] = useState("");

  const areas = Array.from(new Set(orders.map((o) => o.area)));

  // Filtered orders logic (frontend demo)
  const filteredOrders = orders.filter((o) => {
    return (
      (status ? o.status === status : true) && (area ? o.area === area : true)
    );
  });

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center text-black">
      <select
        className="border p-2 rounded-lg text-black"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option className="text-black" value="">
          All Status
        </option>
        <option className="text-black" value="pending">
          Pending
        </option>
        <option className="text-black" value="completed">
          Completed
        </option>
      </select>

      <select
        className="border p-2 rounded-lg"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      >
        <option value="">All Areas</option>
        {areas.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>

      <p className="text-sm text-black">{filteredOrders.length} orders shown</p>
    </div>
  );
}
