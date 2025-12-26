"use client";

import { saveAs } from "file-saver";

export default function ExportButton({ orders }: { orders: any[] }) {
  const handleExport = () => {
    const csv = [
      ["Order ID", "Name", "Phone", "Area", "Address", "Total", "Status"],
      ...orders.map((o) => [
        o.orderId,
        o.name,
        o.phone,
        o.area,
        o.address,
        o.total,
        o.status,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "orders.csv");
  };

  return (
    <button
      onClick={handleExport}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
    >
      Export Orders
    </button>
  );
}
