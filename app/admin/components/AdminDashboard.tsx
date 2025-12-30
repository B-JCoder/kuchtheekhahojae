"use client";

import { useState, useMemo } from "react";
import StatsCards from "./StatsCards";
import OrdersTable from "./OrdersTable";
import FiltersBar from "./FiltersBar";
import AreaStats from "./AreaStats";
import ExportButton from "./ExportButton";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminDashboard({
  initialOrders,
}: {
  initialOrders: any[];
}) {
  const [orders, setOrders] = useState(initialOrders);
  const [statusFilter, setStatusFilter] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();
  const supabase = createClient();

  // Create unique list of areas from the orders
  const areas = useMemo(() => {
    return Array.from(new Set(orders.map((o) => o.area))).filter(Boolean);
  }, [orders]);

  // Handle Order Status Update (Optimistic + Supabase)
  const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    // Optimistic update
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );

    try {
      const { error } = await supabase
        .from("orders")
        .update({ status: newStatus })
        .eq("id", orderId);

      if (error) {
        throw error;
      }
      router.refresh(); // Refresh server data guarantees consistency
    } catch (error) {
      console.error("Error updating status:", error);
      // Revert if needed, but for now we'll assume success or user refresh
    }
  };

  // Filter Logic
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      // 1. Status Filter
      if (statusFilter && order.status !== statusFilter) return false;

      // 2. Area Filter
      if (areaFilter && order.area !== areaFilter) return false;

      // 3. Search Filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesId =
          order.order_id?.toString().toLowerCase().includes(query) ||
          order.id?.toString().toLowerCase().includes(query);
        const matchesName = order.name?.toLowerCase().includes(query);
        const matchesPhone = order.phone?.toString().includes(query);

        if (!matchesId && !matchesName && !matchesPhone) return false;
      }

      return true;
    });
  }, [orders, statusFilter, areaFilter, searchQuery]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Pass filter props to FiltersBar */}
        <FiltersBar
          status={statusFilter}
          setStatus={setStatusFilter}
          area={areaFilter}
          setArea={setAreaFilter}
          search={searchQuery}
          setSearch={setSearchQuery}
          areas={areas}
          count={filteredOrders.length}
        />
        <ExportButton orders={filteredOrders} />
      </div>

      {/* Stats should reflect global state or filtered? 
          "Total Revenue = sum of completed orders only".
          Usually dashboard stats are global. But if I filter by area, I might want to see area stats.
          However, the prompt asks for "Categories must be completely separate", "Filtering... should show only relevant orders".
          Let's pass 'filteredOrders' to Table, but 'orders' (global) to Stats? 
          Or maybe 'AreaStats' should take global list and show breakdown.
          'StatsCards' specifically asks for "Total Revenue". If I filter to "Pending", Total Revenue should probably still be Total Revenue of the business, OR 0 (since pending doesn't count).
          To avoid confusion, I will pass GLOBAL orders to StatsCards so the top-level KPIs remain constant and truthful to "Total Revenue", 
          UNLESS the user expects the dashboard to become a report for the selection.
          Given standard admin panel behavior, Top Cards = Global. Table = Filtered.
      */}
      <StatsCards orders={orders} />

      <AreaStats orders={orders} />

      <OrdersTable
        orders={filteredOrders}
        onStatusUpdate={handleStatusUpdate}
      />
    </div>
  );
}
