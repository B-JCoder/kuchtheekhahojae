import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// Components
import StatsCards from "./components/StatsCards";
import OrdersTable from "./components/OrdersTable";
import FiltersBar from "./components/FiltersBar";
import AreaStats from "./components/AreaStats";
import ExportButton from "./components/ExportButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createClient();

  // 1. Check Auth
  const {
    data: { session }, // Get session from auth state
    error: authError,
  } = await supabase.auth.getSession();

  // If fetching session fails or no session, redirect.
  // Note: getSession in server component might not validate token with server,
  // currently getUser() is recommended for security but getSession is faster.
  // Given we have middleware, this is a second check.

  if (!session || authError) {
    redirect("/login");
  }

  let orders: any[] = [];
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    orders = data || [];
  } catch (error) {
    console.error("Failed to fetch orders:", error);
  }

  return (
    <div className="p-8 space-y-8 bg-brand-offwhite min-h-screen">
      <div className="flex flex-col md:flex-row justify-between mt-40 items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <FiltersBar orders={orders} />
        <ExportButton orders={orders} />
      </div>

      <StatsCards orders={orders} />
      <AreaStats orders={orders} />
      <OrdersTable orders={orders} />
    </div>
  );
}
