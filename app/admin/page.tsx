export default async function AdminPage() {
  const res = await fetch("http://localhost:3000/api/orders", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-8 text-red-600">Failed to load orders</div>;
  }

  const orders = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      {orders.length === 0 && <p className="text-gray-500">No orders yet</p>}

      <div className="space-y-4">
        {orders.map((o: any) => (
          <div key={o.orderId} className="border p-4 rounded-lg">
            <p>
              <strong>ID:</strong> {o.orderId}
            </p>
            <p>
              <strong>Name:</strong> {o.name}
            </p>
            <p>
              <strong>Phone:</strong> {o.phone}
            </p>
            <p>
              <strong>Area:</strong> {o.area}
            </p>
            <p>
              <strong>Total:</strong> Rs. {o.total}
            </p>
            <p className="text-green-600 font-bold">{o.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
