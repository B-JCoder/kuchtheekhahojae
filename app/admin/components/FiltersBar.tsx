"use client";

import { Search, X } from "lucide-react";

interface FiltersBarProps {
  status: string;
  setStatus: (s: string) => void;
  area: string;
  setArea: (s: string) => void;
  search: string;
  setSearch: (s: string) => void;
  areas: string[];
  count: number;
}

export default function FiltersBar({
  status,
  setStatus,
  area,
  setArea,
  search,
  setSearch,
  areas,
  count,
}: FiltersBarProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col md:flex-row gap-4 items-center w-full">
        {/* Search Input */}
        <div className="relative flex-1 w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search Order ID, Name, Phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-8 py-2 border rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Status Filter */}
        <div className="flex gap-4 w-full md:w-auto">
          <select
            className="border p-2 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          {/* Area Filter */}
          <select
            className="border p-2 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </div>
      </div>
      <p className="text-sm text-gray-600">{count} orders found</p>
    </div>
  );
}
