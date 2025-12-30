import OrderCard from "./OrderCard";

export default function OrdersTable({
  orders,
  onStatusUpdate,
}: {
  orders: any[];
  onStatusUpdate: (id: string, status: string) => Promise<void>;
}) {
  if (orders.length === 0) {
    return <p className="text-black mt-4">No matching orders found.</p>;
  }

  return (
    <div className="space-y-4 mt-4">
      {orders.map((order) => (
        <OrderCard
          key={order.id || order.order_id}
          order={order}
          onStatusUpdate={onStatusUpdate}
        />
      ))}
    </div>
  );
}
