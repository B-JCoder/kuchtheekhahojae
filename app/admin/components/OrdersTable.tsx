import OrderCard from "./OrderCard";

export default function OrdersTable({ orders }: { orders: any[] }) {
  if (orders.length === 0) {
    return <p className="text-black mt-4">No orders yet</p>;
  }

  return (
    <div className="space-y-4 mt-4">
      {orders.map((order) => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </div>
  );
}
