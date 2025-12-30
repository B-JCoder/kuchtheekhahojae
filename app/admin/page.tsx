import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// Components
import AdminDashboard from "./components/AdminDashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createClient();

  // 1. Check Auth
  const {
    data: { session },
    error: authError,
  } = await supabase.auth.getSession();

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
    <div className="p-8 space-y-8 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row justify-between mt-40 items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
      </div>

      <AdminDashboard initialOrders={orders} />
    </div>
  );
}
