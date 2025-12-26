import StatsCards from "./components/StatsCards";
import OrdersTable from "./components/OrdersTable";
import FiltersBar from "./components/FiltersBar";
import AreaStats from "./components/AreaStats";
import ExportButton from "./components/ExportButton";

export default async function AdminPage() {
  let orders = [];
  try {
    const res = await fetch("http://localhost:3000/api/orders", {
      cache: "no-store",
    });

    if (res.ok) {
      orders = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch orders:", error);
  }

  return (
    <div className="p-8 space-y-8 bg-brand-offwhite min-h-screen ">
      {/* Filters + Export */}
      <div className="flex flex-col md:flex-row justify-between mt-40 items-center gap-4">
        <FiltersBar orders={orders} />
        <ExportButton orders={orders} />
      </div>

      {/* Analytics */}
      <StatsCards orders={orders} />
      <AreaStats orders={orders} />

      {/* Orders List */}
      <OrdersTable orders={orders} />
    </div>
  );
}
