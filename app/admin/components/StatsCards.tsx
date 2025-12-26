export default function StatsCards({ orders }: { orders: any[] }) {
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const codOrders = orders.filter((o) => o.paymentMethod === "COD").length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-black">
      <Stat title="Total Orders" value={totalOrders} />
      <Stat title="Total Revenue" value={`Rs. ${totalRevenue}`} />
      <Stat title="Pending Orders" value={pendingOrders} />
      <Stat title="Cash on Delivery Orders" value={codOrders} />
    </div>
  );
}

function Stat({ title, value }: { title: string; value: any }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm text-black">
      <p className="text-sm text-black">{title}</p>
      <p className="text-2xl font-bold mt-2 text-black">{value}</p>
    </div>
  );
}
